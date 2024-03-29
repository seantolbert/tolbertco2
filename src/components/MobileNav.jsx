import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { pages } from "../data/navData";
import { useWindow } from "../hooks/useWindow";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const { scrollPosition } = useWindow();

  return (
    <nav
      className={`p-5 flex items-center justify-between fixed top-0 w-full transition duration-150 z-[20] ${
        scrollPosition > 0 ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex gap-4 items-center">
        <div className="w-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tolbertco-f5418.appspot.com/o/logos%2Ftolbertcologo.png?alt=media&token=07f07f0b-8962-40c0-9786-a1299c828465"
            alt="Tolbert & Co Logo"
          />
        </div>
        {/* <p>Sean Tolbert</p> */}
      </div>
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <FontAwesomeIcon icon={faX} size="2xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2xl" />
        )}
      </button>
      <div
        className={`absolute right-0 top-0 h-fit w-fit mt-20  transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-52"
        }`}
      >
        <ul className="flex flex-col gap-5 bg-black rounded-bl-xl p-2">
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
