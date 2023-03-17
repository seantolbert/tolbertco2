import { faBars, faHamburger, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Logo from "../assets/tolbertcologo.png";
import { pages } from "../data/navData";
import { useWindow } from "../hooks/useWindow";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const { scrollPosition } = useWindow();

  return (
    <nav className="p-5 flex items-center justify-between fixed top-0 w-full">
      <div className="flex gap-4 items-center">
        <div className="w-10">
          <img src={Logo} alt="Tolbert & Co Logo" />
        </div>
        <p>Sean Tolbert</p>
      </div>
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <FontAwesomeIcon icon={faBars} size="2xl" />
        ) : (
          <FontAwesomeIcon icon={faX} size="2xl"/>
        )}
      </button>
      <div
        className={`absolute right-0 top-0 h-fit w-fit mt-20 mr-5 transition-transform duration-200 ${
          open ? "translate-x-52" : "translate-x-0"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {pages.map((page, key) => (
            <li className="transition duration-100" key={key}>
              <a href={page.link}>{page.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default MobileNav;
