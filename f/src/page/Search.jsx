import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function Search(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    return(
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#3C2317', width: '100%'}}>
                <Toolbar>
                    <Link to="/Home" style={{color:'white'}}>
                        <ArrowBackIcon fontSize="large" />
                    </Link>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexGrow: 1}}>
                    <Typography variant="h5" sx={{
                        fontFamily:'Montserrat',
                        fontWeight:'bold',
                    }}>Search</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ position: 'relative' }}>
                <input type="text" placeholder="Title " value={title} onChange={(e) => setTitle(e.target.value)} style={{paddingRight: '2rem'}}></input>
                <SearchIcon sx={{ position: 'absolute', top: '50%', right: '0.5rem', transform: 'translateY(-50%)' }} />

            </Box>
        </Box>
    );
}
export default Search;
