import Login from './page/Login';
import Home from './page/Home';
import Signup from './page/SignUp';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userSignup, setUserSignup] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path="/Home" element={<Home userLoggedIn={userLoggedIn} userSignup={userSignup} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
