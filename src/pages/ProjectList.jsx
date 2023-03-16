import Project from "../components/Project";
import { projects } from "../data/projectData";

const ProjectList = () => {
  return (
    <div
      className="w-full flex justify-evenly h-screen items-center"
      id="projects"
    >
      {projects.map((project, key) => (
        <Project project={project} key={key} />
      ))}
    </div>
  );
};
export default ProjectList;
