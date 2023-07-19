import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/mainLayout/Home';
import User from './modules/user/views';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/user' Component={User}/>
    </Routes>

   </BrowserRouter>
  );
}

export default App;

