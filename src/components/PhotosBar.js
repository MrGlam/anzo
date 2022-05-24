import React, { memo, useEffect, useState } from 'react';
import { getStorage, ref ,listAll,getDownloadURL} from "firebase/storage";
import '../utils/firebase'
import { CardMedia, Grid } from '@mui/material';
import { Preview } from '@mui/icons-material';


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
        console.log(event.target.src)
        props.changeMainPhoto({
            cardContent:"aa",
            cardTital:"aa",
            imageUrl:"a"
        })
    }

        
    return (
        <Grid container>
        {photosUrl.map((item,index)=>{
            return <Grid key={index} item md={2}><CardMedia
            onClick={photoClickHandler}
            component="img"
            height="250"
            image={item}
            alt={index}
            key={index}/></Grid>
        })}
        </Grid>
    );
}

export default memo(PhotosBar);