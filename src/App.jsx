//Project Files
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import MenuTemplate from "./Pages/MenuTemplate";
import Navigation from "./Components/Navigation";
import ProductTemplate from "./Pages/ProductTemplate";

import "./Styles/styles.css";

//NPM Packages
import { Routes, Route } from "react-router";
import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Navigation setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:categoryId" element={<MenuTemplate />} />
        <Route path="product/:product" element={<ProductTemplate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
