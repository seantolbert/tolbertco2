import React, { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useStorage } from "../hooks/useStorage";

const Works = () => {
  const { documents: works } = useCollection("works");

  return (
    <div className="h-screen">
      <h1>Works</h1>
      <div className="flex items-center h-full justify-evenly">
        {works
          ? works.map((item) => {
              if (item.type === "project") {
                return (
                  <div>
                    {item.title}
                    project
                  </div>
                );
              }

              if (item.type === "certification") {
                return (
                  <div>
                    {item.title}
                    cert
                  </div>
                );
              }
              
              if (item.type === "post") {
                return (
                  <div>
                    {item.title}
                    blog post
                  </div>
                );
              }


            })
          : null}
      </div>
    </div>
  );
};

export default Works;
