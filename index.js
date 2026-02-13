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
const fs = require('fs');

fs.cp("./a.txt", "./b.txt", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File copied successfully");
  }
});
