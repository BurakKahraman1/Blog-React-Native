import { createContext, useState } from "react";

export const BlogContext=createContext()

export const BlogProvider = ({ children }) => {

    const [page,setPage]=useState(1)
    const [data,setData]=useState([])

    const value = { 
      data,setData,
      page,setPage
    };
  
    return (
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    );
  };
  
  export default BlogContext;