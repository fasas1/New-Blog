import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import UseFetch from './UseFetch';
import styled from 'styled-components'
import AboutHero from "./AboutHero";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);
   
    return ( 
          <>
          <Navbar />
          <AboutHero />
          { error && <div> {error} </div>}
         {isPending  && < Spinner /> }
         { blog && (
         <Article> 
                <h3>{blog.title}</h3>
                <h5>Written by {blog.author}</h5>
               <p>{blog.body}</p>
              
         </Article>
          )}
          </>
     );
}
 

const Article  = styled.div`
      max-width:900px;
      text-align:center;
      margin:20px auto;
   
      h3{
      font-family:'Pattaya', sans-serif;
      font-size:33px;
      margin:10px;
    }
    
    h5{
        font-family:'Roboto', sans-serif;
       font-size:22px ;
       margin:20px;
    }

    p{
        font-family:'Roboto', sans-serif;
      font-size:18px;
      margin:10px;
      line-height:1.5;
      color:black;
    }



`


export default BlogDetails;