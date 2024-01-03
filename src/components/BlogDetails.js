import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>

      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>

      <p>
        By <span>{post.author}</span> on {" "} <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>

      <p>
        Posted on {post.date}
      </p>

      <p>
        {post.content}
      </p>

      <div>
        {
            post.tags.map((curElem, index) => {
                return (
                    <NavLink key={index} to={`/tags/${curElem.replaceAll(" ","-")}`}>
                        <span>{`#${curElem}`}</span>
                    </NavLink>
                )
            })
        }
      </div>
    </div>
  )
}

export default BlogDetails
