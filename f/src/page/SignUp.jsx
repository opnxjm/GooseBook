import './SignUp.css';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";

function Signup({ setUserSignup }) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPass, setConfirmedPass] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        // e.preventDefault();
        if (!!name || !!surname || !!email || !!password || !!confirmedPass) {
          alert('Please provide all required information.');
          return;
        }
        if (password !== confirmedPass) {
          alert('The password and confirmed password aren\'t the same');
          return;
        }
        setUserSignup(true);
        navigate("/Home");
      }
    return (
        <div>
            <h1 className='sh' style={{display: 'inline-block', marginBlockStart:'0', marginTop:'2%'}}>GooseBook</h1>
            <p className='su'>Sign-up</p>
            <img src='../asset/lib1.png' className='li1' alt='library1' />
            <form onSubmit={handleSignup} className='signup' noValidate>
                <div className='info'>
                    <label className="nameS" htmlFor="name">Name:</label><br />
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className='info'>
                    <label className="nameS" htmlFor="surname">Surname:</label><br />
                    <input type="text" placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                </div>
                <div className='info'>
                    <label className="emailS" htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Email' pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='info'>
                    <label className="passwordS" htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className='info'>
                    <label className="passwordS" htmlFor="confirmed password">Confirmed password:</label><br />
                    <input type="password" placeholder='Confirmed Password' value={confirmedPass} onChange={(e) => setConfirmedPass(e.target.value)} required/>
                </div>
                <div className='back'>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: '#628E90'
                    }}>
                        <ArrowBackIcon fontSize='large' />
                    </Link>
                    <Link to='/Home' style={{
                        textDecoration: 'none',
                        marginLeft: '40%'
                    }}>
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
                            // marginTop: '3%',
                            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        }}>Sign up</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default Signup;