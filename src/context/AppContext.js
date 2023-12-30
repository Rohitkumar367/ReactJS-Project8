import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

// Step1 => creating context
export const AppContext = createContext();

// here children means the tags used within AppContextProvider tag
function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

    //data filling
    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
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
        setPage(page);
        fetchBlogPosts(page);
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




