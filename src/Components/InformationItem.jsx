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
      <h3>[openingHours]</h3>
      <section className="map">
        <iframe src={locationURL}></iframe>
      </section>
    </div>
  );
}
