import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { CalendarMonth, Today } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
export default function BottomNav() {
    const [value, setValue] = React.useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            sx={{
                width: "100%",
                height: "241px",
                backgroundColor: '#3C2317',
                paddingLeft: '0px',
                display: 'flex',
                justifyContent: 'flex-start',
                '& img': {
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                    borderRadius: 0,
                    width: '600px',
                    height: '241px',
                    marginLeft: '0px',
                    marginRight: '0px',
                    alignItems: 'left',
                    justifyItems: 'left'
                }
            }}
            value={value}
            onChange={handleChange}
        >
            <img src="../asset/lib2.png" alt="lib2"></img>
            {/* <BottomNavigationAction style={{marginLeft:'10px'}}
                label="twitter"
                icon={<TwitterIcon fontSize="large" style={{color:'#B4CDE6', marginInlineStart:'10px'}}/>}
                
            /> */}
            <Box sx={{display:'flex', flexDirection:'row', marginTop:'3%', marginLeft:'10%'}}>
            <Box sx={{ display: 'flex', flexDirection:'column', marginLeft: '10%', marginTop: '10%' }}>
                <Typography variant="h6"
                    sx={{
                        fontFamily: "Montserrat",
                        marginLeft: "10%",
                        color: '#FFF6E8',
                        alignItems: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Contact
                </Typography>
                <Link to="https://twitter.com" style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10%",
                    textDecoration: 'none',
                }}>
                    <div
                        className="tw"
                        style={{ display: "flex", alignItems: "center", marginLeft: "10%" }}
                    >
                        <TwitterIcon fontSize="large" style={{ color: "#B4CDE6" }} />
                        <Typography
                            variant="h7"
                            sx={{ fontFamily: "Montserrat", marginLeft: "10px", color: '#FFF6E8' }}
                        >
                            Twitter
                        </Typography>
                    </div>
                </Link>
                <Link to="https://facebook.com" style={{
                    display: "flex",
                    marginLeft: "10%",
                    textDecoration: 'none',
                }}>
                    <div
                        className="fc"
                        style={{ display: "flex", alignItems: "center", marginLeft: "10%" }}
                    >
                        <FacebookIcon fontSize="large" style={{ color: "#B4CDE6" }} />
                        <Typography
                            variant="h7"
                            sx={{
                                fontFamily: "Montserrat",
                                marginLeft: "10px",
                                color: '#FFF6E8',
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Facebook
                        </Typography>
                    </div>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'column', marginLeft: '65%', marginTop:'10%' }}>
                <Typography
                    variant="h6"
                    sx={{ fontFamily: "Montserrat", marginLeft: "10px", color: '#FFF6E8', fontWeight: 'bold', marginBottom:'5px' }}
                >
                    Add
                </Typography>
                <Link to="/AddClub" style={{
                    alignItems: "center",
                    marginLeft: "10%",
                    textDecoration: 'none',
                }}>
                    <div className="ab">
                        <Typography
                            variant="h7"
                            sx={{ fontFamily: "Montserrat", color: '#FFF6E8', whiteSpace: 'nowrap' }}
                        >
                            Add a club
                        </Typography>
                    </div>
                </Link>
            </Box>
            </Box>
        </BottomNavigation>
    );
}