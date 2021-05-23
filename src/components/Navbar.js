import styled from 'styled-components';

const Navbar = () => {
    return ( 
        <Nav>
            <h4>Dojo Blog</h4>
            <Link>
                <a href='#'>Home</a>
                <a href='#'>New Blog</a>
                <a href='#'>About</a>
            </Link>
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


const Link= styled.div`
    list-style:none;
    font-family:'Roboto', sans-serif;
   
`







export default Navbar;