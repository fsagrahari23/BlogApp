import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'
function BlogTable({authorImg,title,author,date,mongoId,deleteBlog}) {
  const blogDate= new Date(date);
  const id = String(mongoId);
  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hdden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
     <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon} alt='img'/>
       <p>{author?author:"no author"}</p>
      </th>
      <td className='px-6 py-4'>
        {title ? title:"no title"}
      </td>
      <td className='px-6 py-4'>
        {blogDate.toDateString()}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
        
        x
        
        
      </td>
      
      
    </tr>
  )
}

export default BlogTable