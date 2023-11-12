import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

const App =() => {
  return (
    <div className='App'> 
        <Navbar />
        <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/blogs/:id' element={<BlogDetails />}></Route>
          </Routes>
        </BrowserRouter>
    
        </div>
    </div>
)
}

export default App;