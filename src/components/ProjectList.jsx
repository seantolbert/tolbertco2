const ProjectList = () => {
  const projects = [
    { title: "Jungles of Dorado", link: "https://www.junglesofdorado.com/" },
    { title: "Quotate", link: "https://quotate-bb48d.web.app/" },
    { title: "Fayvs", link: "https://fayvs-e116b.firebaseapp.com/" },
  ];

  return (
    <div className="w-full flex justify-evenly">
      {projects.map((project, key) => (
        <div
          className="flex justify-evenly w-1/4 items-center p-5 rounded-3xl border"
        >
          <a
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>{project.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
export default ProjectList;
