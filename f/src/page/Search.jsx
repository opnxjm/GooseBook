import { AppBar, Box, Toolbar, Typography, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import BottomNav from "../component/BottomNav";

function Search() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ISBN, setISBN] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(title, author, ISBN);
        navigate("/NotFound");
    }
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
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ paddingRight: '2rem' }} />
                        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ paddingRight: '2rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <input type="text" placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} style={{ paddingRight: '2rem' }} />
                    </Box>
                </Box>
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
