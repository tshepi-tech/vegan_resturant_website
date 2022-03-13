import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  const { description, product, thumbnailSource } = item;

  //Properties
  const coverImage = require(`../Assets/${thumbnailSource}`);

  return (
    <div className="menu">
      {/* <h3>{product}</h3> */}
      <div className="menu_inner">
        <h3>
          <Link to={`/category/${item.id}`}>{product}</Link>
        </h3>
        <img className="cardImage" src={coverImage} alt={product} />
        {/* <span>{description}</span> */}
        <p>{description}</p>
        {/* <p>
      </p> */}
      </div>
    </div>
  );
}
