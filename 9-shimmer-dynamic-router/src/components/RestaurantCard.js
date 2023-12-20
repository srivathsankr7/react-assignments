const RestaurantCard = ({ id, name, imageId, cost, cuisines }) => {
  return (
    <div className="card" key={id}>
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      ></img>
      <h3>{name}</h3>
      {cost}
      {cuisines?.join(", ")}
    </div>
  );
};

export default RestaurantCard;
