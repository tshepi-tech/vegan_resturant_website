import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img src="" alt="logo of resturant" />
      </Link>
      <ul>
        <NavLink to="/Dishes">Dishes</NavLink>
        <NavLink to="/Drinks">Drinks</NavLink>
        <NavLink to="/Desserts">Desserts</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
