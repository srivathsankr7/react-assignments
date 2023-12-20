import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      Header
      <div>{onlineStatus ? "🟢" : "🔴"}</div>
    </div>
  );
};

export default Header;
