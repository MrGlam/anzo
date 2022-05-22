import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase'

import { CardMedia } from '@mui/material';

const PhotosBar= (props) => {
    const [files,setFiles] = useState([])
    
    // var storageRef = firebase.storage().ref("images");
    
    // useEffect(() => {
    //     const fetchImages = async () => {
    
    //     let result = await storageRef.child('images').listAll();
    //         let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
        
    //         return Promise.all(urlPromises);
    
    //     }
        
    //     const loadImages = async () => {
    //         const urls = await fetchImages();
    //         setFiles(urls);
    //     }
    //     loadImages();
    //     }, []);






    const cardClickHandler = () => {
        console.log("")
    } 


    return (
        <>
        <CardMedia
            onClick={cardClickHandler}
            component="img"
            height="250"
            image={"https://firebasestorage.googleapis.com/v0/b/my-first-project-7a53e.appspot.com/o/WhatsApp%20Image%202022-01-21%20at%2018.45.43%20(1).jpeg?alt=media&token=c2d82b27-f8e0-4827-b73b-adcec1f7cf92"}
            alt={"a"}
          />
            
        </>
    );
}

export default PhotosBar;