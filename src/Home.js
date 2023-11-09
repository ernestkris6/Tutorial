// import React, {useEffect, useState} from 'react';
// import Blog from './Blog';

// const Home =() => {


//       const [blogs, setBlogs] = useState([
//         { title : "My new website", body : "Lorem ipsum...", author : "Mario", id : 1},
//         { title : "Welcome party", body : "Lorem ipsum...", author : "Yoshi", id : 2},
//         { title : "Web dev top tips", body : "Lorem ipsum...", author : "Mario", id : 3}
//       ])

      
//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }


//   useEffect(()=>{
//     console.log('use efferct ran');
//     console.log(blogs);
//   })

//   return(
//     <div className='home'>
//         <Blog blogs={blogs} title='All title!' handleDelete={handleDelete} />
//         <Blog title='Mario Blogs!' handleDelete={handleDelete} blogs={blogs.filter((blog)=> blog.author === 'Mario')}   />
//         <Blog title='Yoshi Blogs!' handleDelete={handleDelete} blogs={blogs.filter((blog)=> blog.author === 'Yoshi' )} />
//     </div>
//   )
// }

// export default Home;

import React from 'react'
import { useState } from 'react';

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
   

  return (
    <div className='home'>
        <Blog blogs={blogs} title="Ernest's Blogs" handleDelete={handleDelete} />
        <Blog blogs={blogs.filter(blog=> blog.author === 'Ernest')} title="Josh's Blogs" handleDelete={handleDelete} />
        <Blog blogs={blogs.filter(blog => blog.author === 'Emma')} title="Emma's Blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default Home;