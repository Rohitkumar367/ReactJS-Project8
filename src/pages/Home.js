import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Blogs></Blogs>
        <Pagination></Pagination>
      </div>
    </div>
  )
}

export default Home
