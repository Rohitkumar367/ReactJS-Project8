import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const[blog, setBlog] = useState(null);
  const[relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const {setLoading, loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
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
        <button onClick={() => navigate(-1)}>Back</button>
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
