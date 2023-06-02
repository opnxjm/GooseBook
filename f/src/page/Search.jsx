import { AppBar, Box, Toolbar, Typography, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNav from "../component/BottomNav";
import axios from 'axios';
import Cardja from "../component/Cardja";

function Search() {
    const [title, setTitle] = useState('');
    const [bookData, setBookData] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3008/search?title=${title}`);
            if (response.data.success) {
                setBookData(response.data.book);
            } else {
                navigate('/Notfound');
            }
        } catch (error) {
            console.error('Error searching book:', error);
            navigate('/Notfound');
        }
    };

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#3C2317', marginBottom: '30px' }}>
                <Toolbar>
                    <Link to="/Home" style={{ color: 'white' }}>
                        <ArrowBackIcon fontSize="large" />
                    </Link>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                        <Typography variant="h5" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                        }}>Search</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <form onSubmit={handleSearch}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', mt:'5vh'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ paddingRight: '2rem', width:'60vw' }} />
                    </Box>
                </Box>
                <br/>
                <input type="submit" value='submit' style={{
                    backgroundColor: '#628E90',
                    borderRadius: '50px',
                    height: '52px',
                    width: '147px',
                    border: '2px solid #628E90',
                    fontFamily: 'Montserrat',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#FFF6E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                }} />
            </form>

            {bookData && (
                <Cardja
                    title={bookData.title}
                    img={bookData.book_cover}
                />
            )}

            <Box sx={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%'
            }}>
                <BottomNav />
            </Box>
        </Box>
    );
}

export default Search;
