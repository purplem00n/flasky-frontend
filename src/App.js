import { useState } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';

const data = [
  {
  id: 1,
  name: "Salty's",
  cuisine: "Seafood",
  rating: 4,
  distance: 5
},
{
  id: 2,
  name: "Toulouse",
  cuisine: "Creole",
  rating: 2,
  distance: 3
},
{
  id: 3,
  name: "Tanoor",
  cuisine: "Arab",
  rating: 4,
  distance: 3
}];

function App() {
  // we will be making API calls at the App level, which is why we want our data to start from here.

  const [restaurants, setRestaurants] = useState(data)

  const changeRating = (id, originalRating, direction) => {
    const newRestaurants = restaurants.map((restaurant) => {
      if (restaurant.id === id) {
        const updatedRestaurant = {...restaurant} // copies the original individual restaurant object
        if (direction === 'up'){
          updatedRestaurant.rating = originalRating + 1;
      } else if (direction === 'down') {
          updatedRestaurant.rating = originalRating - 1;
      }
        return updatedRestaurant;
      } else {
        return {...restaurant};
      }
    })
    setRestaurants(newRestaurants);
}; 

  const deleteRestaurant = (id) => {
    const newRestaurants = restaurants.filter((restaurant) => {
      if (restaurant.id !== id) {
        return {...restaurant};
      }
    });
    setRestaurants(newRestaurants);
  }

  return (
    <div className="App">
      <RestaurantList data={restaurants} updateRating={changeRating} deleteRestaurant={deleteRestaurant}/>
    </div>
  );
}

export default App;
