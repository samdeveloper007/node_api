var express= require('express');
var cors= require('cors');
var app= express();
app.use(cors());
const port= process.env.PORT || 3000;
const apiData= require("./data.json");

app.get('/', function(req, res){
    res.send(apiData);
});
app.listen(port, function(req, res){
    console.log("Server has started at port : "+port);
})
