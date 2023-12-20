import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/Constants";
import { ShimmerCategoryItem } from "react-shimmer-effects";
const RestaurantMenu = () => {
  const [resmenu, setResmenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const { resId } = useParams();
  console.log("ResID" + resId);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
        .itemCards
    );
    setResmenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
        .itemCards
    );
  };
  return resmenu.length === 0 ? (
    <div>
      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />
      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />{" "}
      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />
    </div>
  ) : (
    <div className="menu">
      {resmenu.map((item) => (
        <div key={item.card?.info?.id} className="item">
          {item.card?.info?.name}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
