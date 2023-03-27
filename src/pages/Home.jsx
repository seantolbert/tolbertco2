import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedBar from "../components/AnimatedBar";
import Clock from "../components/Clock";
import { useWindow } from "../hooks/useWindow";

const Home = () => {
  const { windowWidth } = useWindow();



  return (
    <div className="h-screen flex items-center" id="home">
      {windowWidth > 720 && <Clock />}
      <div className="px-5 w-full lg:w-2/3 z-[10]">
        <p className=" lg:p-16 text-6xl">Hey, I'm Sean</p>
        <div className="flex items-center gap-9 py-10 lg:pl-16">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/seantolbert/"
            className="group"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="group-hover:text-green-300 transition duration-150"
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/seantolbert"
            className="group"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="group-hover:text-green-300 transition duration-150"
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://codepen.io/your-work"
            className="group"
          >
            <FontAwesomeIcon
              icon={faCodepen}
              size="2xl"
              className="group-hover:text-green-300 transition duration-150"
            />
          </a>
        </div>
        <p className="text-2xl lg:pl-16">
          I am a web developer based in Washington DC with a passion for clean
          efficient code and SEO-friendly websites
        </p>
      </div>
    </div>
  );
};
export default Home;
