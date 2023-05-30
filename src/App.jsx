import {lazy} from 'react'

import Footer from "./components/Footer";
import { useWindow } from "./hooks/useWindow";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Admin from "./pages/Admin";
import GalleryPage from "./pages/GalleryPage";

function App() {
  const { windowWidth } = useWindow();

  return (
    <div className="text-white bg-black relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
