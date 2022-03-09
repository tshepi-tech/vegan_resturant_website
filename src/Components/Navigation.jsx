import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <img src="" alt="logo of resturant" />
      <ul>
        <NavLink to="/Dishes">Dishes</NavLink>
        <NavLink to="/Drinks">Drinks</NavLink>
        <NavLink to="/Desserts">Desserts</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
