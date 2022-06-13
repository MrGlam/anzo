import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Collapse } from '@mui/material';
import { useSelector } from 'react-redux';
import { cardExpandActions } from '../../store/cardExpand-slice';
import { useDispatch } from 'react-redux';

export default function ActionAreaCard(props) {
  const dispatch = useDispatch()
  const cardCollapsSize = 400
  const expandCard = useSelector(state => state.cardExpand).cardExpand
  
  const cardClickHandler = () => {
    dispatch(cardExpandActions.clickCard())
  }

 

  
  return (
      <Collapse  in={expandCard} collapsedSize={cardCollapsSize}>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            onClick={cardClickHandler}
            component="img"
            height={cardCollapsSize}
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
