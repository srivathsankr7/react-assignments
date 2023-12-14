import { useState, useEffect } from "react";

const Body = () => {
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0]
        .info.name
    );
    setListofRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div className="body">
      <div className="cards">
        {listOfRestaurants.map((restaurent) => (
          <div key={restaurent.info.id} className="card">
            <img
              className="card-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurent.info.cloudinaryImageId
              }
              alt=""
            />
            <h3>{restaurent.info.name}</h3>
            <div>
              {restaurent.info.locality}, {restaurent.info.areaName}
            </div>
            <div>{restaurent.info.costForTwo}</div>
            <div>{restaurent.info.cuisines.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
