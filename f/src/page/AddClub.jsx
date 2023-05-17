import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, Typography, Box } from '@mui/material';
import BottomNav from '../component/BottomNav';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AddClub() {
    const [clubName, setClubName] = useState('');
    const [clubInfo, setClubInfo] = useState('');

    const handleClubNameChange = (event) => {
        setClubName(event.target.value);
    };

    const handleClubInfoChange = (event) => {
        setClubInfo(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform actions with clubName and clubInfo, such as saving to a database
        
        setClubName('');
        setClubInfo('');
    };

    return (
        <Grid container>
            <AppBar position="static" sx={{ backgroundColor: '#3C2317', width: '100%', marginBottom: '30px' }}>
                <Toolbar>
                    <Link to="/Home" style={{ color: 'white' }}>
                        <ArrowBackIcon fontSize="large" />
                    </Link>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                        <Typography variant="h5" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                        }}>Add a club</Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ padding: '30px', backgroundColor: '#F9F6F0' }}>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{ height: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                                <img src="../asset/NongGoose.PNG" alt="Club cover" style={{ width: '100%' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <textarea
                                rows={2}
                                style={{ width: '100%', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}
                                placeholder="Enter club name"
                                value={clubName}
                                onChange={handleClubNameChange}
                            ></textarea>
                            <textarea
                                rows={12}
                                style={{ width: '100%', borderRadius: '5px', padding: '10px' }}
                                placeholder="Enter club information"
                                value={clubInfo}
                                onChange={handleClubInfoChange}
                            ></textarea>
                        </Grid>
                    </Grid>
                    <button className='Signup-button' type="submit" style={{
                        backgroundColor: 'white',
                        borderRadius: '50px',
                        height: '47px',
                        width: '147px',
                        border: '2px solid #628E90',
                        fontFamily: 'Montserrat',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#628E90',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    }}>
                        Add</button>

                </form>
            </Box>

            <Box sx={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%'
            }}>
                <BottomNav />
            </Box>
        </Grid>
    );
}

export default AddClub;
