//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num = num1 + num2;
    res.send("the calculated result is:" + num);

});
app.post("/bmicalculator",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var BMI = (weight/(height*height));
    res.send("the calculated BMI is:" + BMI);
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
});
app.listen(3000,function(){
    console.log("hello!");
});