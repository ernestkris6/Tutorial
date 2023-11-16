import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetails = () => {

  
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id );

    const navigate = useNavigate()
    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
      }).then(()=> {
          navigate('/');
      })
    }
  
  return (
    <div className='blog-details'>
      <h2 className='blog-details'>Blog - {id}</h2>
       {isPending && <div><h2>Loading...</h2></div>}
        { error && <div><h2>{ error }</h2></div> }
        {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p><b><i>Written by { blog.author }</i></b></p> <br></br>
               <div><h3>{ blog.body }</h3></div> 
               
              <button onClick={handleClick}>DELETE</button>
            </article>
        )}
        
    </div>
  );
}

export default BlogDetails;