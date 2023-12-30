import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[])

  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
