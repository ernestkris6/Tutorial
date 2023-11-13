import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs' )
  return (
    <div>
        {isPending && <div><h2>Loading...</h2></div>}
        { error && <div><h2>{ error }</h2></div> }
        {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>

            </article>
        )}
    </div>
  );
}

export default BlogDetails;