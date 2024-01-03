import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {

  const navigation = useNavigation();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <h2>Blogs Tagged <span>{tag}</span></h2>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default TagPage
