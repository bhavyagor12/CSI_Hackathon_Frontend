import React, { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import NewsItem from "../news/Newsitem";
function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);
  const news_url =
    "https://newsapi.org/v2/everything?q=constructionworkers&from=2022-05-29&to=2022-05-29&sortBy=popularity&apiKey=1e33af2e07744c7292e733548717e4a4";

  return (
    <div className="min-h-screen flex-grow  flex-col  bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="fle-col flex items-center justify-center text-2xl text-white">
        <div className="mt-5 justify-center font-sans text-6xl font-bold ">
          <span className="mr-2 text-black ">Latest</span>
          <span className="ml-2 mr-2 text-black">Construction News</span>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center text-center">
        {data
          ? data.articles.map((news) => (
              <div className="flex flex-row justify-center  ">
                <NewsItem data={news} key={news_url} />{" "}
              </div>
            ))
          : "no news"}
      </div>
    </div>
  );
}

export default News;
