import styled from 'styled-components';
import home1 from '../img/home1.jpg';


const Hero = () => {

    return ( 
         <Banner>
             <h2>My React Learning Experience</h2>
         </Banner>
          
         
    )
}
 
const Banner = styled.div`
    
    background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${home1});
          height:40vh;
          
         
          background-position: center;
          background-size:cover;
          display:flex;
          justify-content:center;
          align-items:center;
        
     
     h2{
          color:white;
          font-size:38px;
          font-family:'Roboto';


     } 


`

export default Hero;