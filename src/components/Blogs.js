import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  // Step3 => consuming
  const {loading, posts} = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col justify-center items-center gap-y-7 mb-[200px]'>

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
                  <div key={curElem.id}>

                    <p className='font-bold text-lg'>{curElem.title}</p>

                    <p className='text-sm mt-[4px]'>
                      By <span className='italic'>{curElem.author}</span> on <span className='underline font-bold'>{curElem.category}</span>
                    </p>

                    <p className='text-[15px] mt-[4px]'>Posted on {curElem.date}</p>

                    <p className='text-md mt-[13px]'>{curElem.content}</p>

                    <div className='flex flex-wrap gap-x-3 mt-[5px]'>
                      {curElem.tags.map((tag, index) => {
                        return (
                          <span key={index} className='text-blue-700 underline font-bold text-xs'>{`#${tag}`}</span>
                        )
                      })}
                    </div>

                  </div>
                )
              })
            )
        )
      }
      
    </div>
  )
}

export default Blogs
