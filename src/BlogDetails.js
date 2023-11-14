import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id )
  return (
    <div>
      <h2>Blog - {id}</h2>
       {isPending && <div><h2>Loading...</h2></div>}
        { error && <div><h2>{ error }</h2></div> }
        {blog && (
            <article>
                <h2>{ blog.title }</h2> <br></br>
               <div><h3>{ blog.body }</h3></div> <br></br>
               <p><b><i>Written by { blog.author }</i></b></p>

            </article>
        )}
        
    </div>
  );
}

export default BlogDetails;