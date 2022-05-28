import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import ActionAreaCard from './components/ActionAreaCard';
import Header from './components/Header';
import PhotosBar from './components/PhotosBar';
import {fetchAnzoMainPhoto} from './utils/firebase'




function App() {
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
      <Grid item md={12}>
        <Header></Header>
      </Grid>
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
}

export default App;
