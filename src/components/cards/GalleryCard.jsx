import { Power2, gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import imagesLoaded from "imagesloaded";
import Placeholder from "../Placeholder";

const GalleryCard = ({ link }) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleImageLoaded = () => {
      gsap.to(imageElement, {
        duration: 1.2,
        opacity: 1,
        ease: Power2.easeInOut,
      });
      setLoaded(true);
    };

    const imgLoad = imagesLoaded(imageElement);

    imgLoad.on("always", handleImageLoaded);

    return () => {
      imgLoad.off("always", handleImageLoaded);
    };
  }, []);

  return (
    <article
      className={`p-1 md:p-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 filter-item gallery-image ${link.type}`}
    >
      {!loaded && <Placeholder />}
      <div className="w-full rounded-xl">
        <img
          ref={imageRef}
          src={link.url}
          alt="Gallery Image"
          className={`w-full h-full rounded-xl transition duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </article>
  );
};

export default GalleryCard;
