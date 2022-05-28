import React, { memo, useEffect, useState } from 'react';
import { CardMedia, Container, Grid } from '@mui/material';
import { fetchAnzoAlternativesPhoto } from '../utils/firebase';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const PhotosBar= (props) => {
    const [AlternativeAnzoPhotos,setAlternativeAnzoPhotos] = useState([])
    const [startEndArrayIndex,setStartEndArrayIndex] = useState({start:0,end:8})
    


    useEffect(() => {

    const fetchImages =  async () => {
        setAlternativeAnzoPhotos(await fetchAnzoAlternativesPhoto())
    };
        fetchImages();
    },[]); 



    const photoClickHandler = (event) => {
        props.updateMainPhoto({
            cardContent:event.target.alt,
            cardTital:event.target.title,
            imageUrl:event.target.src
        })
    
    }

    const handleftIconClick = () =>{
        const AlternativeAnzoPhotosCopy = [...AlternativeAnzoPhotos]
        AlternativeAnzoPhotosCopy.push.apply(AlternativeAnzoPhotosCopy, AlternativeAnzoPhotosCopy.splice(0,1))
        setAlternativeAnzoPhotos(AlternativeAnzoPhotosCopy)
        
    
    }

    const handleRightIconClick = () =>{
        const AlternativeAnzoPhotosCopy = [...AlternativeAnzoPhotos]
        AlternativeAnzoPhotosCopy.push.apply(AlternativeAnzoPhotosCopy, AlternativeAnzoPhotosCopy.splice(0,AlternativeAnzoPhotosCopy.length-1))
        setAlternativeAnzoPhotos(AlternativeAnzoPhotosCopy)
        
    }

        
    return (
        <>
        
        <Grid container spacing={2} alignItems='center' justifyContent="center">
            <Grid item>
                <ArrowCircleLeftOutlinedIcon onClick={handleftIconClick}/>
            </Grid>
            {AlternativeAnzoPhotos.slice(startEndArrayIndex.start,startEndArrayIndex.end).map((item,index)=>{
                return <Grid key={index} item md={1.2} ><CardMedia
                onClick={photoClickHandler}
                component="img"
                height="150"
                width="200"
                image={item.url}
                alt={item.content}
                title={item.title}
            
                key={index}/></Grid>
            })}
            <Grid item><ArrowCircleRightOutlinedIcon onClick={handleRightIconClick}/></Grid>
            </Grid>
        
        </>
    );
}

export default memo(PhotosBar);