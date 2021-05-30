import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <Nav>
            <h4>Dojo Blog</h4>
           <Links>
              <Link to="/">Home</Link>  
              <Link to="/">New Blog</Link>  
              
              </Links>
        </Nav>
     );
}
 


const Nav= styled.div`
   border-bottom:3px solid #444;
   display:flex;
   justify-content:space-around;
   align-items:center;
   color:white;
   background:#001;
   padding:12px;
h4{
    font-size:21px;
    font-family:'Pattaya', sans-serif;
}

`


const Links= styled.div`
    list-style:none;
    font-family:'Roboto', sans-serif;
   
`



export default Navbar;