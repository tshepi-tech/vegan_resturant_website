import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ item }) {
  const { product, description } = item;

  //Properties
  // const coverImage = require(`../Assets/${imageOrigin}`);

  return (
    <div>
      <h3>
        <Link to={`/category/${item.id}`}>{product}</Link>
      </h3>
      <p>{description}</p>
      {/* <img className="cardImage" src={coverImage} alt={title} /> */}
      {/* <span>{description}</span> */}
      {/* <p>
      </p> */}
    </div>
  );
}
