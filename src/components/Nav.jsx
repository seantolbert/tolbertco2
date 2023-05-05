import { faChevronCircleDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindow } from "../hooks/useWindow";
import { pages } from "../data/navData";

const Nav = () => {
  const { scrollPosition } = useWindow();

  return (
    <nav
      className={`p-5 fixed top-0 w-full flex justify-between items-start md:items-center z-20 ${
        scrollPosition > 0 ? "bg-black" : "bg-transparent"
      }`}
    >
      {/*  */}
      {/* left side */}
      {/*  */}
      <div className="flex gap-4 items-center">
        <div className="w-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tolbertco-f5418.appspot.com/o/logos%2Ftolbertcologo.png?alt=media&token=07f07f0b-8962-40c0-9786-a1299c828465"
            alt="Tolbert & Co Logo"
          />
        </div>
        <p className="uppercase tracking-[8px]">Tolbert & Co</p>
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
                  icon={page.icon}
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
