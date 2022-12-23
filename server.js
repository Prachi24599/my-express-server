const express = require("express");
const app = express(); //function that represents express module and we bind that to world app

app.get("/" , function(request, response){
    response.send("<h1><em>Hello</em></h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me : prachi24599@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Hey,I'm Prachi");
});

app.get("/hobbies", function(req, res){
    res.send("Hobbiesss!!!!");
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});