import AnimatedBar from "../components/AnimatedBar";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import { useWindow } from "../hooks/useWindow";
import { Top, About, Works, Contact } from "../sections/index";

const Home = () => {
  const { windowWidth } = useWindow();
  return (
    <>
      <AnimatedBar />
      {windowWidth < 720 ? <MobileNav /> : <Nav />}
      <Top />
      <About />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
