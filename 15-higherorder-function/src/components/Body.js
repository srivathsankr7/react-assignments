import { useState, useEffect } from "react";
import { RESTAURANT_LIST } from "../utils/Constants";
import RestaurantCard, { withPromotedLabel } from "./RestaruantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]
        .info?.veg
        ? true
        : false
    );
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  return (
    <div className="menu">
      {restaurantList.map((restaurant) =>
        restaurant?.info?.id % 2 === 0 ? (
          <RestaurantCard
            key={restaurant?.info.id}
            name={restaurant?.info.name}
            cuisines={restaurant?.info.cuisines}
            cost={restaurant?.info.costForTwo}
            rating={restaurant?.info.avgRating}
            isVeg={restaurant?.info?.id % 2 === 0 ? true : false}
          />
        ) : (
          <RestaurantCardPromoted
            key={restaurant?.info.id}
            name={restaurant?.info.name}
            cuisines={restaurant?.info.cuisines}
            cost={restaurant?.info.costForTwo}
            rating={restaurant?.info.avgRating}
            isVeg={restaurant?.info?.id % 2 === 0 ? true : false}
          />
        )
      )}
    </div>
  );
};

export default Body;
