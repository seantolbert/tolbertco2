import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project }) => {
  const { title, pageImage, logoImage, description, link, git, technology } =
    project;

  return (
    <div className="flex flex-col h-1/2 w-1/4 items-center p-5 rounded-3xl">
      <div>
        <img src={pageImage} alt="screenshot from project" />
      </div>

      <p>{title}</p>
      <p>{description}</p>
      <div className="flex justify-between w-full pt-5">
        <span>built with</span>
        <FontAwesomeIcon icon={technology} />
      </div>
      <div>
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="w-12 h-12"
        >
          <img src={logoImage} alt={title} className="w-full" />
        </a>
        <a href={git} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};
export default Project;
