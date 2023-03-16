import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Home, About, ProjectList, Contact } from "./pages";

function App() {
  return (
    <div className="text-white bg-[#000]">
      <Nav />
      <Home />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
