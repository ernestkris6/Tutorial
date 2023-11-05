import React from 'react';

const Home =() => {
  
    const handleClick = () => {
      console.log('Hello Ninjas');
    }

    const handleClickAgain = (name) => {
      console.log('Hello' + name);
    }

        return (
          <div className='home'>
          <h1>Home</h1>
          <button onClick={()=> handleClickAgain(" Chris")}>Click Me Now</button>
          <button onClick={handleClick}>Click me</button>
          </div>
        )
}

export default Home;