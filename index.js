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



const fs = require('fs');

fs.writeFile("./a.txt", "abes college is hhah", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File written successfully");
  }
});
