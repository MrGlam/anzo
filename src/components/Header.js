import { AppBar, Grid, Typography } from '@mui/material';
import React from 'react';

const Header = () => {

    
    return (
        <Grid container spacing={10} direction='row'>
            <Grid item  md={12}>
                <AppBar align='center' >
                    <Typography variant="h3">
                        Welcome to Anzo Papi's life
                    </Typography>
                </AppBar> 
            </Grid>
            <Grid item  md={4}/>
        </Grid>
        
    );
};

export default Header;