import Login from './page/Login';
import Home from './page/Home';
import Signup from './page/SignUp';
import Profile from './page/Profile';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Search from './page/Search';
import NotFound from './page/NotFound';
import BookOverview from './page/BookOverview';
import BookReview from './page/BookReview';
function App() {
  //const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userSignup, setUserSignup] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
          <Route path='/Signup' element={<Signup setUserSignup={setUserSignup}/>} />
          <Route path="/Home" element={<Home userLoggedIn={userLoggedIn} userSignup={userSignup} />} />
          <Route path='/Profile' element={ <Profile userLoggedIn={userLoggedIn} />} />
          <Route path='/Search' element={ <Search userLoggedIn={userLoggedIn}/>} />
          <Route path='/NotFound' element={ <NotFound userLoggedIn={userLoggedIn}/>} />
          <Route path='/BookOverview' element={ <BookOverview userLoggedIn={userLoggedIn}/>} />
          <Route path='/book/:book_id' element={ <BookOverview userLoggedIn={userLoggedIn}/>} />
          <Route path='/bookR/:book_id' element={ <BookReview userLoggedIn={userLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
