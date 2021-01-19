import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const plantsUrl = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(plantsUrl)
      .then(response => response.json())
      .then(plants => { 
        const updatedPlants = plants.map(plant => {
          return {...plant, inStock: true}
        })
        setPlants(updatedPlants)})
  }, [])

  const handleClick = ((clickedPlant) => {
    // console.log(plant)
    const newPlantsArr = plants.map(plant => {
      if (plant.id === clickedPlant.id) {
        return {...plant, inStock: false }
      } else {
        return plant
      }
    })
    setPlants(newPlantsArr)
  })

  const onSubmit = (plantData) => {
    // console.log(plantData)
    const plantWithInt = {...plantData, price: parseInt(plantData.price)}
    
    fetch(plantsUrl, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(plantWithInt) 
    })
      .then(r => r.json())
      .then(plant => {
        const updatedPlant = {...plant, inStock: true}
        setPlants([...plants, updatedPlant])
      })
  }


  return (
   
    <main>
      <NewPlantForm onSubmit={onSubmit} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList search={search} plants={plants} handleClick={handleClick} />
    </main>
  );
}

export default PlantPage;
