import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <img src="" alt="logo of resturant" />
      <ul>
        <NavLink to="/dishes">Dishes</NavLink>
        <NavLink to="/drinks">Drinks</NavLink>
        <NavLink to="/desserts">Desserts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
