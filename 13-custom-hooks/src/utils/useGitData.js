import { useState, useEffect } from "react";

const useGitData = () => {
  const [gitdetails, setGitdetails] = useState(null);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/srivathsankr7");
    const json = await data.json();
    setGitdetails(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return gitdetails;
};

export default useGitData;
