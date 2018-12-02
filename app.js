var express = require("express");
var app     = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
   res.sendFile(__dirname +"/views/"+"index.html"); 
});
app.get("*",(req,res)=>{
   res.redirect("/"); 
});
app.listen(process.env.PORT,process.env.IP,()=>{
    console.log("JBM_E-Resume Started successfully");
});