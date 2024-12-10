import mongoose from "mongoose";

const Schema= new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});
const adminModel= mongoose.model("admin",Schema);
export default adminModel;
