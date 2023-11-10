import React from 'react'
// import { useState, useEffect } from 'react';

import "./Blog";
import Blog from './Blog';
import useFetch from './useFetch';

const Home = () => {

  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const [blogs, setBlogs] = useState([
    //   { title: "Web Dev Tools", body: "lorem ipsum dolor...", author: "Ernest", id: "1" },
    //   { title: "Learning React", body: "lorem ipsum dolor...", author: "Emma", id: "2"},
    //   { title: "Learning Javascript", body: "lorem ipsum dolor...", author: "Ernest", id: "3"}
    // ]);

    
    
    
    // const [name, setName] = useState('Mario');


  // const handleDelete =  (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
  
  

    // fetch data
    // authentication

  //   useEffect(()=>{
  //     console.log('useEffect ran');
  //     console.log(name);
  // }, [name]);

  return (
    <div className='home'>
          {error && <div>{error}</div>}
          { isPending && <div><h2>Loading...</h2></div>}
          {blogs && <Blog blogs={blogs} title="Ernest's Blogs" />}
        
    </div>
  )
}

export default Home;

{ /* <Blog blogs={blogs.filter(blog=> blog.author === 'Ernest')} title="Josh's Blogs" handleDelete={handleDelete} />
        <Blog blogs={blogs.filter(blog => blog.author === 'Emma')} title="Emma's Blogs" handleDelete={handleDelete} /> */}
        {/* <button onClick={()=> setName('Luigi')}>Change Name</button>
        <p>{name}</p> */}