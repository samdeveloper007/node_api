var express= require('express');
var cors= require('cors');
var app= express();
app.use(cors());
app.set('view engine', 'ejs');
const port= process.env.PORT || 3000;
const apiData= require("./data.json");
const dir= __dirname;
app.get('/', function(req, res){
    res.send(apiData);
});
app.listen(port, function(req, res){
    console.log("Server has started at port : "+port);
});
app.get('/home', function(req, res){
    res.send("Welcome!");
});
app.get('/login', function(req, res){
    // res.sendFile(dir+'/html/login.html');
    res.render('login');
});
app.get("/logout", function(req, res){
    res.send("Logged Out Successfully!");
});
