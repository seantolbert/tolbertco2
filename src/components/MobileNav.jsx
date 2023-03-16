import { faHamburger, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Logo from "../assets/tolbertcologo.png";
import { pages } from "../data/navData";
import { useWindow } from "../hooks/useWindow";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const { scrollPosition } = useWindow();

  return (
    <nav className="p-5 flex justify-between items-start">
      <div className="flex gap-4 items-center">
        <div className="w-10">
          <img src={Logo} alt="Tolbert & Co Logo" />
        </div>
        <p>Sean Tolbert</p>
      </div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <div className="fixed right-0 top-0 p-5 bg-black">
            <FontAwesomeIcon icon={faX} className="pb-5" size="xl" />
            <div className="flex flex-col gap-5">
              {pages.map((page, key) => (
                <a key={key} href={page.link} onClick={() => setToggle(false)}>
                  {page.title}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <FontAwesomeIcon icon={faHamburger} size="xl" />
        )}
      </button>
    </nav>
  );
};
export default MobileNav;
