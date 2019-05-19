var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
    request("https://jsonplaceholder.typicode.com/posts", function(error, response, body){
       if(!error && response.statusCode ==200) {
           var data = JSON.parse(body);
           res.render("results.ejs", {data: data});
       }
    });
});

app.listen(3000,function(){
   console.log("Server Started!!"); 
});
