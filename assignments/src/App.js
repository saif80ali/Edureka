import './App.css';
import React from "react";
import Header from './Header.js'
import Home from './Home.js';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
