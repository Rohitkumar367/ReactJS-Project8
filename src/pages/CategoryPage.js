import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header'

const CategoryPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <h2>Blogs on <span>{category}</span></h2>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage
