import React, { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useStorage } from "../hooks/useStorage";
import Project from "../components/Project";
import Cert from "../components/Cert";
import Post from "../components/Post";

const Works = () => {
  const { documents: works } = useCollection("works");

  return (
    <div className="min-h-screen max-w-5xl md:px-5 mx-auto" id="works">
      <h1>Works</h1>
      <div className="gap-10 columns-1 md:columns-2 lg:columns-3 xl:col-span-4">
        {works
          ? works.map((item) => {
              if (item.type === "post") {
                return <Post key={item.id} post={item} />;
              }

              if (item.type === "certification") {
                return <Cert key={item.id} cert={item} />;
              }

              if (item.type === "project") {
                return <Project key={item.id} project={item} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Works;
