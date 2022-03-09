import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { title, description, imageOrigin } = item;

  //Properties
  const coverImage = require(`../Assets/${imageOrigin}`);

  return (
    <div>
      <h1>{title}</h1>
      <img className="cardImage" src={coverImage} alt={title} />
      <span>{description}</span>
      <p>
        <Link to={title}>View menu</Link>
      </p>
    </div>
  );
}
