import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { title, description, imageOrigin } = item;

  //Properties
  const coverImage = require(`../Assets/${imageOrigin}`);

  return (
    <div>
      <h2>{title}</h2>
      <img className="cardImage" src={coverImage} alt={title} />
      <p>{description}</p>
      <p>
        <Link to={title}>View menu</Link>
      </p>
    </div>
  );
}
