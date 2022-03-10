//Project Files
import Navigation from "./Components/Navigation";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import MenuTemplate from "./Pages/MenuTemplate";
import ProductTemplate from "./Pages/ProductTemplate";

import "./Styles/styles.css";

//NPM Packages
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Navigation category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dishes" element={<MenuTemplate category={category} />} />
        <Route path="/Drinks" element={<MenuTemplate category={category} />} />
        <Route
          path="/Desserts"
          element={<MenuTemplate category={category} />}
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/category/:id" element={<ProductTemplate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
