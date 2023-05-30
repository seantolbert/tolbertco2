import { useEffect, useRef, useState } from "react";
import GalleryCard from "../components/cards/GalleryCard";
import imagesLoaded from "imagesloaded";
import { useGallery } from "../hooks/useGallery";
import Isotope from "isotope-layout";
import { isotopeConfig } from "../data/isotope";
import Filter from "../components/Filter";
import { galleryFilters } from "../data/filterCategories";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GalleryPage = () => {
  const { imageList: mountain } = useGallery("/gallery");
  const { imageList: pup } = useGallery("/pup");

  const [filterKey, setFilterKey] = useState("*");
  const [mixedPics, setMixedPics] = useState([]);

  const isotope = useRef();

  // console.log(mountain)

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-container", isotopeConfig);

      const images = document.querySelectorAll(".gallery-image img");
      imagesLoaded(images, () => {
        isotope.current.layout();
      });
    }, 500);
  });

  useEffect(() => {
    const mixData = () => {
      if (mountain && pup) {
        const mixed = [...mountain, ...pup];
        mixed.sort(() => Math.random() - 0.5);
        setMixedPics(mixed);
      }
    };
    mixData();
  }, [mountain, pup]);

  useEffect(() => {
    const iso = isotope.current;
    if (iso) {
      filterKey === "*"
        ? iso.arrange({ filter: "*" })
        : iso.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterChange = (key) => () => setFilterKey(key);

  return (
    <div className="min-h-screen mx-1 md:mx-2 mb-10 mt-2">
      <div className="flex items-center gap-9 relative py-10">
        <Link to="/" className="p-10 absolute left-0">
          <FontAwesomeIcon icon={faArrowLeft} className="text-5xl" />
        </Link>
        <h1 className="w-full uppercase text-center tracking-[5px]">Gallery</h1>
        {/* <Filter
          handleFilterChange={handleFilterChange}
          filters={galleryFilters}
          filterKey={filterKey}
        /> */}
      </div>
      <div className="gallery-container">
        {mixedPics
          ? mixedPics.map((image, idx) => (
              <GalleryCard link={image} key={idx} />
            ))
          : null}
      </div>
    </div>
  );
};

export default GalleryPage;
