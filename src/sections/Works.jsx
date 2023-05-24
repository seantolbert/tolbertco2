import { useEffect, useRef, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import Cert from "../components/workCards/Cert";
import Post from "../components/workCards/Post";
import Isotope from "isotope-layout";
import Filter from "../components/Filter";
import imagesLoaded from "imagesloaded";
import { useGitRepos } from "../hooks/useGitRepos";
import Project2 from "../components/workCards/Project2";
import { galleryImages } from "../data/images";
import GalleryImage from "../components/workCards/GalleryImage";

const Works = () => {
  const { reposLoading, repos } = useGitRepos();
  const { documents: posts, isLoading: postsLoading } = useCollection("blog");
  const { documents: certs, isLoading: certsLoading } = useCollection("certs");

  const [filterKey, setFilterKey] = useState("*");
  const [mixedData, setMixedData] = useState([]);

  const isotope = useRef();

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "masonry",
        originTop: true,
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },

        transitionDuration: "0.8s",
        animationOptions: {
          stagger: 150,
          queue: false,
        },
      });

      const images = document.querySelectorAll(".filter-item img");
      imagesLoaded(images, () => {
        isotope.current.layout();
      });
    }, 1000);
  }, []);

  useEffect(() => {
    const mixData = () => {
      if (posts && certs && repos) {
        const mixed = [...posts, ...repos, ...galleryImages, ...certs];
        mixed.sort(() => Math.random() - 0.5);
        setMixedData(mixed);
      }
    };
    mixData();
  }, [posts, repos, certs]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `#${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterChange = (key) => () => setFilterKey(key);

  return (
    <div className="max-w-5xl md:px-5 mx-auto" id="works">
      <h1 className="w-full text-center uppercase text-xl tracking-[5px] mb-16">
        Works
      </h1>

      <Filter handleFilterChange={handleFilterChange} filterKey={filterKey} />

      <div className="filter-container ">
        {mixedData
          ? mixedData.map((item, idx) => {
              if (item.type === "post") {
                return <Post post={item} key={item.id} />;
              }

              if (item.type === "certification") {
                return <Cert cert={item} key={item.id} />;
              }

              if (item.type === "repo") {
                return <Project2 project={item} key={item.id} />;
              }

              if (item.type === "gallery") {
                return <GalleryImage link={item} key={idx} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Works;
