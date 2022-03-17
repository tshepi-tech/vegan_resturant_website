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

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:categoryId" element={<MenuTemplate />} />
        <Route path="product/:productId" element={<ProductTemplate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
