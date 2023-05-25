import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

import { useGallery } from "../hooks/useGallery";
import { useEffect, useRef, useState } from "react";
import GalleryCard from "../components/cards/GalleryCard";
import { isotopeConfig } from "../data/isotope";

const GalleryPage = () => {
  const { imageList } = useGallery("/gallery");

  console.log(imageList);

  const [mixedImages, setMixedImages] = useState([]);

  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", isotopeConfig);

    if (imageList) {
      isotope.current.layout();
    }

    const images = document.querySelectorAll(".gallery-item img");
    imagesLoaded(images, () => {
      isotope.current.layout();
    });
  });

  useEffect(() => {
    const mixData = () => {
      if (imageList) {
        const mixed = imageList.sort(() => Math.random() - 0.5);
        setMixedImages(mixed);
      }
    };
    mixData();
  }, [imageList]);

  return (
    <div className="min-h-screen mx-1 md:mx-2 mb-10">
      <div className="filter-container ">
        {mixedImages?.map((image, idx) => (
          <GalleryCard link={image} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
