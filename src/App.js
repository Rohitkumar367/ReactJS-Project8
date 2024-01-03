import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  // Step3 => consuming
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[])

  return (
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/blog/:blogId' element = {<BlogPage></BlogPage>}></Route>
      <Route path='/tags/:tag' element = {<TagPage></TagPage>}></Route>
      <Route path='categories/:category' element = {<CategoryPage></CategoryPage>}></Route>
    </Routes>
  );
}

export default App;
