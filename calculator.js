//jshint esversion:6
const express=require("express");

const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})
app.listen(3000,function(){
    console.log("server is running on port 3000");
});

app.post("/",function(req,res){
    
    res.send("Your Answer is: s"+(Number(req.body.num1)+Number(req.body.num2)));
})
app.post("/bmicalculator",function(req,res){
    var wt=parseFloat(req.body.w1);
    var ht=parseFloat(req.body.h1);
    var result=wt/(ht*ht);
    res.send("Your BMI is "+result);
})