import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="h-screen" id="about">
      <div className="w-full lg:w-2/3 h-full flex items-end flex-col justify-center">
        <div className="z-[10]">
          <p className="p-16">
            As a skilled software developer, my mission is to develop innovative
            and reliable software solutions that optimize business operations,
            enhance user experience, and drive growth. With expertise in
            Javascript and React, I am dedicated to creating robust and scalable
            software applications that meet and exceed client expectations. I am
            committed to staying up-to-date with the latest technological
            advancements and industry trends to deliver cutting-edge solutions.
            Let's work together to bring your ideas to life!
          </p>
        </div>
        
        <div className="p-5 flex gap-12 text-6xl bg-black rounded-2xl w-fit">
          <FontAwesomeIcon icon={faReact} color="#02CDF1" />
          <FontAwesomeIcon icon={faJs} color="yellow" />
        </div>
      </div>
    </div>
  );
};
export default About;
