import React from "react";

export default function InformationItem({ item }) {
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
