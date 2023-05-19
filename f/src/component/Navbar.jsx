import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
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
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ color: '#FFF6E8', margin: '1%' }}>
                        GooseBook
                    </Typography>
                    <IconButton
                        title='Open setting'
                        size="large"
                        edge="end"
                        aria-label="setting"
                        sx={{ ml: '77%' }}
                    >
                        <SettingsIcon sx={{ fontSize: 30, marginLeft: 'auto', flexGrow: 0, color: '#FFF6E8' }} />
                    </IconButton>
                    <Tooltip title="Open profile">
                        <IconButton onClick={handleOpenProfile} sx={{ p: 0 }}>
                            <Avatar alt="Profile1" src="../asset/profile.JPG" sx={{ ml: '79%' }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;