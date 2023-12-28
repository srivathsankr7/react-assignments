import React from "react";
import useGitData from "../utils/useGitData";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const gitData = useGitData();
  const networkStatus = useOnlineStatus();

  return networkStatus === false ? (
    <div>
      <h3>404 Not found! Something went wrong..</h3>
    </div>
  ) : (
    <div>
      <div>username {gitData?.name}</div>
      <div>location {gitData?.location}</div>
    </div>
  );
};

export default Body;
