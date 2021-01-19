import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, search, handleClick} ) {

  const allPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  .map(plant => {
   return <PlantCard handleClick={handleClick} key={plant.id} plant={plant}/>
  })
  
  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
