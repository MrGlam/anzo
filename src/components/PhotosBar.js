import React, { memo, useEffect, useState } from 'react';
import { getStorage, ref ,listAll,getDownloadURL} from "firebase/storage";
import '../utils/firebase'
import { CardMedia, Container, Grid } from '@mui/material';


const PhotosBar= (props) => {
    const [photosUrl,setPhotosUrl] = useState([])
    
    const storage = getStorage()
    const imagesRef = ref(storage,'anzoPapiPics');


    var anzoPhotosUrls = []
    useEffect(() => {

    const fetchImages =  async () => {
        
        const response=await listAll(imagesRef)
        for (const photo of response.items){
            anzoPhotosUrls.push(await getDownloadURL(photo))}
        
        setPhotosUrl(anzoPhotosUrls)
    };

        fetchImages();
    },[]); 



    const photoClickHandler = (event) => {
        props.updateMainPhoto({
            cardContent:"",
            cardTital:"",
            imageUrl:event.target.src
        })
        console.log(event.target.src)
    
    }

        
    return (
        <Container>
        <Grid container spacing={2}>
        {photosUrl.map((item,index)=>{
            return <Grid key={index} item md={1.5} ><CardMedia
            onClick={photoClickHandler}
            component="img"
            height="150"
            width="200"
            image={item}
            alt={index}
            key={index}/></Grid>
        })}
        </Grid></Container>
    );
}

export default memo(PhotosBar);