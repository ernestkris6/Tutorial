import React from 'react';


const Navbar =() => {
  return (
    <div className='navbar'>
        <h1>The Dojo Blog</h1>
        <div className='links'>
            <a href='/'>Home</a>
            <a href='/create'
            style={{
              color : 'white',
              borderRadius : "8px",
              backgroundColor : " #f1356d",
            }}>New Blog</a>
            
        </div>
    </div>
  )
}

export default Navbar;