import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';


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
            <div>
                <AppBar position="static" sx={{ backgroundColor: '#3C2317' }}>
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ color: '#FFF6E8', margin: '1%' }}>
                            GooseBook
                        </Typography>
                        <IconButton
                            title='Open setting'
                            size="large"
                            edge="end"
                            aria-label="setting"
                            sx={{ ml: '77%' }}
                        >
                            <SettingsIcon sx={{ fontSize: 30, marginLeft: 'auto', flexGrow: 0, color: '#FFF6E8' }} />
                        </IconButton>
                        <Tooltip title="Open profile">
                            <IconButton onClick={handleOpenProfile} sx={{ p: 0 }}>
                                <Avatar alt="Profile1" src="../asset/profile.JPG" sx={{ ml: '79%' }} />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                <img className='profile1' alt="Profile1" src="../asset/profile.JPG" />
                <h1 className='hi'>Hi, Welcome</h1>
                <p className='look'>Looking for something?</p>
                <p className='search'><SearchIcon sx={{ mr: 1, fontSize: 17 }} />Search something</p>
                {/* <input 
                    className='search' 
                    type="text" placeholder={<><SearchIcon sx={{ mr: 1 }} /> Search something</>} 
                    style={{height: '45px'}}></input> */}
                <Box sx={{backgroundColor: 'white', marginTop:'4%'}}>
                    <Typography variant="h5" sx={{fontFamily: 'Montserrat', marginLeft:'2%', color:'#3C2317'}}>Recommended book</Typography>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default Home;
