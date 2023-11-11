import React from 'react'

import { Link } from 'react-router-dom';

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