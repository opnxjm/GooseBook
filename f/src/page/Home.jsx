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
import axios from 'axios';
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
    const [club, setClub] = useState([]);
    const { setUserDataValue, getUserDataValue } = useContext(MyContext)

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
            console.error('Error found in:', error);
        }
    };
    const getClub = async () => {
        try {
            const response = await axios.get("http://localhost:3008/club");
            if (response.data.success) {
                const club = response.data.club;
                setClub(club);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error('Error found in:', error);
        }
    };
    useEffect(() => {
        getTitle();
        getClub();
    })

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <img className='profile1' alt="Profile1" src="../asset/profile.JPG" style={{ borderRadius: '360px' }} />
            <h1 className='hi'>Hi, Welcome</h1>
            <p className='look'>Looking for something?</p>
            <Link to="/Search" style={{ textDecoration: 'none' }}>
                <p className='search' style={{ display: 'flex', justifyItems: 'center' }}>
                    <SearchIcon sx={{ mr: 1, fontSize: 17 }} />
                    Search something</p>
            </Link>
            <Box sx={{ backgroundColor: 'white', marginTop: '4%' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginLeft: '2%', color: '#3C2317', fontWeight: 'bold' }}>
                    Recommended book
                </Typography>
                <Grid container spacing={2} justifyContent="space-evenly">
                    {data.slice(0, 6).map((d) => {
                        return (
                            <Grid item xs={12} sm={6} md={1} key={d.book_id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Link to={`/book/${d.book_id}`} style={{ textDecoration: 'none' }}>
                                    <Cardja img={d.book_cover} title={d.title} />
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>

            </Box>
            <br />
            <Box sx={{ backgroundColor: 'white', marginTop: '1%', marginBottom: '2%' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginLeft: '2%', color: '#3C2317', fontWeight: 'bold' }}>
                    Club
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
  <Grid container spacing={2} justifyContent="space-evenly">
    {club.slice(0, 5).map((c) => {
      return (
        <Grid item xs={12} sm={6} md={2} key={c.club_id} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Cardja img={c.club_cover} title={c.club_name} key={Math.random()} />
        </Grid>
      );
    })}
  </Grid>
  {/* <Grid item xs={12} sm={6} md={2} sx={{ display: 'flex', flexDirection: 'row' }}> */}
    <Card sx={{ height: 250, width: 200, marginLeft: '20px', marginBottom: '20px', backgroundColor: 'white', marginRight: '20px', border: 'dashed 3px #B4CDE6' }}>
      <Link to='/AddClub' style={{ textDecoration: 'none' }}>
        <CardContent sx={{ alignContent: 'center' }} >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '45%', mr:'10px' }}>
            <AddIcon fontSize='large' sx={{ color: '#B4CDE6' }} />
          </Box>
          <Typography gutterBottom variant="h6" sx={{ fontFamily: 'Montserrat', color: '#B4CDE6', textAlign: 'center', fontWeight: 'bold' }} component="div">
            Add
          </Typography>
        </CardContent>
      </Link>
    </Card>
  {/* </Grid> */}
</Box>

            </Box>
            <BottomNav />
            {/* </Box> */}
        </ThemeProvider>
    );
}

export default Home;
