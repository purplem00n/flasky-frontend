import Restaurant from "./Restaurant";
import PropTypes from "prop-types";

const RestaurantList = ({data, updateRating, deleteRestaurant}) => {

    const restaurantComponents = data.map((restaurant) => {
        return (
        <Restaurant 
        key={restaurant.id} 
        id={restaurant.id}
        name={restaurant.name} 
        cuisine={restaurant.cuisine} 
        rating={restaurant.rating} 
        distance={restaurant.distance}
        updateRating={updateRating}
        deleteRestaurant={deleteRestaurant}/>)
    });

    return (
        <div>
            {restaurantComponents}
        </div>
    )
};

RestaurantList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cuisine: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        distance: PropTypes.number.isRequired,
    })).isRequired // we need a list of dictionaries/array of objects. OR can specify further by saying what shape the object should be.
};

export default RestaurantList;