import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faA, faAt, faLocation, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="flex flex-col items-center ">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faAt} />
          <span>sean@tolbert.me</span>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span>240.429.9523</span>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLocation} />
          <span>Washington, DC</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/seantolbert/"
          className="flex gap-2"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/seantolbert"
          className="flex gap-2"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://codepen.io/your-work"
          className="flex gap-2"
        >
          <FontAwesomeIcon icon={faCodepen} size="xl" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
