import './SignUp.css';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Icon } from '@mui/material';
function Signup(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPass, setConfirmedPass] = useState('');
  
    const handleSignup = (event) => {
      event.preventDefault();
      // handle signup logic here
    }
  
    return (
        <div>     
            <h1 className='sh'>GooseBook</h1>
            <img src='../asset/lib1.png' className='li1' alt='library1'/>
            <form onSubmit={handleSignup} className='signup'>
                <div className='info'>
                    <label className="nameS" htmlFor="name">Name:</label><br/>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='info'>
                    <label className="nameS" htmlFor="surname">Surname:</label><br/>
                    <input type="text" placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div className='info'>
                    <label className="emailS" htmlFor="email">Email:</label><br/>
                    <input type="email" placeholder='Email' pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='info'>
                    <label className="passwordS" htmlFor="password">Password:</label><br/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='info'>
                    <label className="passwordS" htmlFor="confirmed password">Confirmed password:</label><br/>
                    <input type="password" placeholder='Confirmed Password' value={confirmedPass} onChange={(e) => setConfirmedPass(e.target.value)} />
                </div>
                <ArrowBackIcon/>
                    <button type="submit" style={{
                    backgroundColor: '#628E90',
                    borderRadius: '50px',
                    height: '52px',
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
                }}>Sign up</button>
            </form>
        </div>
    );
}
export default Signup;