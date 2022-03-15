import React from "react";

// Same as Hero, this can be part of Contact directly.
export default function InformationItem({ item }) {
  // Unnecesary props -1
  // You arent using the url or opening hours here
  const { address, ownerImage, locationURL, openingHours } = item;

  //Properties
  const owner = require(`../Assets/${ownerImage}`);

  return (
    <div>
      <img
        className="cardImage"
        src={owner}
        alt="picture of resturant owner using knife"
      />
      <h3>{address}</h3>
    </div>
  );
}
