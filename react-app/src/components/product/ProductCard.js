import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useParams } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import * as session from '../../store/session'

import LikedIcon from '../likeButton/LikeButton'
import setUser from '../../store/session'





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },

}));

export default function ProductCard({ product }) {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const likes = useSelector(state => state.session.liked)
  const [exists, setExists] = useState(false)
  const dispatch = useDispatch();
  const { id } = useParams();







  useEffect(() => {
    if (user) {
      setExists(isLikedRedux(likes, product.id))
    }
  }, [likes, product.id, dispatch])





  function isLikedRedux(likes=[], id){
    const numId = parseInt(id)

    if (user) {

    for (let i = 0; i < likes.length; i++){
      let obj = likes[i]

      if (obj['id'] == numId) {
        return true
      }
    }

    return false;
  } else {
    return undefined
  }
  }

  const handleLike = () => {
    if (user) {

      if (exists) {
        dispatch(session.removeLove(product.id))
      } else {
        dispatch(session.addLove(product.id))
      }
    }

  }



  const handleProductGridClick = () => {
    history.push(`/products/${product.id}`)
  }






  return (
    <Card className={classes.root}>
      <CardHeader
        title={product.brand}
        subheader={product.summary}
      />
      <CardMedia
        className={classes.media}
        image={product.image_url_main}
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="h6" >
          {`$${(product.price / 100).toFixed(2)}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="love this item" onClick={handleLike}>
          <LikedIcon exists={exists} user={user} />
        </IconButton>


        <Tooltip title="Product Details">
          <IconButton aria-label="product details" onClick={handleProductGridClick}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
        <Button variant="outlined" onClick={handleProductGridClick}>Details</Button>
      </CardActions>

    </Card>
  );
}
