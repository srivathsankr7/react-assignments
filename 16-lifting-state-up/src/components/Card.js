import React from "react";

const Card = (props) => {
  const { name, id, showIndex } = props;
  const updateIndex = () => {
    showIndex();
  };
  return (
    <div className="card">
      <h3>{name}</h3>
      <div>
        <button className="btn" onClick={updateIndex}>
          button - {id}
        </button>
      </div>
    </div>
  );
};

export default Card;
