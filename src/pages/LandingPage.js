import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import PhotosBar from '../components/PhotosBar'
import {fetchAnzoMainPhoto} from '../utils/firebase'
import ActionAreaCard from '../components/ActionAreaCard';

const LandingPage = () => {
    const[anzoMainPhoto,setAnzoMainPhoto] = useState({})

    useEffect(()=>{
        const getAnzoMainPic = async () =>{
        setAnzoMainPhoto(await fetchAnzoMainPhoto())
        }
        getAnzoMainPic()
        
    },[])

    return (
        <>
        <Grid container alignContent='center' direction="column" spacing={12}>
            <Grid item md={4} />
            <Grid item align='center'>
                <Typography variant='h5'>Click me mate</Typography> 
            </Grid>
            <Grid item md={4} >
                <ActionAreaCard
                imageUrl={anzoMainPhoto.imageUrl}
                imageAlt='Anzo Papichulo' 
                cardTital={anzoMainPhoto.cardTital }
                cardContent={anzoMainPhoto.cardContent }/>
            </Grid>
            <Grid item md={4} />
        </Grid>
        <PhotosBar updateMainPhoto={setAnzoMainPhoto}></PhotosBar>
        </>
    );
};

export default LandingPage;