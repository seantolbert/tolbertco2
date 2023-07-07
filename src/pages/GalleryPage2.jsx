import { Link } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGallery } from "../hooks/useGallery";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInfinite } from "../hooks/useInfinite";

const GalleryPage2 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // const { imageList, isLoading, imgError } = useGallery("/mountains");
  const imageRefs = useRef([]);

  const imageList = [];
  const isLoading = false;

  // const observer = useInfinite(loadMoreImages);

  const handleImageLoad = (idx) => {
    const imageRef = imageRefs.current[idx];
    gsap.to(imageRef, {
      opacity: 1,
      duration: 0.6,
    });
    gsap.to(imageRef, { y: 0, delay: 0.2, duration: 0.6 });
  };

  const handleImageRef = (idx, element) => {
    imageRefs.current[idx] = element;
  };

  return (
    <div className="min-h-screen flex flex-col items-start px-3 galgal relative">
      {/* header ... */}
      <div className="w-full flex items-center py-10">
        <Link to="/" className="p-10 absolute left-0">
          <FontAwesomeIcon icon={faArrowLeft} className="text-5xl" />
        </Link>
        <h1 className="w-full uppercase text-center tracking-[5px]">Gallery</h1>
      </div>

      {/*  */}
      {/* photo grid */}
      {/*  */}

      {isLoading && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <span className="uppercase tracking-[5px] animate-pulse">
            Loading...
          </span>
        </div>
      )}

      <div className="columns-2 md:columns-3 xl:columns-4 gap-3">
        {imageList?.map((photo, idx) => (
          <div
            key={idx}
            className="pb-3 opacity-0 translate-y-10"
            ref={(element) => handleImageRef(idx, element)}
          >
            <img
              src={photo.url}
              alt="firebase photo"
              className="w-full object-cover rounded-lg hover:scale-105 transition duration-200"
              loading="lazy"
              onLoad={() => handleImageLoad(idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage2;
