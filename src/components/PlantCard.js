import React from "react";

function PlantCard( {plant, handleClick }) {

  const { id, name, image, price, inStock } = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => handleClick(plant)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
