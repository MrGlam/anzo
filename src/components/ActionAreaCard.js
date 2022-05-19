import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {

  const cardClickHandler = () => {
    console.log("dont you dare press me")
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          onClick={cardClickHandler}
          component="img"
          height="200"
          image={props.imageUrl}
          alt={props.imageAlt}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            {props.cardTital}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {props.cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
