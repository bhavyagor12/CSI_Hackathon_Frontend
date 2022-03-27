import React, { useState } from "react";

function jsonconvert() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");

  const convert = async (e) => {
    e.preventDefault();
    const parsedJson = JSON.parse(json);
    if (
      !Array.isArray(parsedJson) ||
      !parsedJson.every((p) => typeof p === "object" && p !== null)
    ) {
      return;
    }
    const heading = Object.keys(parsedJson[0]).join(",");
    const body = parsedJson.map((j) => Object.values(j).join(",")).join("n");
    setCsv(`${heading}${body}`);
  };

  return (
    <div>
      <form onSubmit={convert}>
        <div className="mb-5 mt-5">
          <label>json</label>
          <textarea
            value={json}
            onChange={(e) => setJson(e.target.value)}
          ></textarea>
        </div>
        <button onClick=" " type="submit">convert</button>
      </form>
      <div>
        <label>csv</label>
        <textarea value={csv}></textarea>
      </div>
    </div>
  );
}

export default jsonconvert