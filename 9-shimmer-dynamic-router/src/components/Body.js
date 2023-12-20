import { useState, useEffect } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../utils/Constants";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return restaurantList.length === 0 ? (
    <div className="cards">
      <ShimmerSimpleGallery
        card
        imageHeight={200}
        gap={20}
        row={2}
        col={4}
        caption
      />
    </div>
  ) : (
    <main className="body">
      <div className="cards">
        {restaurantList.map((restaurant) => (
          <Link
            className="cardlink"
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info.id}
          >
            <RestaurantCard
              id={restaurant?.info.id}
              name={restaurant?.info.name}
              imageId={restaurant?.info.cloudinaryImageId}
              cost={restaurant?.info.costForTwo}
              cuisines={restaurant?.info.cuisines}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;
