'use client'
import React, { useEffect, useState } from 'react'
import { blog_data , assets } from '@/Assets/assets';
import Image from 'next/image';
import Footer from '@/components/footer';
import Link from 'next/link';
import axios from 'axios';
function Page({params}) {
  const [data,setData]=useState(null);
  const fetchBlogdata= async ()=>{
    const response=await axios.get('/api/blog',{
      params:{id:params.id}
      });
      
      setData(response.data);
      
  }
  
  useEffect(()=>{
      fetchBlogdata();
  },[])
  
  return ( data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
     <div className="flex justify-between items-center">
      <Link href='/'>
     <Image src={assets.logo} width={180} alt='image' className='w-[130px] sm:w-auto'/>
     </Link>
     <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>get started <Image src={assets.arrow}/></button></div>
     <div className='text-center my-24'>
      <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
      <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt=""></Image>
      <p className='mt-1 pb-2 text-lg mx-w-[740px] mx-auto'>{data.author}</p>
     </div>
     
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image src={data.image} width={1280} height={1280} alt=''/>
      <h1 className=' my-8 text-[26px] font-semibold'>Introduction:</h1>
      <p>{data.description}</p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
      <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>
      <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
      <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>
      <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>

      <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
      <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>
      <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>

      <h3 className='my-5 text-[18px] font-semibold'>Conclusion:-</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda qui vero sed minima labore doloremque tempora cumque consequatur.</p>
     
      <div className='my-24 '>
        <p className='text-black font-semibold my-4 '>Share this article on social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon}></Image>
          <Image src={assets.twitter_icon}></Image>
          <Image src={assets.googleplus_icon}></Image>
        </div>
      </div>

    </div>
    <Footer/>
    </>:<></>
  )
}

export default Page;