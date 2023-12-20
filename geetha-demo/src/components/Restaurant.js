import React from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { resid } = useParams();
  return <div>Restaurant id {resid} </div>;
};

export default Restaurant;
