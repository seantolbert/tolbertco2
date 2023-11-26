import AnimatedBar from "../components/AnimatedBar";
// import GooglePhotos from "../components/GooglePhotos";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import { useWindow } from "../hooks/useWindow";
import Gallery from "../sections/Gallery";
import Shirts from "../sections/Shirts";
import { Top, About, Works, Contact } from "../sections/index";

const Home = () => {
  const { windowWidth } = useWindow();
  return (
    <>
      <AnimatedBar />
      {windowWidth < 768 ? <MobileNav /> : <Nav />}
      <Top />
      <About />
      {/* <Gallery /> */}
      {/* <Shirts /> */}
      {/* <Works /> */}
      <Contact />
    </>
  );
};

export default Home;
