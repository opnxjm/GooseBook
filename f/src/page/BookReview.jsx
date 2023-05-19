import React from 'react';
import { Grid, Typography, Box, Rating, Avatar } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNav from '../component/BottomNav';

function BookReview({ coverSrc, rating, overview }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar sx={{ backgroundColor: '#3C2317', width: '100%', marginBottom: '30px' }}>
        <Toolbar>
          <Link to="/Home" style={{ color: 'white' }}>
            <ArrowBackIcon fontSize="large" />
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="h5" sx={{
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
            }}>Book</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ flex: '1 0 auto' }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px' }}>
            <img src='../asset/NongGoose.PNG' alt="Book cover" style={{ width: '50%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ marginTop: '80px' }}>
          <Typography variant='h3' sx={{ color: '#3C2317', fontFamily: 'Montserrat' }}>Book</Typography>
          <Typography variant='h5' sx={{ color: '#3C2317', fontFamily: 'Montserrat' }}>Author</Typography>
          <Rating name="read-only" value={4} readOnly /><br />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: "#B4CDE6" }}>
            <Link to ="/BookOverView" style={{textDecoration:'none'}}>
            <p style={{
              padding: '15px',
              width: '250px',
              textAlign: 'center',
              color: '#3C2317',
              backgroundColor: 'white',
              borderRadius: '30px',
              border: 'solid #3C2317',
              marginRight: '10px'
            }}>Overview</p>
            </Link>
            <p style={{
              padding: '15px',
              width: '250px',
              textAlign: 'center',
              justifySelf: 'end',
              color: 'white',
              backgroundColor: '#3C2317',
              borderRadius: '30px',
              marginLeft: '10px',
            }}>Review</p>
          </Box><br />
          <Box sx={{ border: 'solid black' }}>
            <Typography variant='h6' sx={{
              justifyContent: 'left',
              ml: '7px',
              fontFamily: 'Montserrat',
              color: '#3C2317'
            }}>Review</Typography>
            <Grid item xs={12} sm={8}>
              <Rating name="read-only" value={4} readOnly size='large' sx={{ ml: '6px' }} /><br />
              <Box>
                <Avatar alt="Profile1" src="../asset/profile.JPG" sx={{ display: 'flex', justifyContent: 'left', ml: '6px' }} />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ flexShrink: 0 }}>
        <BottomNav />
      </Box>
    </Box>
  );
}

export default BookReview;
