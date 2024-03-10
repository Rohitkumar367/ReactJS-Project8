import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  // Step3 => consuming
  const {loading, posts} = useContext(AppContext);


  return (
    <div className='py-3 flex flex-col gap-y-7 px-1 mt-[65px] mb-[60px]'>

      {
        loading ? (<Spinner></Spinner>) : 
        (posts.length===0 ? 
            (
              <div>
                <p>No post found</p>
              </div>
            )
             : 
            (
              posts.map((curElem) => {
                return(
                  <BlogDetails key={curElem.id} post={curElem}></BlogDetails>
                )
              })
            )
        )
      }
      
    </div>
  )
}

export default Blogs
