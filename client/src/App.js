import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  const write = async () => {
    await fetch("http://127.0.0.1:5001/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    alert("Data Saved!");
  };

  const read = async () => {
    const res = await fetch("http://127.0.0.1:5001/read");
    const result = await res.json();
    setData(result.text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>ABES College</h1>

      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={write}>Write</button>
      <button onClick={read} style={{ marginLeft: "10px" }}>
        Read
      </button>

      <h3>From Node: {data}</h3>
    </div>
  );
}

export default App;

