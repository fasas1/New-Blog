import { useState, useEffect} from 'react'
import BlogList from './BlogList';
import Spinner from './Spinner';
import UseFetch from './UseFetch';
        
const Homeblog = () => {

     const {data:blogs, isPending, error} = UseFetch('http://localhost:8000/blogs')
     
    return ( <>
        { error && <> {error} </>}
         {isPending  && < Spinner /> }
         { blogs && <BlogList blogs={blogs} title ="All Blogs!"/> }
        </>
    );
  
    }
 
export default Homeblog;