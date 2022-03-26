import React from "react";
import { NewsContextProvider } from "../context/NewsContext";
import Sidebar from ".././components/admin/Sidebar";
import News from "../components/news/News";
function newsPage() {
  return (
    <NewsContextProvider>
      <div className="flex">
        <Sidebar />
        <News />
      </div>
    </NewsContextProvider>
  );
}

export default newsPage;
