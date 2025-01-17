import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

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

const userModel = mongoose.model("User",Schema);

export default userModel;