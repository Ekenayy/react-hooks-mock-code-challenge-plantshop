import React, {useState} from "react";

function PlantCard( {plant, onDelete, onPriceChange, handleClick }) {

  const { id, name, image, price, inStock } = plant
  const [newPrice, setNewPrice] = useState(price)

  const handlePriceChange = (e) => { 

   setNewPrice(e.target.value)
  }

  const submitPriceChange = (e) => {
    e.preventDefault()

    onPriceChange(plant, newPrice)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4> <br></br>
      <p>Price</p>
      <form onSubmit={submitPriceChange}>
        <input onChange={handlePriceChange} type="number" name="price" value={newPrice} />
        <button type="submit">Update Price</button>
      </form>
      {inStock ? (
        <button onClick={() => handleClick(plant)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )} <br></br>
      <button onClick={() => onDelete(plant)}>Delete this Plant</button>
    </li>
  );
}

export default PlantCard;
