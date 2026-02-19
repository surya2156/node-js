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

// os
const os= require('os');
console.log("platform", os.platform());

console.log("userinfo", os.userInfo());
console.log("CPU", os.arch());
console.log("free memory", os.freemem());
console.log("total memory", os.totalmem());g