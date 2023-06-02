import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@mui/material';

function Navbar() {
    const navigate = useNavigate();
    const handleOpenProfile = () => {
        navigate("/Profile");
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#3C2317', width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h4" component="div" sx={{ color: '#FFF6E8', margin: '1%' }}>
                        GooseBook
                    </Typography>
                    <Tooltip title="Open profile">
                        <IconButton onClick={handleOpenProfile} sx={{ p: 0, color:'#FFF6E8' }}>
                            <AccountCircleIcon fontSize='large' />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;