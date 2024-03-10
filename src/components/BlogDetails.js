import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>

      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold'>{post.title}</span>
      </NavLink>

      <p className='text-[13px]'>
        By <span className='italic'>{post.author}</span> on {" "} <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
      </p>

      <p className='text-[10px] mt-[px]'>
        Posted on {post.date}
      </p>

      <p className='text-[16px] mt-[10px]'>
        {post.content}
      </p>

      <div className='flex gap-x-2'>
        {
            post.tags.map((curElem, index) => {
                return (
                    <NavLink key={index} to={`/tags/${curElem.replaceAll(" ","-")}`}>
                        <span className='text-blue-700 underline font-bold text-[12px]'>{`#${curElem}`}</span>
                    </NavLink>
                )
            })
        }
      </div>
    </div>
  )
}

export default BlogDetails
