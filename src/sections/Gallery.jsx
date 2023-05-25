import { Link } from "react-router-dom";

import { useGallery } from "../hooks/useGallery";
import { useWindow } from "../hooks/useWindow";

import GallerySectionCard from "../components/cards/GallerySectionCard";

const Gallery = () => {
  const { windowWidth } = useWindow();

  const { imageList, isLoading, imgError } = useGallery("/gallery", 6);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="h-screen flex flex-col items-center justify-center gap-9 px-2 md:px-5 max-w-5xl mx-auto relative"
      id="gallery"
    >
      <h3 className="uppercase text-xl tracking-[5px] w-full text-center">
        Gallery
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
        {imageList?.map((image, idx) => (
          <GallerySectionCard link={image} key={idx} />
        ))}
      </div>
      {/* <div className=" absolute h-screen w-full bg-gradient-to-t from-black z-10 pointer-events-none"></div> */}

      <Link
        to="/gallery"
        className="w-full rounded-lg flex items-center justify-center border py-5 z-10 group"
      >
        <span className="uppercase tracking-[2px] group-hover:tracking-[5px] transition-all duration-200">
          go to gallery
        </span>
      </Link>
    </div>
  );
};

export default Gallery;
