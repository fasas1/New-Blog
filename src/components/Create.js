import Navbar from "./Navbar";
import styled from 'styled-components'
const Create = () => {
    return ( 
         <div>
             <Navbar />
             <h2>Add a New Blog</h2>
          <form>
              <label>Title</label>
               <input type="text" />
               <label>Body</label>
               <input type="text" />
          </form>

         </div>
     );
}
 


const Form= styled.div`
      width:90%;
`

export default Create;