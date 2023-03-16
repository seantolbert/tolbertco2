import {
  faAws,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <div className="w-full lg:w-2/3 z-10 h-full flex flex-col justify-center">
      <p className="p-16">
        As a skilled software developer, my mission is to develop innovative and
        reliable software solutions that optimize business operations, enhance
        user experience, and drive growth. With expertise in Javascript and
        React, I am dedicated to creating robust and scalable software
        applications that meet and exceed client expectations. I am committed to
        staying up-to-date with the latest technological advancements and
        industry trends to deliver cutting-edge solutions. Let's work together
        to bring your ideas to life!
      </p>

      {/*  */}
      {/* technologies */}
      {/*  */}

      <div className="ml-16 p-5 flex gap-12 text-6xl bg-black rounded-2xl w-fit">
        <FontAwesomeIcon icon={faReact} color="#02CDF1" />
        <FontAwesomeIcon icon={faJs} color="yellow" />
      </div>
    </div>
  );
};
export default Intro;
