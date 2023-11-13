import React from 'react';
import { Link } from 'react-router-dom';

const Blog =({blogs, title}) => {


  return (
    <div className='blog-list'>
        
        <h1>{title}</h1>
        {blogs.map((blog)=>(
          <div className='blog-preview' key={blog.id}>
          <Link to="/blogs/:id">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>written by {blog.author}</p>
          </Link>
   
          </div>
        ))}
    </div>
  )
}

export default Blog;