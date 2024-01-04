import React, { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const location =  useLocation();

  // Step3 => consuming
  const {fetchBlogPosts} = useContext(AppContext);


  useEffect(() => {
    const page = searchParams.get("page") ?? 1; //-> value of page is passed in string format

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search])

  return (
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/blog/:blogId' element = {<BlogPage></BlogPage>}></Route>
      <Route path='/tags/:tag' element = {<TagPage></TagPage>}></Route>
      <Route path='/categories/:category' element = {<CategoryPage></CategoryPage>}></Route>
    </Routes>
  );
}

export default App;
