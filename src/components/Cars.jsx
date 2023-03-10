import React, { useState, useEffect } from 'react';
import { fetchAllCars, fetchAllTypes, fetchAllModels, addToCart } from '../api/index';

const Cars = ({carsearch}) => {
    const [cars, setCars] = useState([]);
    const [types, setTypes] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    // console.log(carsearch);
    if(carsearch){
    const searchedMakeId = carsearch[0]
    const searchedModelId = carsearch[1]
    const searchedPrice = carsearch[2]
      console.log(searchedMakeId)


    }

    useEffect(() => {
      const carPage = async () => {
        const cars = await fetchAllCars();
        const types = await fetchAllTypes();
        const models = await fetchAllModels();
        setCars(cars);
        setTypes(types)
        setModels(models);
      };
      carPage();
    }, []);

console.log("cars page!!", carsearch)

const handleSelectCar = (car) => {
  setSelectedCar(car);
};

const handleAddToCart = async () => {
  // Add selected car to cart
  console.log(`Adding car ${selectedCar.id} to cart...`);
  const res = await addToCart(selectedCar.id);
  console.log(res);
  setSelectedCar(null);
};

    return (
      <div className='app-container'>
        <h1>Cars Page!</h1>
        <p>Available Cars:</p>
        <div>{cars.map((e, i) => {
            return (<div key={i}>
               
                <p>MakeId: {e.makeId}</p>
                <p>ModelId: {e.modelId}</p>
                <p>Type: {types.filter((type) => type.id === e.typeId).map((type) => (
                    <>{type.name}</>
                  ))}</p>
                <p>Year: {e.year}</p>
                <p>Price: {e.price}</p>
                <p>Milage: {e.milage}</p>
                <p>Description: {e.description}</p>
                <p>Color: {e.color}</p>
                <p>UserId: {e.price}</p>
                ---------------------
                <ul>
                {models.filter((model) => model.makeId === e.makeId)
                .map((model, modelIndex) => (
                    <li key={modelIndex}>
                        <p> Model: {model.name}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleAddToCart(e)}>Add to Cart</button>
            <hr />
            </div>
            )
        })}</div>
      </div>
    );
  };
  
  export default Cars;


//this is for selected model only - a second version
//   <ul>
//   {models.filter((model) => model.makeId === e.makeId)
//     .map((model, modelIndex) => (
//       <li key={modelIndex}>
//         <p> Model: {model.name}</p>
//       </li>
//     ))}
//   </ul>
//   {selectedCar && selectedCar.id === e.id ? (
//     <button onClick={handleAddToCart}>Add to Cart</button>
// ) : (
//     <button onClick={() => handleSelectCar(e)}>Select</button>
// )}
// <hr />