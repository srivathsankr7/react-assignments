import { createContext } from "react";

const UserContext = createContext({
  userName: "guest user",
});

export default UserContext;
