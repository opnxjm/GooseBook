import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import BottomNav from "../component/BottomNav";
import Cardja from "../component/Cardja";
import axios from "axios";

function NotFound() {
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [book, setBook] = useState(location.state?.book || null);  
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3008/search?title=${title}`);
            if (response.data.success) {
                setBook(response.data.book);
            } else {
                navigate('/Notfound');
            }
        } catch (error) {
            console.error('Error searching book:', error);
            navigate('/Notfound');
        }
    }

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#3C2317', width: '100%', marginBottom: '30px' }}>
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
            {book
                ? <Cardja title={book.title} img={book.book_cover} />  
                : (
                    <Box sx={{
                        width: '100%',
                        backgroundColor: '#628E90',
                        marginTop: '60px',
                    }}>
                        <Box sx={{ display: 'inline-flex', justifyContent: 'space-evenly', justifySelf: 'center' }}>
                            <img src="../asset/Goose.png" alt='Not found' style={{
                                display: { xs: 'none' },
                                width: '30%',
                            }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', justifySelf: 'center' }}>
                                <Typography variant='h4' sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold',
                                    marginRight: '5px',
                                    alignSelf: 'center'
                                }}>Not found</Typography>
                                <Typography variant='h6' sx={{
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    marginRight: '5px',
                                    alignSelf: 'center'
                                }}>Sorry for your inconvenience</Typography>
                            </Box>
                        </Box>
                    </Box>
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

export default NotFound;
