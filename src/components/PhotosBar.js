import React, { useEffect, useState } from 'react';
import { getStorage, ref ,listAll,getDownloadURL} from "firebase/storage";
import '../utils/firebase'
import { CardMedia } from '@mui/material';


const PhotosBar= (props) => {
    const [files,setFiles] = useState([])
    
    const storage = getStorage()
    const imagesRef = ref(storage,'images');
    
    
    
    useEffect(() => {
        const fetchImages = async () => {
            listAll(imagesRef).then(res => {
                

                res.items.forEach(element => {

                    getDownloadURL(element)
                    .then((url) => {
                        console.log(url)
                    })
                    .catch((error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                        }
                    });

                    
                }); 


                
                
            })
    
        }
        
        const loadImages = async () => {
            const urls = await fetchImages();
            setFiles(urls);
        }
        loadImages();
        }, []);






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