import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea,CardContent, CardMedia, Typography } from '@material-ui/core' ;
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 10,
    backgroundColor: '#282828'
  },
  media: {
    height: 140,
    minWidth: 220
  },
  titleColor:{
      color: 'white',
  },
  subTitleColor:{
    color: '#8F8F8F',
},
fillColor:{
    color: 'green',
    fontSize: '50px',
    position: 'absolute',
    right: '0',
    marginTop: '-50px',
},
});

export default function MyCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/129.webp?random=3"
          title="Contemplative Reptile"
        />
        
        <PlayCircleFilledWhiteIcon className={classes.fillColor}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleColor}>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.subTitleColor}>
            Lizards are 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}