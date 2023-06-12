import './Restaurant.css';

const Restaurant = () => {
    return (
        <div>
            <h2 className="restaurant-name"> Salty's </h2>
            <ul>
                <li>Cuisine: Seafood</li>
                <li>Rating: 4.8 </li>
                <li>Distance from Ada: 5</li>
            </ul>
        </div>
    );
};

export default Restaurant;