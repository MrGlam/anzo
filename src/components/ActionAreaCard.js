import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imageUrl}
          alt={props.imageAlt}
        />
        <CardContent>
          <Typography alin="center" gutterBottom variant="h5" component="div">
            {props.cardTital}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
