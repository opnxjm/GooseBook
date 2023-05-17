import React from 'react';
import { Grid, Typography, Box, Rating } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNav from '../component/BottomNav';

function BookOverview({ coverSrc, rating, overview }) {
  return (
    <Grid container spacing={2}>
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

      <Grid item xs={12} sm={4}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'80px' }}>
          <img src='../asset/NongGoose.PNG' alt="Book cover" style={{ width: '50%' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} sx={{marginTop:'80px'}}>
        <Typography variant='h3' sx={{color:'#3C2317', fontFamily:'Montserrat'}}>Book</Typography>
        <Typography variant='h5' sx={{color:'#3C2317', fontFamily:'Montserrat'}}>Author</Typography>
        <Rating name="read-only" value={4} readOnly /><br/>
        <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-around', backgroundColor:"#B4CDE6"}}>
        <p style={{
                    padding: '15px',
                    width: '250px',
                    textAlign: 'center',
                    justifySelf: 'end',
                    color: 'white',
                    backgroundColor: '#3C2317',
                    borderRadius: '30px',
                    marginRight: '10px',
                }}>overview</p>
        <p style={{
                    padding:'15px',
                    width:'250px',
                    textAlign:'center',
                    color:'#3C2317',
                    backgroundColor:'white',
                    borderRadius:'30px',
                    border:'solid #3C2317',
                    marginLeft: '10px'
                }}>review</p>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
            <p style={{
                 padding:'15px',
                 width:'250px',
                 textAlign:'center',
                 color:'#3C2317',
                 backgroundColor:'white',
                 borderRadius:'15px',
                 border:'solid #3C2317',
                 marginLeft: '10px'
            }}>Published year<br/> 2020</p>
            <p style={{
                 padding:'15px',
                 width:'250px',
                 textAlign:'center',
                 color:'#3C2317',
                 backgroundColor:'white',
                 borderRadius:'15px',
                 border:'solid #3C2317',
                 marginLeft: '10px'
            }}>Publisher<br/> fewdvd</p>
        
            <p style={{
                 padding:'15px',
                 width:'250px',
                 textAlign:'center',
                 color:'#3C2317',
                 backgroundColor:'white',
                 borderRadius:'15px',
                 border:'solid #3C2317',
                 marginLeft: '10px'
            }}>Languge<br/> EN</p>
        </Box>
        <Typography variant="body1">{overview}</Typography>
      </Grid>
      <BottomNav />
    </Grid>
  );
}

export default BookOverview;
