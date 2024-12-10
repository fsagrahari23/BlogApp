'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import BlogTable from '@/components/AdminComponents/BlogTable'
import axios from 'axios';
import { toast } from 'react-toastify'
export default function page() {
  const [data,setData]=useState([]);


  const fetchData= async ()=>{
    const response = await axios.get('/api/blog');
    setData(response.data.blogs);
  }
  const deleteBlogs= async (mongoId)=>{
      const response = await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }}
    )
    toast.success(response.data.msg);
    fetchData();
  }
  useEffect(()=>{
      fetchData();  
  },[])
  return (
    <>
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-300 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-200 '>
          <tr>
            <th scope='col' className='hidden sm:block px-6 py-3 '>
              Author name
            </th>
            <th scope='col' className=' px-6 py-3 '>
              Blog Title
            </th>
            <th scope='col' className=' px-6 py-3 '>
             Date
            </th>
            <th scope='col' className=' px-6 py-3 '>
              Action
            </th>
          </tr>
          </thead>
          <tbody className='text-gray-700 '>
            {
            data.map((item,index)=>{
              return <BlogTable key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlogs}/>
            })
          }
            
          </tbody>
                 
        </table>
      </div>
    </div>
    </>
  )
}
