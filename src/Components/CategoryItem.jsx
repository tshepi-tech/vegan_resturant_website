//NPM Packages
import React from "react";
import { Link } from "react-router-dom";

//Project Files
import categories from "../Data/categories.json";

export default function CategoryItem({ item }) {
  const { categoryId, description, imageOrigin, title } = item;

  //Properties
  const coverImage = require(`../Assets/${imageOrigin}`);

  return (
    <div className="homepage">
      <h2>{title}</h2>
      <div className="homepage_inner">
        <img className="cardImage" src={coverImage} alt={title} />
        <p>{description}</p>
        <Link to={`/menu/${categoryId}`}>View {title}</Link>
      </div>
    </div>
  );
}
