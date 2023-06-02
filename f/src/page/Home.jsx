import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import BottomNav from '../component/BottomNav';
import Navbar from '../component/Navbar';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Cardja from '../component/Cardja';
import axios, { AxiosError } from 'axios';
import { useContext } from 'react';
import { MyContext } from '../service/globalContext';
import Grid from '@mui/material/Grid';


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

function Home({ userLoggedIn, userSignup }) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const getTitle = async () => {
        try {
            const response = await axios.get("http://localhost:3008/title");

            if (response.data.success) {
                const book = response.data.book;
                setData(book);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverResponse = error.response;
                if (serverResponse) {
                    console.log(`Server responded with status code ${serverResponse.status}`);
                    console.log(`Response body: ${JSON.stringify(serverResponse.data, null, 2)}`);
                } else {
                    console.log(`No response received from server: ${error.message}`);
                }
            } else {
                console.error('Error found in:', error);
            }
        }

    };

    useEffect(() => {
        getTitle();

    })

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4%', marginLeft: '5vw' }}>
                        <img className='Goose' alt="Goose" src="../asset/NongGoose.png" style={{ borderRadius: '50%', width: '100%', maxWidth: '200px' }} />
                        <Box sx={{ ml: '5vw' }}>
                            <h1 className='hi'>Hi, Welcome</h1>
                            <p className='look'>Looking for something?</p>
                            <Link to="/Search" style={{ textDecoration: 'none' }}>
                                <p className='search' style={{ display: 'flex', alignItems: 'center' }}>
                                    <SearchIcon sx={{ mr: 1, fontSize: 17 }} />
                                    Search something
                                </p>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ backgroundColor: 'white', marginTop: '4%' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginLeft: '2%', color: '#3C2317', fontWeight: 'bold' }}>
                    Recommended book
                </Typography>
                <Grid container spacing={2} justifyContent="space-evenly">
                    {data.slice(0, 6).map((d) => {
                        return (
                            <Grid item xs={12} sm={6} md={2} lg={1} key={d.book_id} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to={`/book/${d.book_id}`} style={{ textDecoration: 'none' }}>
                                    <Cardja img={d.book_cover} title={d.title} />
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <br />
            <Box sx={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%'
            }}>
                <BottomNav />
            </Box>
        </ThemeProvider>
    );
}

export default Home;
