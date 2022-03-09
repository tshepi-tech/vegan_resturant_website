//Project Files
import Navigation from "./Components/Navigation";
import Contact from "./Pages/Contact";
import Dishes from "./Pages/Dishes";
import Drinks from "./Pages/Drinks";
import Desserts from "./Pages/Desserts";
import HomePage from "./Pages/HomePage";

//NPM Packages
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
