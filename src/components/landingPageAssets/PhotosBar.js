import React, { memo, useEffect, useState } from 'react';
import { CardMedia, Grid } from '@mui/material';
import { fetchAnzoAlternativesPhoto } from '../../utils/firebase';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { cardExpandActions } from '../../store/cardExpand-slice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";

const PhotosBar= (props) => {
    const [AlternativeAnzoPhotos,setAlternativeAnzoPhotos] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {

    const fetchImages =  async () => {
        setAlternativeAnzoPhotos(await fetchAnzoAlternativesPhoto())
    };
        fetchImages();
    },[]); 



    const photoClickHandler = (event) => {
        dispatch(cardExpandActions.closeCardExpand())
        props.updateMainPhoto({
            cardContent:event.target.alt,
            cardTital:event.target.title,
            imageUrl:event.target.src
        })
    
    }

    const handIconsClick = (event) =>{
        const AlternativeAnzoPhotosCopy = [...AlternativeAnzoPhotos]
        const arrayEndSplice = event.target.id === "left" ? 1 : AlternativeAnzoPhotosCopy.length-1
        AlternativeAnzoPhotosCopy.push.apply(AlternativeAnzoPhotosCopy, AlternativeAnzoPhotosCopy.splice(0,arrayEndSplice))
        setAlternativeAnzoPhotos(AlternativeAnzoPhotosCopy)
    }


    const anzoAllAlternativePics = AlternativeAnzoPhotos.map((item,index)=>{
        return<Grid key={index} item md={1.2} >
             <motion.div className="img-wrap" layout whileHover={{opacity:1}} key={index} >
            <CardMedia
        onClick={photoClickHandler}
        component="img"
        height="150"
        width="200"
        image={item.url}
        alt={item.content}
        title={item.title}
        key={index}/>
        </motion.div>
    </Grid>
   
    
    })


        
    return (
        <>
        
        <Grid container spacing={2} alignItems='center' justifyContent="center">
            <Grid item>
                <ArrowCircleLeftOutlinedIcon id="left" onClick={handIconsClick}/>
            </Grid>
            {anzoAllAlternativePics.slice(0,8)}
            <Grid item>
                <ArrowCircleRightOutlinedIcon id="right" onClick={handIconsClick}/>
                </Grid>
            </Grid>
        
        </>
    );
}

export default memo(PhotosBar);