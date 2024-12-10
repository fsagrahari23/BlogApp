import mongoose from "mongoose";

const connectDB=async ()=>{
  await mongoose.connect('mongodb://localhost:27017/blog-app')
  console.log('db connected')
}
export default connectDB;