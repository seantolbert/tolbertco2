import { useEffect, useRef, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import Project from "../components/Project";
import Cert from "../components/Cert";
import Post from "../components/Post";
import Isotope from "isotope-layout";
import Filter from "../components/Filter";

const Works = () => {
  const { documents: works } = useCollection("works");

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        originTop: true,
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `#${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterChange = (key) => () => setFilterKey(key);

  return (
    <div className="min-h-screen max-w-5xl md:px-5 mx-auto" id="works">
      <h1 className="w-full text-center uppercase text-xl tracking-[5px] mb-16">Works</h1>

      <Filter handleFilterChange={handleFilterChange} filterKey={filterKey} />

      <div className="filter-container ">
        {works
          ? works.map((item) => {
              if (item.type === "post") {
                return <Post post={item} />;
              }

              if (item.type === "certification") {
                return <Cert cert={item} />;
              }

              if (item.type === "project") {
                return <Project project={item} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Works;
