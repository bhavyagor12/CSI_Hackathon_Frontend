import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Sidebar from "../components/admin/Sidebar";

export default function ocr() {
  const [Image, setImage] = useState("");
  const [Text, setText] = useState("");

  const handleClick = () => {
    Tesseract.recognize(Image, "eng", { logger: (m) => console.log(m) }).then(
      ({ data: { text } }) => {
        setText(text);
        console.log(text);
      }
    );
  };

  return (
    <div className="flex bg-[#024CA1]">
      <Sidebar />

      <div className="grid  place-items-center h-screen ml-96">
        <h1 className="text-6xl">Attendance Report</h1>
        <input
          className="rounded-sm"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
            console.log(Image);
          }}
        />
        <button
          onClick={() => handleClick()}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <textarea
          rows="10"
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
