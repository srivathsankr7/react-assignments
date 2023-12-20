import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [loaded, setLoaded] = useState(false);
  // let count1 = 0;
  // function setCount1(increment) {
  //   count1 = increment;
  // }
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/srivathsankr7");
    const json = await data.json();
    console.log(json);
    setUserName(json.name);
    setLocation(json.location);
  };

  useEffect(() => {
    if (loaded) {
      fetchData();
      setLoaded(false);
    }
  }, [loaded]);

  return (
    <div>
      <h1>This is Bodysoda {count}</h1>
      <h3>username: {userName}</h3>
      <h3>Location: {location}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          // setCount1(count1 + 1);
        }}
      >
        Counter
      </button>
      <button onClick={() => setLoaded(true)}>get user details</button>
      {/* <button onClick={getGithubUserDetails}>user details</button> */}
      <div>
        <Link to="/restaurant/134">Restaurant 1</Link>
        <Link to="/restaurant/14">Restaurant 2</Link>
        <Link to="/restaurant/1344">Restaurant 3</Link>
        <Link to="/restaurant/13465">Restaurant 4</Link>
        <Link to="/restaurant/888">Restaurant 5</Link>
      </div>
    </div>
  );
};

export default Body;
