import React from 'react';
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
