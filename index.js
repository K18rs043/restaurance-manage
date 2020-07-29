var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const port = 3000;

app.set("view engine", "pug")
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
});

app.listen(port, function(){
    console.log("Listening to port " + port);
});




