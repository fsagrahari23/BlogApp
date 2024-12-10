const { default: connectDB } = require("@/lib/config/db");
const { NextResponse } = require("next/server");

import blogModel from '@/lib/models/blogModel';
import {writeFile} from 'fs/promises'
const fs = require('fs')

const LoadDb= async ()=>{
  await connectDB();
}

LoadDb();

// Api enpoints to get alll blogs 
export async function GET(request){
  const blogId= request.nextUrl.searchParams.get("id");
  if(blogId){
    const blog= await blogModel.findById(blogId);
    return NextResponse.json(blog);
  }
  
  const blogs= await blogModel.find({});
  return NextResponse.json({blogs})
}
// API endpont for uploading blogs 
export async function POST(request){
  const formData = await request.formData();
  const timeStamp=Date.now();

  const image = formData.get('image');
  const imagebyteData=await image.arrayBuffer();
  const buffer = Buffer.from(imagebyteData);
  const path = `./public/${timeStamp}_${image.name}`;
  await writeFile(path,buffer);
  const imageurl =`/${timeStamp}_${image.name}`;
  console.log(imageurl);
  const blogData = {
    title:`${formData.get('title')}`,
    description:`${formData.get('description')}`,
    image:`${imageurl}`,
    category:`${formData.get('category')}`,
    timeStamp:`${timeStamp}`,
    author:`${formData.get('author')}`,
    authorImg:`${formData.get('authorImg')}`,

  }
  await blogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({success:true , msg:"Blog Added"});

}

// creating endpoint to delete a blog

export async function DELETE(request){
  const blogId= request.nextUrl.searchParams.get("id");
  const blog= await blogModel.findById(blogId);
  
  fs.unlink(`./public/${blog.image}`,async ()=>{
    await blogModel.findByIdAndDelete({_id:blogId});
    console.log("Image deleted");
  })
  return NextResponse.json({success:true , msg:"Blog Deleted"});
}
