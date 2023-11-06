import React, {useState} from 'react';
import Blog from './Blog';

const Home =() => {

      const [blogs, setBlogs] = useState([
        { title : "My new website", body : "Lorem ipsum...", author : "Mario", id : 1},
        { title : "Welcome party", body : "Lorem ipsum...", author : "Yoshi", id : 2},
        { title : "Web dev top tips", body : "Lorem ipsum...", author : "Chris", id : 3}
      ])

  return(
    <div className='home'>
        <Blog blogs={blogs} />
    </div>
  )
}

export default Home;