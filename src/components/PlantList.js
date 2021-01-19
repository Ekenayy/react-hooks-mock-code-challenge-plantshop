import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, onDelete, onPriceChange, search, handleClick} ) {

  const allPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  .map(plant => {
   return <PlantCard onDelete={onDelete} onPriceChange={onPriceChange} handleClick={handleClick} key={plant.id} plant={plant}/>
  })
  
  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
