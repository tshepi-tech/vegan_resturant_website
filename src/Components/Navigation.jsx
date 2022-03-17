import React from "react";

//NPM Packages
import { Link, NavLink } from "react-router-dom";

//Project Files

import logo from "../Assets/logo.png";

export default function Navigation({ setCategory }) {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="logo" src={logo} alt="logo of resturant" />
      </Link>
      <ul>
        <NavLink className="nav-text" to="menu/Dishes">
          Dishes
        </NavLink>
        <NavLink className="nav-text" to="menu/Drinks">
          Drinks
        </NavLink>
        <NavLink className="nav-text" to="menu/Desserts">
          Desserts
        </NavLink>
        <NavLink className="nav-text" to="/Contact">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
