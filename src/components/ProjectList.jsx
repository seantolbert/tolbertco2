import Project from "./Project";

const ProjectList = () => {
  const projects = [
    { title: "Jungles of Dorado", link: "https://www.junglesofdorado.com/" },
    { title: "Quotate", link: "https://quotate-bb48d.web.app/" },
    { title: "Fayvs", link: "https://fayvs-e116b.firebaseapp.com/" },
  ];

  return (
    <div className="w-full flex justify-evenly h-[50vh] items-center" id="projects">
      {projects.map((project, key) => (
        <Project project={project} key={key} />
      ))}
    </div>
  );
};
export default ProjectList;
