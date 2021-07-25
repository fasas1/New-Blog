import Navbar from "./Navbar";
import styled from 'styled-components'

const Create = () => {
    return ( 
         <>
             <Navbar />
             <h2>Add a New Blog</h2>
              
     <Form>
     <Label>
        Title:
        <input type="text" name="name" />
     </Label>
    
     <Label>
          Essay:
          <textarea  rows='5' />
        </Label>
        
        <input type="submit" value="Submit" />
       
  </Form>
         </>
     );
}
 


const Form= styled.div`
      
`


const Label= styled.div`
        padding:10px;  
        
      
      input, textarea {
        width:40%;
        padding:10px 0px;
        margin:10px  0px;
       
      }
`

export default Create;