import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  // Step3 => consuming
  const {loading, posts} = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col justify-center items-center gap-y-7 mb-[65px] mt-[55px]'>

      {
        loading ? (<Spinner></Spinner>) : (posts.length===0 ? 
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
