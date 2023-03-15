const Project = ({ project }) => {
  return (
    <div className="flex justify-evenly h-[90%] w-1/4 items-center p-5 rounded-3xl bg-white">
      <a href={project.link} rel="noopener noreferrer" target="_blank">
        <p>{project.title}</p>
      </a>
    </div>
  );
};
export default Project;
