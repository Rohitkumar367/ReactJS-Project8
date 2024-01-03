import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const[blog, setBlog] = useState(null);
  const[relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();

  const {setLoading, loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      window.alert("couldn't fetch BlogPage");
      setBlog(null)
      setRelatedBlogs([])
    }
    setLoading(false);
  }

  useEffect(() => {
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {
        loading ? (<p>loading</p>) : (blog ? 
          (
            <div>
              <BlogDetails post={blog}></BlogDetails>
              <h2>Related Blogs</h2>
              {
                relatedBlogs.map((curElem) => {
                  return (
                    <div key={curElem.id}>
                      <BlogDetails post={curElem}></BlogDetails>
                    </div>
                  )
                })
              }
            </div>
          ) 
          : 
          (
            <p>Not found</p>
          ))
      }
    </div>
  )
}

export default BlogPage
