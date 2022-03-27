import React from "react";
import { NewsContextProvider } from "../context/NewsContext";
import Sidebar from ".././components/admin/Sidebar";
import News from "../components/news/News";
import Navbar1 from "../components/workers/Navbar1"
function newsPage() {
  return (
    <NewsContextProvider>
      <div className="">
        <Navbar1 />
        
      </div>
      <News />
    </NewsContextProvider>
  );
}

export default newsPage;
