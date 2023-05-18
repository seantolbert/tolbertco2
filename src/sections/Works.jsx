import { useEffect, useRef, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import Project from "../components/Project";
import Cert from "../components/Cert";
import Post from "../components/Post";
import Isotope from "isotope-layout";
import Filter from "../components/Filter";
import imagesLoaded from "imagesloaded";
import { dumb } from "../data/dummy";
import Test from "../components/Test";

const Works = () => {
  const { documents: works } = useCollection("works");
  const [mixedData, setMixedData] = useState([]);

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  const repos = [];

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        originTop: true,
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },
        hiddenStyle: {
          opacity: 0,
        },

        visibleStyle: {
          opacity: 1,
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

    // const mixData = () => {
    //   if (works && dumb) {
    //     const mixed = [...works, ...dumb];
    //     mixed.sort(() => Math.random() - 0.5);
    //     setMixedData(mixed);
    //   }
    // };
    // mixData();

    // return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    const mixData = () => {
      if (works && dumb) {
        const mixed = [...works, ...dumb];
        mixed.sort(() => Math.random() - 0.5);
        setMixedData(mixed);
      }
    };
    mixData();
  }, [works]);

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

              if (item.type === "project") {
                return <Project project={item} key={item.id} />;
              }

              if (item.type === "test") {
                return <Test testItem={item} key={idx} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Works;
