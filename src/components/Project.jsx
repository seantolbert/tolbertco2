import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useWindow } from "../hooks/useWindow";

const Project = ({ project, index }) => {
  const { title, pageImage, logoImage, description, link, git, technology } =
    project;

  const { windowWidth } = useWindow();

  const [techTitle, setTechTitle] = useState("");

  return (
    <div className="flex flex-col gap-5 w-full md:w-2/3 lg:w-1/4 p-5 rounded-3xl">
      <p className="text-2xl w-full flex ">{title}</p>
      {/*  */}
      {/* screen shot */}
      {/*  */}
      <img src={pageImage} alt="screenshot from project" className="w-full" />
      {/*  */}
      {/* tech used */}
      {/*  */}
      <div className="flex flex-col gap-3 w-full ">
        <div className="w-full flex justify-between items-center h-16">
          <p className="uppercase tracking-[5px] text-xs">technology:</p>
          <p className="text-sm">{techTitle}</p>
        </div>
        <div className="flex w-full justify-evenly items-center">
          {technology.map((tech, key) => (
            <button
              key={key}
              // added click function for mobile users
              onClick={() => setTechTitle(tech.name)}
              onMouseOver={() => setTechTitle(tech.name)}
              onMouseLeave={() => setTechTitle("")}
            >
              <div key={key} className="w-12">
                <img
                  src={tech.value}
                  alt="technology logo"
                  className="w-full"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      {/*  */}
      {/* description */}
      {/*  */}
      <p>{description}</p>
      {/*  */}
      {/* links */}
      {/*  */}
      <div className="w-full flex gap-5 justify-end items-center pt-5">
        <div className="flex gap-3 items-center">
          <p className="uppercase tracking-[5px] text-xs">Visit</p>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="w-10"
          >
            <img src={logoImage} alt={title} className="w-full" />
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <p className="uppercase tracking-[5px] text-xs">Repo</p>
          <a
            href={git}
            rel="noopener noreferrer"
            target="_blank"
            className="text-4xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      {windowWidth < 600 && (
        <div className="w-full flex justify-end">
          <div className="w-4/5 h-0.5 bg-white"></div>
        </div>
      )}
    </div>
  );
};
export default Project;
