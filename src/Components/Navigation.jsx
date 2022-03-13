import React from "react";

//NPM Packages
import { Link, NavLink } from "react-router-dom";

//Project Files

import logo from "../Assets/logo.png";

export default function Navigation({ setCategory }) {
  function menuDishes() {
    setCategory("Dishes");
  }

  function menuDrinks() {
    setCategory("Drinks");
  }
  function menuDesserts() {
    setCategory("Desserts");
  }

  return (
    <nav className="nav">
      <Link to="/">
        <img className="logo" src={logo} alt="logo of resturant" />
      </Link>
      <ul>
        <NavLink className="nav-text" onClick={menuDishes} to="/Dishes">
          Dishes
        </NavLink>
        <NavLink className="nav-text" onClick={menuDrinks} to="/Drinks">
          Drinks
        </NavLink>
        <NavLink className="nav-text" onClick={menuDesserts} to="/Desserts">
          Desserts
        </NavLink>
        <NavLink className="nav-text" to="/Contact">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
