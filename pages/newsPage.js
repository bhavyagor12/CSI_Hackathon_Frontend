import React from "react";
import { NewsContextProvider } from "../context/NewsContext";
import Sidebar from ".././components/admin/Sidebar";
import News from "../components/news/News";
import Navbar1
function newsPage() {
  return (
    <NewsContextProvider>
      <div className="flex">
        <Navbar
        <News />
      </div>
    </NewsContextProvider>
  );
}

export default newsPage;
