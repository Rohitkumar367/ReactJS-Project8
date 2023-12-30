import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  // Step3 => consuming
  const {loading, posts} = useContext(AppContext);


  return (
    <div>

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

                    <p className='font-bold'>{curElem.title}</p>

                    <p>
                      By <span>{curElem.author}</span> on <span>{curElem.category}</span>
                    </p>

                    <p>Posted on {curElem.date}</p>

                    <p>{curElem.content}</p>

                    <div>
                      {curElem.tags.map((tag, index) => {
                        return (
                          <span key={index}>{`#${tag}`}</span>
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
