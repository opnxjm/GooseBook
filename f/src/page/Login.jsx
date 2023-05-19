import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import axios from 'axios';
import { MyContext } from '../service/globalContext';

function Login({ setUserLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUserDataValue, getUserDataValue}  = useContext(MyContext);
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3008/login", {
                email: email,
                password: password
              });
        
              if (response.data.success) {
                // Login successful
                const user = response.data.user;
                setUserLoggedIn(true);
                setUserDataValue({
                    userId: user.user_id,
                    username: user.username,
                    name: user.name,
                    bio: user.bio,
                    profile_pic: null,
                    email: user.email,
                })
                
                navigate('/Home');
                console.log(getUserDataValue);
              } else {
                // Login failed
                console.log(response.data.message);
              }
            } catch (error) {
              console.error('Error logging in:', error);
            }
          };

    return (
        <div className='login'>
            <h1 className='logo_login'>GooseBook</h1>
            <img src="../asset/NongGoose.png" alt="Nong Goose" className='NongGoose' />
            <form onSubmit={handleLogin}>
                <div className='input-container1'>
                    <label className='email-login' htmlFor="email" style={{marginLeft:{xs:'5%', md:'10%', ld:'15%'}}}>Email:</label><br />
                    <input type="email" id="email" placeholder='Email' pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-container2'>
                    <label className='pass' htmlFor="password">Password:</label><br />
                    <input type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input className='Login-button' type="submit" style={{
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
                    marginTop: '3%',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                }} value="login" />
               
                <p className='or' style={{fontWeight:'bold', fontSize:'20px'}}>OR</p>
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