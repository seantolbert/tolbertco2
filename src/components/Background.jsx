import { useEffect, useRef } from "react";
import BGImage from "../assets/tolbertCobg.png";
import { useWindow } from "../hooks/useWindow";

const Background = () => {
  const imageRef = useRef();

  const { scrollPosition } = useWindow();

  useEffect(() => {
    
  }, []);

  return (
    <div
      ref={imageRef}
      className="bg-black h-screen w-screen fixed overflow-y-clip"
    >
      <img src={BGImage} alt="" className="w-full " />
    </div>
  );
};
export default Background;
