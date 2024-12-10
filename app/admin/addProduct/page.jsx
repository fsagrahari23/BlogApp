
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function page() {
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    title:'',
    description:'',
    category:"Startup",
    author:"Alex Bennett",
    authorImg:"/author_img.png"
  })
  const onChangehandler=(e)=>{
     const name=e.target.name;
     const value=e.target.value;
     setData(data=>({...data,[name]:value}));
     console.log(data);
  }
  const onSubmitHandler=async (e)=>{
     e.preventDefault();
     const formdata=new FormData();
     formdata.append('title',data.title);
     formdata.append('description',data.description);
     formdata.append('category',data.category);
     formdata.append('author',data.author);
     formdata.append('authorImg',data.authorImg);
     formdata.append('image',image);
     const response = await axios.post('/api/blog',formdata);
     if(response.data.success){
      toast.success(response.data.msg)
      setImage(false);
      setData({
        title:'',
        description:'',
        category:"Startup",
        author:"Alex Bennett",
        authorImg:"/author_img.png"
      })

     }
     else{
      toast.error('Error');
     }
     console.log(formdata);
  }
  return (
    <>
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
      <p className='text-xl'>Upload thumbnail</p>
      <label htmlFor="image">
        <Image className='mt-4' src={!image?assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt=''/>
      </label>
      <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
      <p className='text-xl mt-4'>Blog title</p>
      <input name='title' onChange={onChangehandler} value={data.title} className='w-full sm:w-[500px] ,t-4 px-4 py-3 border ' type="text" placeholder='Type here' required />
      <p className='text-xl mt-4'>Blog description</p>
      <textarea name='description' onChange={onChangehandler} value={data.description} className='w-full sm:w-[500px] ,t-4 px-4 py-3 border ' type="text" placeholder='Write content here ' rows={6} required />
      <p className='text-xl mt-4'>Blog category</p>
      <select name='category' onChange={onChangehandler} value={data.category} className='w-40  mt-4 px-4
      py-3 border text-gray-500'>
        <option value='Startup'>Startup</option>
        <option value='Technology'>Technology</option>
        <option value='Lifestyle'>Lifestyle</option>
        <option value='Business'>Business</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
    </form>
    </>
  )
}
