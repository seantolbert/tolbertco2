import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useWindow } from "./hooks/useWindow";
import MobileNav from "./components/MobileNav";
import AnimatedBar from "./components/AnimatedBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

function App() {
  const { windowWidth } = useWindow();

  return (
    <div className="text-white bg-black relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
