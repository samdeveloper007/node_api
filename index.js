var express= require('express');
var cors= require('cors');
var app= express();
app.use(cors());
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
    res.sendFile(dir+'/html/login.html');
})
