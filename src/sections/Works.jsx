import { useEffect, useRef, useState } from "react";
// hooks
import { useCollection } from "../hooks/useCollection";
import { useGitRepos } from "../hooks/useGitRepos";
import { usePrintify } from "../hooks/usePrintify";

// isotope layout
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { isotopeConfig } from "../data/isotope";

// cards
import Cert from "../components/cards/Cert";
import Post from "../components/cards/Post";
import Project from "../components/cards/Project";
import Shirt from "../components/cards/Shirt";

import Filter from "../components/Filter";
import { workFilters } from "../data/filterCategories";

const Works = () => {
  const { repos, reposLoading } = useGitRepos();
  const { documents: posts, isLoading: postsLoading } = useCollection("blog");
  const { documents: certs, isLoading: certsLoading } = useCollection("certs");
  const { products, isLoading: shirtsLoading } = usePrintify();

  const [filterKey, setFilterKey] = useState("*");
  const [mixedData, setMixedData] = useState([]);

  const isotope = useRef();

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-container", isotopeConfig);

      const images = document.querySelectorAll(".filter-item img");
      imagesLoaded(images, () => {
        isotope.current.layout();
      });
    }, 1000);
  }, []);

  // mix all the data up and randomize it
  useEffect(() => {
    const mixData = () => {
      if (products && certs && repos && posts) {
        const mixed = [...posts, ...repos, ...certs, ...products];
        mixed.sort(() => Math.random() - 0.5);
        setMixedData(mixed);
      }
    };
    mixData();
  }, [posts, repos, certs, products]);

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
      <div>
        <h1 className="w-full text-center uppercase text-xl tracking-[5px] mb-16">
          Works
        </h1>
      </div>

      <Filter handleFilterChange={handleFilterChange} filters={workFilters} filterKey={filterKey} />

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
                return <Project project={item} key={item.id} />;
              }

              // if (item.type === "gallery") {
              //   return <GalleryImage link={item} key={idx} />;
              // }

              if (item.type === "product") {
                return <Shirt prod={item} key={item.id} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Works;
