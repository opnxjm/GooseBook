import React, { useState } from 'react';

import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // if (username === "tn" && password === "wanttosleep") {
    //   setUserLoggedIn(true);
    //   // navigate("/Admin");
    // } else {
    //   alert("Invalid username or password");
    // }
  }

  return (
    <div>
    <h1>GooseBook</h1>
    <img src="../asset/NongGoose.png" alt="Nong Goose" />
    <form onSubmit={handleLogin}>
      <div className='input-container'>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='input-container'>
        <label className='pass' htmlFor="password">Password:</label><br/>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className='Login-button' type="submit" style={{
        backgroundColor: '#628E90',
        borderRadius: '50px',
        height: '47px',
        width: '147px',
        border: '2px solid #628E90', 
        fontFamily: 'Montserrat',
        fontSize:'18px',
        fontWeight: 'bold',
        color:'#FFF6E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        }}>
          Login</button>
        <p>OR</p>
        <button className='Signup-button' type="submit" style={{
        backgroundColor: 'white',
        borderRadius: '50px',
        height: '47px',
        width: '147px',
        border: '2px solid #628E90', 
        fontFamily: 'Montserrat',
        fontSize:'18px',
        fontWeight: 'bold',
        color:'#628E90',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        }}>
          Sign-up</button>
    </form>
    </div>
  );
}
export default Login;