const express=require("express")
const m=require("mongoose")
const Log=require("./Db");
const { default: mongoose } = require("mongoose");
const b=express();
b.use(express.json());
const url="mongodb://localhost:27017/";
try{
    m.connect(url)
    console.log("db connected")
}
catch(error){
console.log(error)
}
b.post("/get1",async(req,res)=>{
    const {Name,email,pass}=req.body
    console.log(Name)
    console.log(email)
    console.log(pass)
    res.send("sended to b")
   const abc= new Log({Name,email,pass})
   try{
    await abc.save()
    console.log("sended to d")
   }
   catch(error){
    console.log(error)
   }
})

b.get("/details",async(req,res)=>{
    const {name,email,pass}=req.body
    const sc=await Log.findOne({name})
    if(req.name===sc.name,req.email===sc.email,req.pass===sc.pass){
        res.send("account")
        console.log("ok")
    }
    else{
        res.send("no account found")
        console.log("no")
    }
    
})
b.listen(9000,()=>{
    console.log("server is running")
})