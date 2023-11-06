import React from 'react'

const Blog =({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props, blogs);

  return (
    <div  className='blog-list'>
        <h1>{title}</h1>
        {blogs.map((blog)=> (
            <div className='blog-preview' key={blog.id}>
                
                <h2>{blog.title}</h2>
                <p><strong>{blog.body}</strong></p>
                <p>written by {blog.author}</p>
            </div>
          ))}
    </div>
  )
}

export default Blog;