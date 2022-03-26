import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "8feda37496a144feb095c3f6c2e18312";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=developer&apiKey=8feda37496a144feb095c3f6c2e18312`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
