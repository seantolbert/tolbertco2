import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Project = ({ project }) => {
  const { title, tech, link, description, logo, type } = project;

  return (
    <article className="relative flex items-center flex-col rounded-lg p-5 gap-10 mb-10">
      <span className="absolute right-0 top-0 text-xs p-2 uppercase tracking-5px text-slate-500">
        {type}
      </span>
      <h3 className="text-2xl uppercase mr-auto text-left tracking-10px mt-5 border-t-2 border-b-2">
        {title}
      </h3>
      <div className="w-2/5 my-5">
        <img src={logo} alt={`${title} Logo`} className="w-full" />
      </div>
      <p className="text-sm uppercase text-slate-300">{description}</p>
      <div className="w-full flex justify-between md:flex-col gap-10 items-center">
        <div className="flex gap-5 md:gap-10 items-center">
          <span className="text-xs text-slate-500 uppercase tracking-5px">
            demos
          </span>
          {tech.map((item, key) => (
            <div className="w-6 hover:scale-150 transition-all duration-150">
              <img
                src={item.imgURL}
                alt={item.name}
                className={`w-full ${item.name === "Wagtail" && "invert"}`}
              />
            </div>
          ))}
        </div>

        {/*  */}
        {/* right buttons */}
        {/*  */}
        <div className="flex gap-5 ml-auto">
          <div className="group">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span className="pl-2 uppercase tracking-[5px] text-slate-500 text-sm group-hover:text-white transition-all duration-175">
              visit
            </span>
            <div className="w-full bg-white h-1 mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-175"></div>
          </div>
          <div className="group">
            <FontAwesomeIcon icon={faGithub} />
            <span className="pl-2 uppercase tracking-[5px] text-slate-500 text-sm group-hover:text-white transition-all duration-175">
              repo
            </span>
            <div className="w-full bg-white h-1 mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-175"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
