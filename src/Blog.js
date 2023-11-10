import React from 'react';

const Blog =({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title =  props.title;

  return (
    <div className='blog-list'>
        
        <h1>{title}</h1>
        {blogs.map((blog)=>(
          <div className='blog-preview' key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>written by {blog.author}</p>
          <button onClick={()=> handleDelete(blog.id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default Blog;