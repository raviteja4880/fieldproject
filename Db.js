const mongoose=require("mongoose")
const Log=new mongoose.Schema({
Name:{
type:String,
required:true
},
pass:{
    type:String
}
})
module.exports=mongoose.model("Log",Log)