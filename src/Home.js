import React, {useState} from 'react';

const Home =() => {

      const [blogs, setBlogs] = useState([
        { title : "My new website", body : "Lorem ipsum...", author : "Mario", id : 1},
        { title : "Welcome party", body : "Lorem ipsum...", author : "Yoshi", id : 2},
        { title : "Web dev top tips", body : "Lorem ipsum...", author : "Chris", id : 3}
      ])

  return(
    <div className='home'>
        <div >
          {blogs.map((blog)=> (
            <div className='blog-preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p><strong>{blog.body}</strong></p>
                <p>written by {blog.author}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home;