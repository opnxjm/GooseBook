import './SignUp.css';
import { useState, useContext, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Axios from "axios";
import { MyContext } from '../service/globalContext';

function Signup({ setUserSignup }) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPass, setConfirmedPass] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();
    const { setUserDataValue, getUserDataValue } = useContext(MyContext);
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    //const latestUserId = 0;
    // const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState(0);
    const [name2,setName2]=useState("");
    const addUser = async () => {
        // const response = Axios.get('http://localhost:3008/latestUserId');
        // latestUserId = response.data.latestUserId;
        const response = await Axios.post("http://localhost:3008/create", {
            name: name,
            surname: surname,
            email: email,
            pass: password,
          });
         const res2 = await Axios.get("http://localhost:3008/getUser/" + response.data.userId)
         const userData = res2.data.user[0];

          console.log(userData.user_id);
          console.log(userData.name);
          console.log(userData.email);
         setUserDataValue({
            userId: userData.user_id,
            username: null,
            name: userData.name,
            bio: null,
            profile_pic: null,
            email: userData.email
        })

    };


    // const getUser = async () => {
    //     await Axios.get("http://localhost:3008/getUser/" + userId).then((res) => {
    //         setUserDataValue({
    //             userId: res.data.user.userId,
    //             username: null,
    //             name: res.data.user.name,
    //             bio: null,
    //             profile_pic: null,
    //             email: res.data.user.email
    //         })
    //     })
    
    // }
    const handleSignup = (e) => {
        e.preventDefault()
        if (password === confirmedPass && name != '' && surname != '' && email != '') {
            addUser();
            // console.log(userId);
            setUserSignup(true);
            // getUser()
            navigate("/Home");
        }
        else if (password !== confirmedPass) {
            alert('The password and confirmed password aren\'t the same');
        }
        else {
            alert('Please provide all required information.');
        }
    }
    return (
        <div className='signup-container'>
            <h1 className='sh' style={{ display: 'inline-block', marginBlockStart: '0', marginTop: '2%' }}>GooseBook</h1>
            {/* <p className='su'  style={{display: {xs:'none', md:'none'}}}>Sign-up</p> */}
            {!matchesXS && <p className='su' style={{ display: matchesMD ? 'none' : 'inline-block' }}>Sign-up</p>}
            {!matchesMD && <img src='../asset/lib1.png' className='li1' alt='library1' style={{ display: matchesXS ? 'none' : 'block' }} />}
            <form onSubmit={handleSignup} className='signup'>
                <div className='info'>
                    <label className="nameS" hemlFor="name">Name:</label><br />
                    <input type="text" required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='info'>
                    <label className="nameS" htmlFor="surname">Surname:</label><br />
                    <input type="text" placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)} required />
                </div>
                <div className='info'>
                    <label className="emailS" htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Email' pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='info'>
                    <label className="passwordS" htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='info'>
                    <label className="passwordS" htmlFor="confirmed password">Confirmed password:</label><br />
                    <input type="password" placeholder='Confirmed Password' value={confirmedPass} onChange={(e) => setConfirmedPass(e.target.value)} required />
                </div>
                <div className='back'>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: '#628E90'
                    }}>
                        <ArrowBackIcon fontSize='large' />
                    </Link>
                    <input type="submit" style={{
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
                    }} value="Sign up" />
                </div>
            </form>
        </div>
    );
}
export default Signup;