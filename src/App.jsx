//Project Files
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import MenuTemplate from "./Pages/MenuTemplate";
import Navigation from "./Components/Navigation";
import ProductTemplate from "./Pages/ProductTemplate";

import "./Styles/styles.css";

//NPM Packages <= put this ones in the top, before the Project files, as they are more important
import { Routes, Route } from "react-router";
import { useState } from "react";

// Note: all the folders should be lowercase: Assets = assets, Components = components, etc.
// This is not a "Eduardo" design choice, just look how node_modules, public and src arent called Node_Modules, Public and Src
function App() {
  // This project did not need the state here you can read the category in a much efficient manner by watching the recommended video. I know it was 30 min long but that was the main challenge of this project.
  const [category, setCategory] = useState("");

  return (
    // This would look much cleaner withouht the category prop
    <div className="App">
      <Navigation setCategory={setCategory} />
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
