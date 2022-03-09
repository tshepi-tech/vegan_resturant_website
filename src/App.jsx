//Project Files
import Navigation from "./Components/Navigation";
import Contact from "./Pages/Contact";
import Dishes from "./Pages/Dishes";
import Drinks from "./Pages/Drinks";
import Desserts from "./Pages/Desserts";
import HomePage from "./Pages/HomePage";

//import "./css/style.css";

//NPM Packages
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dishes" element={<Dishes />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Desserts" element={<Desserts />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
