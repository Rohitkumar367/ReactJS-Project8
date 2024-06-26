
// In ReactJS, the Context API is a feature that allows you to pass data through the component tree without having to pass props down manually at every level. It provides a way to share values like themes, preferred language, or authentication status to all components in the tree without explicitly passing them as props at every level

// key words used -> 'createContext()' and 'file_name.provider', provider provides a value to its children


import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useNavigate } from "react-router-dom";

// Step1 => creating context
export const AppContext = createContext();

// here children means the tags used within AppContextProvider tag
function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data filling
    async function fetchBlogPosts(page=1, tag=null, category){
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(e){
            window.alert("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        
        setLoading(false);
    }

    // page change handling
    function handlePageChange(page){
        navigate({search: `?page=${page}`})
        setPage(page);
    }

    //Context that is to be passed
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // Step2 => providing value to our children
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;




