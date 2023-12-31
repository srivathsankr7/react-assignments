import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { setUserInfo } = useContext(UserContext);
  return (
    <div>
      Body
      <div>
        <input
          type="text"
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Body;
