import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ColorPicker from "./components/ColorPicker";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Codepens from "./components/Codepens";




function App() {
  return (
    <div className="App bg-[#d8d8d8]">
      <Nav />
      <Home />
      <ProjectList />
      <Codepens />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
