import React, {useEffect, useState} from 'react';
import Blog from './Blog';

const Home =() => {


      const [blogs, setBlogs] = useState([
        { title : "My new website", body : "Lorem ipsum...", author : "Mario", id : 1},
        { title : "Welcome party", body : "Lorem ipsum...", author : "Yoshi", id : 2},
        { title : "Web dev top tips", body : "Lorem ipsum...", author : "Mario", id : 3}
      ])

      
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

  useEffect(()=>{
    console.log('use efferct ran');
  })

  return(
    <div className='home'>
        <Blog blogs={blogs} title='All title!' handleDelete={handleDelete} />
        <Blog blogs={blogs} title='Mario Blogs' handleDelete={handleDelete} blog={blogs.filter((blog)=> blog.author === 'Mario')}   />
    </div>
  )
}

export default Home;