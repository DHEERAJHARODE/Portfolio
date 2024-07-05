const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Dheeraj:Dheeraj2003@firstcluster.ykspvhd.mongodb.net/?retryWrites=true&w=majority&appName=Firstcluster");
const msgdata=mongoose.Schema({
  name:String,
  email:String,
  subject:String,
  msg:String
});
module.exports=mongoose.model("usermessage",msgdata);
