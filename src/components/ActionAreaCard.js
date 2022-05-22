import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Collapse } from '@mui/material';

export default function ActionAreaCard(props) {
  const[extendCard,setExtendCard] = useState(false)

  const cardClickHandler = () => {
    setExtendCard((prev) => !prev)
  }
  return (
    <Collapse  in={extendCard} collapsedSize={250}>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            onClick={cardClickHandler}
            component="img"
            height="250"
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
    </Collapse>
  );
}
