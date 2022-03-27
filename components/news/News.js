import React, { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import NewsItem from "../news/Newsitem";
function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);
  const news_url =
    "https://newsapi.org/v2/top-headlines?category=technology&apiKey=8feda37496a144feb095c3f6c2e18312&q=worker";

  return (
    <div className="min-h-screen flex-grow  flex-col  bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex-col flex items-center justify-center text-2xl text-white">
        <div className="mt-5 justify-center font-sans text-6xl font-bold ">
          <span className="mr-2 text-black ">Latest</span>
          <span className="ml-2 mr-2 text-black">Construction Work News</span>
        </div>
      </div>
      <div className="flex">
      <div className="w-1/2">
      <div className=" flex flex-col items-center justify-center text-center ">
        {data
          ? data.articles.map((news) => (
              <div className="flex flex justify-center mt-8 ml-20 mb-1.5">
                {" "}
                <NewsItem data={news} key={news_url} />{" "}
              </div>
            ))
          : "no news"}
      </div>
      </div>
      <div className="w-1/2">
      <div className=" flex flex-col items-center justify-center text-center">
        {data
          ? data.articles.map((news) => (
              <div className="flex flex justify-center mt-8 mr-20 mb-1.5">
                {" "}
                <NewsItem data={news} key={news_url} />{" "}
              </div>
            ))
          : "no news"}
      </div>
      </div>
      </div>
    </div>
  );
}

export default News;
