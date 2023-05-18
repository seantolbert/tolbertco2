import React from "react";
import { useStorage } from "../hooks/useStorage";

const Technology = ({ techItem }) => {

    const title = techItem?.topic.name

  const { imageURL } = useStorage(
    `tech/${title.toLowerCase()}.svg`
  );

  if (!imageURL) {
    return <div className="w-8 h-8 rounded-full bg-yellow-500">
        
    </div>;
  }

  return (
    <div className="w-6 hover:scale-150 transition-all duration-150">
      <img src={imageURL} alt={title} className={`w-full ${title === 'wagtail' && 'invert'}`} />
    </div>
  );
};

export default Technology;
