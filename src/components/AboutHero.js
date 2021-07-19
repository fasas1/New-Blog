import styled from 'styled-components';
import pexel from '../img/pexel.jpg';


const AboutHero = () => {
    return (  
        <Banner>
        <h2>Learning Nextjs </h2>
    </Banner>
    );
}



const Banner = styled.div`
    
    background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${pexel});
          height:50vh;
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

 
export default AboutHero;