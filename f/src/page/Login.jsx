import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
function Login({ setUserLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        if (email === "iamthawanrat.tn@gmail.com" && password === "wanttosleep") {
            setUserLoggedIn(true);
            navigate("/Home");
        } else {
            alert("Invalid email or password");
        }
    }

    return (
        <div>
            <h1>GooseBook</h1>
            <img src="../asset/NongGoose.png" alt="Nong Goose" />
            <form onSubmit={handleLogin}>
                <div className='input-container'>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" placeholder='Email' pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label className='pass' htmlFor="password">Password:</label><br />
                    <input type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='Login-button' type="submit" style={{
                    backgroundColor: '#628E90',
                    borderRadius: '50px',
                    height: '47px',
                    width: '147px',
                    border: '2px solid #628E90',
                    fontFamily: 'Montserrat',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#FFF6E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    marginTop: '30px',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                }}>
                    Login</button>
                <p className='or'>OR</p>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <button className='Signup-button' type="submit" style={{
                        backgroundColor: 'white',
                        borderRadius: '50px',
                        height: '47px',
                        width: '147px',
                        border: '2px solid #628E90',
                        fontFamily: 'Montserrat',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#628E90',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    }}>
                        Sign-up</button>
                </Link>
            </form>
        </div>
    );
}
export default Login;