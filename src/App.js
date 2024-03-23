/*
What does a url contain:- (understanding url)
  1. Protocol: The protocol specifies the rules that the browser and server follow to communicate. Common protocols include HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure), which is encrypted.

  2. Domain: The domain (or hostname) is the human-readable address of a website, such as "example.com". It can also include subdomains like "www" or "blog".

  3. Port: The port number is an optional component of a URL that specifies the endpoint on the server that the client is trying to connect to. If no port is specified, the default port for the protocol is used (e.g., 80 for HTTP, 443 for HTTPS).

  4. Pathname: The pathname is the part of the URL that comes after the domain and any port number. It specifies the location of a specific resource on the server's file system. For example, in "https://example.com/path/to/resource", "/path/to/resource" is the pathname.

  5. Query Parameters: Query parameters are key-value pairs that are appended to the end of a URL, typically following a question mark (?). They are used to pass data to the server or to modify the behavior of the resource being requested. Each key-value pair is separated by an ampersand (&). For example, in "https://example.com/search?q=react&sort=popular", the query parameters are "q=react" and "sort=popular".

  6. Fragment Identifier: The fragment identifier is an optional component of a URL that specifies a specific section within the resource being requested. It is preceded by a hash symbol (#). Fragment identifiers are commonly used in web pages to link to specific sections of a document. For example, in "https://example.com/page#section1", "#section1" is the fragment identifier.

Here's an example URL with all components:
  url -> https://www.example.com:8080/path/to/resource?q=search&sort=popular#section1
    1. Protocol: https://
    2. Domain: www.example.com
    3. Port: 8080
    4. Pathname: /path/to/resource
    5. Query Parameters: ?q=search&sort=popular
    6. Fragment Identifier: #section1
    7. Understanding these components can help you interpret and manipulate URLs in web development.
*/

/* Some Hooks:-
  1. useSearchParams():- It specifically designed for handling query parameters in the URL. It allows you to access and manipulate the query parameters of the current URL within a functional component.

  2. useLocation():-It allows you to access the current URL location(pathname) in your functional components. This is particularly useful for dynamically rendering components based on the current route or extracting query parameters.
*/

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
    // .get has been used to access the value of page in current url and if there is no such key as 'page' then take 1.

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

    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/blog/:blogId' element = {<BlogPage></BlogPage>}></Route>
        <Route path='/tags/:tag' element = {<TagPage></TagPage>}></Route>
        <Route path='/categories/:category' element = {<CategoryPage></CategoryPage>}></Route>
      </Routes>
    </div>

  );
}

export default App;
