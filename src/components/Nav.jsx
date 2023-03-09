import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Logo from "../assets/tolbertcologo.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="p-3 fixed left-0 top-0 w-full z-50 flex justify-between">
        <a href="#" className="flex gap-5 items-center">
          {/* download CV */}
          <div className="w-10">
            <img src={Logo} alt="" />
          </div>
          <span>
            Sean <strong> Tolbert</strong>
          </span>
        </a>
      </div>
      {/*  */}
      {/* sidebar */}
      {/*  */}
      <div className="absolute right-0 h-screen w-36 bg-black flex flex-col items-start pl-5 gap-2.5">
        <button onClick={() => setToggle(true)} className="w-full flex justify-end p-2">
            <FontAwesomeIcon icon={faX} />
        </button>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#about">content</a>
        <a href="#works">works</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
};
export default Nav;
