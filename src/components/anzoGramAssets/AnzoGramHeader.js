
import React, { useState } from 'react';
import Modal from './Modal';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Title from './Title';


function AnzoGramHeader() {

  const [selectedImg,setSelectedImg] = useState(null);
 
  return (
    <div className="App">
      
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg&&<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default AnzoGramHeader;


// import { Avatar, Grid, Paper, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';

// const AnzoGramHeader = () => {
//     return (
//         <Grid container spacing={10}>
//             <Grid item md={12}/>
//             <Grid item md={2.5}/>
//             <Grid item md={2.5}>
//                 <Avatar
//                 alt="Remy Sharp"
//                 src="/static/images/avatar/1.jpg"
//                 sx={{ width: 250, height: 250 }}
//                  />
//             </Grid>
//             <Grid item md={2.5}>
//                 <Box mr={1} display="inline">
//                     <Typography variant='h5' >Anzo Papichulo Glam</Typography>
//                 </Box>
//                 <Box mr={1} display="inline">
//                     <Typography fontSize={18}  >breed : Cane Corso </Typography>
//                 </Box>
//                 <Box mr={1} display="inline">
//                 <Typography fontSize={18}>body fat : 42%</Typography>
//                 </Box>
//                 <Box mr={1} display="inline">
//                     <Typography fontSize={18}  >mucos : 100 mil per kilo</Typography>
//                 </Box>
//                 <Box mr={1} display="inline">
//                     <Typography fontSize={18}  >castrated : True</Typography>
//                 </Box>
//             </Grid>
//             <Grid item md={2.5}>
                
//             </Grid>
            


//         </Grid>
        
//     );
// };

// export default AnzoGramHeader;