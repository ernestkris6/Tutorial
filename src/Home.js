import React from 'react';


import "./Blog";
import Blog from './Blog';
import useFetch from './useFetch';

const Home = () => {

  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');



  return (
    <div className='home'>
          {error && <div>{error}</div>}
          { isPending && <div><h2>Loading...</h2></div>}
          {blogs && <Blog blogs={blogs} title="Ernest's Blogs" />}
    </div>
  )
}

export default Home;

