import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Cardja({img, title}) {
    return (
        <Card sx={{ height: 'auto', width: '15%', marginLeft: '20px', marginBottom: '20px', backgroundColor: '#B4CDE6' }}>
            <CardMedia
                component="img"
                alt="heal"
                sx={{ display: 'flex', justifyContent: 'center', marginLeft: '25%', marginTop: '10px' }}
                style={{ width: '50%', height: 'auto' }}
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h7" sx={{ fontFamily: 'Montserrat', color: '#3C2317', textAlign: 'center', marginTop: '17px' }} component="div">
                   {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cardja