import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import BottomNav from '../component/BottomNav';
import Navbar from '../component/Navbar';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Rammetto One',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function Home() {
    const navigate = useNavigate();
    const handleOpenProfile = (e) => {
        navigate("/Profile");
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <img className='profile1' alt="Profile1" src="../asset/profile.JPG" style={{ borderRadius: '360px' }} />
            <h1 className='hi'>Hi, Welcome</h1>
            <p className='look'>Looking for something?</p>
            <Link to="/Search" style={{ textDecoration: 'none' }}>
                <p className='search'><SearchIcon sx={{ mr: 1, fontSize: 17 }} />Search something</p>
            </Link>
            <Box sx={{ backgroundColor: 'white', marginTop: '4%' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginLeft: '2%', color: '#3C2317', fontWeight: 'bold' }}>
                    Recommended book
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%' }}>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6', }}>
                        <CardMedia
                            component="img"
                            alt="psycho"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/Psycho.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center' }} component="div">
                                The psychology of money
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="wonder"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/wonder.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '14px' }} component="div">
                                Wonder
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="good"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/good.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '19px' }} component="div">
                                Good Vibes, Good Life
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="heal"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/heal.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '17px' }} component="div">
                                Healing Is The New High
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="emo"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/emo.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '6px' }} component="div">
                                Emotional first aid
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6', marginRight: '20px' }}>
                        <CardMedia
                            component="img"
                            alt="365"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/365.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '15px' }} component="div">
                                365 Days Of Wonder
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <br />
            <Box sx={{ backgroundColor: 'white', marginTop: '1%', marginBottom: '2%' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginLeft: '2%', color: '#3C2317', fontWeight: 'bold' }}>
                    Club
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%' }}>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6', }}>
                        <CardMedia
                            component="img"
                            alt="psycho"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/Psycho.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center' }} component="div">
                                The psychology of money
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="wonder"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/wonder.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '14px' }} component="div">
                                Wonder
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="good"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/good.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '19px' }} component="div">
                                Good Vibes, Good Life
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="heal"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/heal.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '17px' }} component="div">
                                Healing Is The New High
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
                        <CardMedia
                            component="img"
                            alt="emo"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/emo.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center' }} component="div">
                                Emotional first aid
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: 'white', marginRight: '20px', border: 'dashed 3px #B4CDE6' }}>
                        <Link to='/AddClub' style={{ textDecoration: 'none' }}>
                            {/* <CardMedia
                            component="img"
                            alt="self"
                            sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                            style={{ width: '50%', height: 'auto' }}
                            image="../asset/self.jpeg"
                        /> */}
                            <CardContent sx={{ alignContent: 'center' }} >
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '45%' }}>
                                    <AddIcon fontSize='large' sx={{ color: '#B4CDE6' }} />
                                </Box>
                                <Typography gutterBottom variant="h6" sx={{ fontFamily: 'Montserrat', color: '#B4CDE6', textAlign: 'center', fontWeight: 'bold' }} component="div">
                                    Add
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </Box>
            </Box>
            <BottomNav />
            {/* </Box> */}
        </ThemeProvider>
    );
}

export default Home;
