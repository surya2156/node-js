const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:5173", // change if needed
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

app.get("/system-info", (req, res) => {
  res.json({
    freeMemory: (os.freemem() / 1024 / 1024).toFixed(2) + " MB",
    totalMemory: (os.totalmem() / 1024 / 1024).toFixed(2) + " MB",
    cpuArchitecture: os.arch(),
    userInfo: os.userInfo()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
