import React from "react";
import { useCollection } from "../hooks/useCollection";

const Works = () => {
  const { documents: projects } = useCollection("projects");
  const { documents: certs } = useCollection("certs");

  return (
    <div className="h-screen">
      <h1>Works</h1>
      <div>
        {projects
          ? projects.map((project) => (
              <div key={project.id} className="">
                {project.title}
              </div>
            ))
          : null}
      </div>
      <div>
        {certs
          ? certs.map((cert) => <div key={cert.id}>{cert.title}</div>)
          : null}
      </div>
    </div>
  );
};

export default Works;
