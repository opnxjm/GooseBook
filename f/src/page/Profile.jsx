import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import BottomNav from '../component/BottomNav';

function Profile({ email }) {
    //     const [user, setUser] = useState(null);

    //     useEffect(() => {
    //         console.log(email);
    //         Axios.get(`http://localhost:3008/user/${email}`).then((response) => {
    //     setUser(response.data);
    //   });
    // }, [email]);
    return (
        <Box>
            <div style={{ position: 'relative' }}>
                <img src="../asset/bg.JPG" style={{ height: '300px', width: '100%' }} />
                <Link to='/Home' style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    textDecoration: 'none',
                    color: '#3C2317',
                }}>
                    <ArrowBackIcon fontSize='large' />
                </Link>
                <img className='profile1' alt="Profile1" src="../asset/profile.JPG" style={{
                    borderRadius: '360px',
                    position: 'absolute',
                    top: '40%',
                    left: '42%',
                    transform: 'translateX(-50%)'
                }} />

            </div>
            <div style={{display:'flex', justifyContent:'right', marginRight:'50px'}}>
                <p style={{
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    width: '150px',
                    height: '35px',
                    textAlign: 'center',
                    color: '#628E90',
                    display: 'flex',
                    border: 'solid #628E90',
                    alignItems: 'center',
                    borderRadius:'20px'
                }}>Edit Profile</p>
            </div>
            <Box sx={{ marginBottom: '10px' }}>
                {/* {user && ( */}
                <Typography variant='h6' sx={{
                    fontFamily: 'Montserrat',
                    color: '#3C2317',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: '30px'
                }}>
                    @wanttosleep
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: 'Montserrat',
                    color: '#3C2317',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    tn
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: 'Montserrat',
                    color: '#3C2317',
                    textAlign: 'center',
                }}>
                    choose sleep ter
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: "#B4CDE6", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <p style={{
                    padding: '15px',
                    width: '250px',
                    textAlign: 'center',
                    justifySelf: 'end',
                    color: 'white',
                    backgroundColor: '#3C2317',
                    borderRadius: '30px'
                }}>finished</p>
                <Link to="/ProfileRead" style={{ textDecoration: 'none' }}>
                    <p style={{
                        padding: '14px',
                        width: '250px',
                        textAlign: 'center',
                        color: '#3C2317',
                        border: 'solid #3C2317',
                        backgroundColor: 'white',
                        borderRadius: '30px'
                    }}>reading</p>
                </Link>
                <Link to="/ProfileWant" style={{ textDecoration: 'none' }}>
                    <p style={{
                        padding: '15px',
                        width: '250px',
                        textAlign: 'center',
                        color: '#3C2317',
                        border: 'solid #3C2317',
                        backgroundColor: 'white',
                        borderRadius: '30px'
                    }}>want to read</p>
                </Link>
            </Box>
            <br /> <br /> <br />
            <BottomNav />
        </Box>
    );
}

export default Profile;
