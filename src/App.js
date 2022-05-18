import { useEffect, useState } from 'react';
import './App.css';
import ActionAreaCard from './components/ActionAreaCard';
import Header from './components/Header';




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
      console.log(anzoMainPhoto)
    }

    
    
    fetchAnzoMainPhoto()
  },[])


  

  

  

  
  return (
    <>
    <Header></Header>
    <ActionAreaCard 
    imageUrl={anzoMainPhoto.imageUrl }
    imageAlt='Anzo Papichulo' 
    cardTital={anzoMainPhoto.cardTital }
    cardContent={anzoMainPhoto.cardContent }></ActionAreaCard>
    
    </>
  );
}

export default App;
