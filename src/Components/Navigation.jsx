import React from "react";

//NPM Packages
import { Link, NavLink } from "react-router-dom";

export default function Navigation({ category, setCategory }) {
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
    <nav>
      <Link to="/">
        <img src="" alt="logo of resturant" />
      </Link>
      <ul>
        <NavLink onClick={menuDishes} to="/Dishes">
          Dishes
        </NavLink>
        <NavLink onClick={menuDrinks} to="/Drinks">
          Drinks
        </NavLink>
        <NavLink onClick={menuDesserts} to="/Desserts">
          Desserts
        </NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
