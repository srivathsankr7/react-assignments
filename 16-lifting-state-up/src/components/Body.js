import React, { useState } from "react";
import Card from "./Card";
import CardMenu from "./CardMenu";
const Body = () => {
  const [showIndex, setShowIndex] = useState(0);
  const nameList = [
    "jscode",
    "rootelement",
    "reactchildren",
    "npm",
    "scripts",
    "hooks",
  ];
  return (
    <div className="container">
      {nameList.map((nm, index) => (
        <Card
          name={nm}
          id={index}
          showIndex={() => {
            setShowIndex(index);
          }}
          key={index}
        />
      ))}
      <div>
        <CardMenu showIndex={showIndex} />
      </div>
    </div>
  );
};

export default Body;
