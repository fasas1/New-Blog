import { useParams } from "react-router";


const BlogDetails = () => {

    const { id } = useParams;
    const {data:blogs, isPending, error} = UseFetch('http://localhost:8000/blogs')

    return ( 
          <>
          <p>Details {id}</p>
          </>
     );
}
 
export default BlogDetails;