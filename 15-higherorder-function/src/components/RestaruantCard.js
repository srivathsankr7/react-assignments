const RestaurantCard = ({ name, cuisines, cost, rating, isVeg }) => {
  console.log("isveg: ", isVeg);
  return (
    <div className="card">
      <h3>{name}</h3>
      <div>{cuisines.join(", ")}</div>
      <div>{cost}</div>
      <div>{rating}</div>
      <div>{String(isVeg)}</div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
