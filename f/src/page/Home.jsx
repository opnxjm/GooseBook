import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import './Home.css';


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
                            size="large"
                            edge="end"
                            aria-label="setting"
                            sx={{ ml: '77%' }}
                        >
                            <SettingsIcon sx={{ fontSize: 30, marginLeft: 'auto', flexGrow: 0, color: '#FFF6E8' }} />
                        </IconButton>
                        {/* <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip> */}
                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    );
}

export default Home;
