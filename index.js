//const fs=require('fs');
//fs.writeFile("./a.txt","abes college is hhah", ()=> {
//fs.readFile("./a.txt", "utf-8",(err,result) =>{
  //if(err){
    //console.log("error",err);
  //}
  //else{
    //console.log(result);
  //}
//})

//asyn function

// const fs = require('fs');

// fs.writeFile("./a.txt", "abes college is hhah", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// const fs = require('fs');

// fs.appendFile("./a.txt", "This is additional content.", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Content appended successfully");
//   }
// });

//copy one file data into another file 
//asyn function
// const fs = require('fs');

// fs.cp("./a.txt", "./b.txt", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("File copied successfully");
//   }
// });



//delete file
// const fs = require('fs');
// fs.unlink("./a.txt", (err) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("File deleted successfully");
//   }
// });
// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// let storedData = "";

// // Write API
// app.post("/write", (req, res) => {
//   storedData = req.body.text;
//   res.json({ message: "Data saved successfully" });
// });

// // Read API (ADD THIS)
// app.get("/read", (req, res) => {
//   res.json({ text: storedData });
// });

// // Home route
// app.get("/", (req, res) => {
//   res.send("Backend is running successfully 🚀");
// });

// app.listen(5001, () => {
//   console.log("Server running on http://127.0.0.1:5001");
// });

// Operating system module
// const os= require('os');
// console.log("platform", os.platform());

// console.log("userinfo", os.userInfo());
// console.log("CPU", os.arch());
// console.log("free memory", os.freemem());
// console.log("total memory", os.totalmem());
// console.log("uptime", os.uptime());
// console.log("home dir", os.homedir());
// console.log("hostname", os.hostname());

// const http = require('http');
// const fs = require('fs');
// const home=fs.readFileSync("./a.html");
// const myServer=http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "text/html"});
// res.write(home);
//   res.end();
// });
// myServer.listen(8000,()=> console.log("server is running on "));


//connect json file with node js without using express
// const http = require("http");
// const fs = require("fs");

// const PORT = 3000;

// http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/data") {

//     const data = fs.readFileSync("data.json");

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(data);

//   } else {
//     res.writeHead(404);
//     res.end("Not Found");980-0987654321`65`
//   }

// }).listen(PORT, () => {
//   console.log("Server running on http://localhost:3000");
// });

const http=require("http");
const fs=require("fs");
const PORT=3000;
http.createServer((req,res) => {
  if(req.method === "POST" && req.url === "/data"){
    let body="";
    req.on("data",(chunk)=>{
      body+=chunk;
    });
   req.on("end", () => {
      const data = JSON.parse(body);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "Data received",
        yourData: data
      }));
    });

  } else {
    res.writeHead(404);
    res.end("Not Found");
  }

}).listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});