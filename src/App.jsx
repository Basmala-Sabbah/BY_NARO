import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Videos from "./Pages/Videos";
import Contact from "./Pages/Contact";
import Price from "./Pages/Price";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/price" element={<Price />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;