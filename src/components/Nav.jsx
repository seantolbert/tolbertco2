import { faChevronCircleDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Logo from "../assets/tolbertcologo.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const pages = [
    { title: "Home", link: "#home" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <nav className="p-5 fixed top-0 w-full flex justify-between items-start md:items-center">
      {/*  */}
      {/* left side */}
      {/*  */}
      <div className="flex gap-4 items-center">
        <div className="w-10">
          <img src={Logo} alt="Tolbert & Co Logo" />
        </div>
        <p>Sean Tolbert</p>
      </div>

      {/*  */}
      {/* right side */}
      {/*  */}
      <div>
        <ul className="flex flex-col md:flex-row md:justify-start gap-5">
          {pages.map((page, key) => (
            <li className="flex group" key={key}>
              <a href={page.link} className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronCircleDown}
                  className="group-hover:opacity-100 opacity-0 transition-all duration-200"
                />
                <button>{page.title}</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
