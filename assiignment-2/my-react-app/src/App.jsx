import React, { useState } from "react";

function App() {
  const [info, setInfo] = useState(null);

  const getSystemInfo = async () => {
    try {
      const res = await fetch("http://localhost:5000/system-info");
      const data = await res.json();
      setInfo(data);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>System Info</h2>

      <button onClick={getSystemInfo}>Get System Info</button>

      {info && (
        <div style={{ marginTop: "30px" }}>
          <p><b>Free Memory:</b> {info.freeMemory}</p>
          <p><b>Total Memory:</b> {info.totalMemory}</p>
          <p><b>CPU Architecture:</b> {info.cpuArchitecture}</p>
          <p><b>Username:</b> {info.userInfo.username}</p>
          <p><b>Home Directory:</b> {info.userInfo.homedir}</p>
        </div>
      )}
    </div>
  );
}

export default App;
