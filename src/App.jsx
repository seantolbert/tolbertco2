import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Home, About, ProjectList, Contact } from "./pages";
import { useWindow } from "./hooks/useWindow";
import MobileNav from "./components/MobileNav";

function App() {
  const { windowWidth } = useWindow();

  return (
    <div className="text-white bg-[#000]">
      {windowWidth < 720 ? <MobileNav /> : <Nav />}
      <Home />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
