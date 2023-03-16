import Project from "../components/Project";
import { projects } from "../data/projectData";

const ProjectList = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-start">
      <h2 className="text-3xl pl-5 uppercase">Works</h2>
      <div
        className="w-full flex flex-col lg:flex-row justify-evenly"
        id="projects"
      >
        {projects.map((project, key) => (
          <Project project={project} key={key} index={key} />
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
