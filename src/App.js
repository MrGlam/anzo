import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import ActionAreaCard from './components/ActionAreaCard';
import Header from './components/Header';
import PhotosBar from './components/PhotosBar';




function App() {
  const[anzoMainPhoto,setAnzoMainPhoto] = useState({})


  
  useEffect(()=>{
    const fetchAnzoMainPhoto =async () => {
      const response=await fetch('https://my-first-project-7a53e-default-rtdb.firebaseio.com/anzoMainPhoto.json').then()
      const responseData = await response.json()
      const anzoMainPhoto = {
        cardContent:responseData.cardContent,
        cardTital:responseData.cardTital,
        imageUrl:responseData.imageUrl
      }

      setAnzoMainPhoto(anzoMainPhoto)
    }
    fetchAnzoMainPhoto()
  },[])


  
  return (
    <>
    <Grid container alignContent='center' direction="column" spacing={10}>
      <Grid item md={12}>
        <Header></Header>
      </Grid>
      <Grid item align='center'>Click me mate</Grid>
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
