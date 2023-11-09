import React from 'react'
import { useState, useEffect } from 'react';

import "./Blog";
import Blog from './Blog';

const Home =() => {

    const [blogs, setBlogs] = useState([
      { title: "Web Dev Tools", body: "lorem ipsum dolor...", author: "Ernest", id: "1" },
      { title: "Learning React", body: "lorem ipsum dolor...", author: "Emma", id: "2"},
      { title: "Learning Javascript", body: "lorem ipsum dolor...", author: "Ernest", id: "3"}
    ])


    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id );
      setBlogs(newBlogs);
    }

    //fetch data
    //authentication

    useEffect(()=>{
      console.log('useEffect ran');
      console.log(blogs);
    });


   

  return (
    <div className='home'>
        <Blog blogs={blogs} title="Ernest's Blogs" handleDelete={handleDelete} />
        <Blog blogs={blogs.filter(blog=> blog.author === 'Ernest')} title="Josh's Blogs" handleDelete={handleDelete} />
        <Blog blogs={blogs.filter(blog => blog.author === 'Emma')} title="Emma's Blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default Home;