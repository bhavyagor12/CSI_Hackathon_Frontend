import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  // const apiKey = "8feda37496a144feb095c3f6c2e18312";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=construction&from=2022-02-26&sortBy=publishedAt&apiKey=e3f040cc8e7743dd86d4d98f15527d72`
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
