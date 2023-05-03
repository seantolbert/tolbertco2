import { useState, useRef, useLayoutEffect, useEffect } from "react";

const Filter = ({ handleFilterChange, filterKey }) => {
  return (
    <div className="flex flex-col gap-5 items-center md:flex-row md:ml-5 md:gap-10 mb-10 relative py-3 w-full">
      <div
        onClick={handleFilterChange("*")}
        className={`uppercase text-md tracking-[5px] transition-colors duration-300 ${
          filterKey === "*" ? "text-slate-100" : "text-slate-500"
        } `}
      >
        All
      </div>
      <div
        onClick={handleFilterChange("project")}
        className={`uppercase text-md tracking-[5px] transition-colors duration-300 ${
          filterKey === "project" ? "text-slate-100" : "text-slate-500"
        } `}
      >
        project
      </div>
      <div
        onClick={handleFilterChange("certification")}
        className={`uppercase text-md tracking-[5px] transition-colors duration-300 ${
          filterKey === "certification" ? "text-slate-100" : "text-slate-500"
        } `}
      >
        certification
      </div>
      <div
        onClick={handleFilterChange("post")}
        className={`uppercase text-md tracking-[5px] transition-colors duration-300 ${
          filterKey === "post" ? "text-slate-100" : "text-slate-500"
        } `}
      >
        blog post
      </div>
    </div>
  );
};

export default Filter;
