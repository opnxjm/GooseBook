import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import BottomNav from '../component/BottomNav';
import getCookie from '../util/getCookie';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Profile() {
    // const { setUserDataValue, getUserDataValue} = useContext(MyContext)
    //const user = getUserDataValue();
    const [userData, setUserData] = useState([]);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const navigate = useNavigate();
    const handleClick = (destination) => {
        if (destination === "/") {
            // Clear all cookies
            document.cookie.split(";").forEach((c) => {
                document.cookie = c
                    .replace(/^ +/, "")
                    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
            });
        }
        navigate(destination);
    };

    const handleOpenLogoutModal = () => {
        setLogoutModalOpen(true);
    };

    const handleCloseLogoutModal = () => {
        setLogoutModalOpen(false);
    };

    const fetchUser = async (e) => {
        try {
            const response = await axios.get(
                `http://localhost:3008/getUser/${getCookie("userId")}`
            );
            console.log(getCookie("user_id"));
            if (response.data.success) {
                setUserData(response.data.user[0]);
                console.log("Debug => " + response.data.user[0]);
                console.log(userData);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            // Handle network or server error
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);


    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Box position="relative">
                        <Box component="img" src="../asset/bg.JPG" height="300px" width="100%" />
                        <Box position="absolute" top="20px" left="20px">
                            <Link to='/Home' style={{ textDecoration: 'none', color: '#3C2317' }}>
                                <ArrowBackIcon fontSize='large' />
                            </Link>
                        </Box>
                        <Box component="img" className='profile1' alt="Profile1" src="../asset/NongGoose.png"
                            style={{ width: '30vw', maxWidth: '200px', borderRadius: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%)' }} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" mr="50px">
                        <button onClick={handleOpenLogoutModal} style={{
                            backgroundColor: 'white',
                            fontFamily: 'Montserrat',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            width: '9vw',
                            height: '4vh',
                            lineHeight: '35px',
                            color: '#628E90',
                            border: 'solid #628E90',
                            borderRadius: '20px'
                        }}>Log out</button>
                    </Box>
                    <Dialog open={logoutModalOpen} onClose={handleCloseLogoutModal}>
                        <DialogTitle sx={{ fontFamily: "Montserrat", fontWeight: "800" }}>
                            Do you want to logout ?
                        </DialogTitle>
                        <DialogActions>
                            <div>
                                <button
                                    style={{
                                        backgroundColor: 'white',
                                        fontFamily: 'Montserrat',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        width: '9vw',
                                        height: '4vh',
                                        lineHeight: '35px',
                                        color: '#628E90',
                                        border: 'solid #628E90',
                                        borderRadius: '20px'
                                    }}
                                    onClick={handleCloseLogoutModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    style={{
                                        marginLeft: "50px",
                                        backgroundColor: '#628E90',
                                        fontFamily: 'Montserrat',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        width: '9vw',
                                        height: '4vh',
                                        lineHeight: '35px',
                                        color: 'white',
                                        border: 'solid #628E90',
                                        borderRadius: '20px'
                                    }}
                                    onClick={() => handleClick("/")}
                                >
                                    Logout
                                </button>
                            </div>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Grid item xs={12}>
                    <Box my="10px" textAlign="center">
                        <Typography variant='h6' sx={{ fontFamily: 'Montserrat', color: '#3C2317', fontWeight: 'bold', marginTop: '4vh' }}>
                            @{userData.username}
                        </Typography>
                        <Typography variant='h6' sx={{ fontFamily: 'Montserrat', color: '#3C2317', fontWeight: 'bold' }}>
                            {userData.name}
                        </Typography>
                        <Typography variant='h6' sx={{ fontFamily: 'Montserrat', color: '#3C2317' }}>
                            {userData.bio}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: "#B4CDE6", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}></Grid>
            </Grid>
            <Box sx={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
                <BottomNav />
            </Box>
        </Box>
    );
}

export default Profile;
