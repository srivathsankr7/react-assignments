import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
      Header<div>{userName}</div>
    </div>
  );
};

export default Header;
