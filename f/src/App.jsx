import Login from './page/Login';
import Home from './page/Home';
import Signup from './page/SignUp';
import Profile from './page/Profile';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './App.css';
import ProfileRead from './page/ProfileRead';
import ProfileWant from './page/ProfileWant';
import Search from './page/Search';
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userSignup, setUserSignup] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
          <Route path='/Signup' element={<Signup setUserSignup={setUserSignup}/>} />
          <Route path="/Home" element={<Home userLoggedIn={userLoggedIn} userSignup={userSignup} />} />
          <Route path='/Profile' element={ <Profile userLoggedIn={userLoggedIn}/>} />
          <Route path='/ProfileRead' element={ <ProfileRead userLoggedIn={userLoggedIn}/>} />
          <Route path='/ProfileWant' element={ <ProfileWant userLoggedIn={userLoggedIn}/>} />
          <Route path='/Search' element={ <Search userLoggedIn={userLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
