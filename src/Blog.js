import React from 'react';
import BlogDetails from './BlogDetails';

const Blog =({blogs, title}) => {


  return (
    <div className='blog-list'>
        
        <h1>{title}</h1>
        {blogs.map((blog)=>(
          <div className='blog-preview' key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>written by {blog.author}</p>
   
          </div>
        ))}
    </div>
  )
}

export default Blog;