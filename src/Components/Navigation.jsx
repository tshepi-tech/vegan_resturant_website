import React from "react";

//NPM Packages
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navigation({ category, setCategory }) {
  function menuDishes() {
    setCategory("Dishes");
    console.log("Navigation menuDishes", category);
  }

  function menuDrinks() {
    setCategory("Drinks");
    console.log("category", category);
  }
  function menuDesserts() {
    setCategory("Desserts");
    console.log("category", category);
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
