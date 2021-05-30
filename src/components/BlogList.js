import { Link } from 'react-router-dom';
import styled from 'styled-components';

    const BlogList = ({ blogs, title }) => {
        return ( 
           <Preview>
               <h2>{title}</h2>
               <Cards>
               {blogs.map((blog) =>(
                   <Card>
                     <Link to ={`/blogs/${blog.id}`}>
                        <Links>
                       <h3>{blog.title}</h3>
                       <h5>{blog.author}</h5>
                       <p>{blog.body.slice(0, 200)}</p>
                       <p>Continue reading...</p>
                       </Links>
                       </Link>
                   </Card>
               ) )}
               </Cards>
           </Preview>
        );
    }
     

  const Preview =  styled.div`
  
      max-width:1200px;
      margin:10px auto;
      h2{
        font-size:41px;
       font-family:'Pattaya', sans-serif;
       text-align:center;
      }
  `

 const Cards = styled.div `
     display:flex;
     flex-wrap:wrap;
 
     padding:10px;
    
 `

 const Card = styled.div`
 
  width:30%;
  margin:20px auto ;

    h3{
      font-family:'Pattaya', sans-serif;
      font-size:30px;
      margin:10px;
    }
    
    h5{
        font-family:'Roboto', sans-serif;
       font-size:19px ;
       margin:20px;
    }

    p{
        font-family:'Roboto', sans-serif;
      font-size:17px;
      margin:10px
    }
    p:nth-last-child(1){
        font-size:18px ;
        margin:20px;
        color:#003;
      font-family:'Pattaya', sans-serif;
    }
   &:hover{
       cursor: pointer;
       box-shadow:10px 10px #eee;
   }
   `


const Links=  styled.div`
    
      color:black;
    


  `
    export default BlogList;
