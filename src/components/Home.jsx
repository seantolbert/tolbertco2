import {
  faAws,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clock from "./Clock";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="home">
      <Clock />
      <div className="w-2/3">
        <p className="p-16 text-6xl">Sean Tolbert</p>
        <p className="text-2xl pl-16">
          I am a web developer based in Washington DC with a passion for clean
          efficient code and SEO-friendly websites
        </p>
        <p className="pl-16">
          As a highly skilled software developer, my mission is to develop
          innovative and reliable software solutions that optimize business
          operations, enhance user experience, and drive growth. With expertise
          in React and Python automation, I am dedicated to creating robust and
          scalable software applications that meet and exceed client
          expectations. I am committed to staying up-to-date with the latest
          technological advancements and industry trends to deliver cutting-edge
          solutions. Let's work together to bring your ideas to life!
        </p>

        {/*  */}
        {/* technologies */}
        {/*  */}

        <div className="pl-16 flex gap-12 text-6xl">
          <FontAwesomeIcon icon={faReact} color="lightblue"/>
          <FontAwesomeIcon icon={faJs} color="yellow"/>
          <FontAwesomeIcon icon={faPython} />
          <FontAwesomeIcon icon={faAws} color="gold"/>
        </div>
      </div>
    </div>
  );
};
export default Home;
