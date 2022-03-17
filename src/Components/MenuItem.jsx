import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  const { description, product, productId, thumbnailSource } = item;

  //Properties
  const coverImage = require(`../Assets/${thumbnailSource}`);

  return (
    <div className="menu">
      {/* <h3>{product}</h3> */}
      <div className="menu_inner">
        <Link to={`/product/${productId}`}>
          <h3>{product}</h3>
          <img className="cardImage" src={coverImage} alt={product} />
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
}
