import Navbar from "./Navbar";

const Create = () => {
    return ( 
         <div>
             <Navbar />
             <h2>Add Blog</h2>
          <form>
              <label>Title</label>
               <input type="text" />
               <label>Body</label>
               <input type="text" />
          </form>

         </div>
     );
}
 
export default Create;