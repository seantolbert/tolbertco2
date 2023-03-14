import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ColorPicker from "./components/ColorPicker";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App ">
      <Nav />
      <Home />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
