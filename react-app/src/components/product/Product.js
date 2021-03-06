import React, { useState, useEffect} from 'react'
import {

  Typography,
  Button,
  Box,
  IconButton,
  Grid
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGrid from './ImageGrid';
import * as productStore from '../../store/product';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import * as cartReducer from '../../store/cart'
import * as session from '../../store/session';
import CartModal from '../cart/cartModal';
import LikedIcon from '../likeButton/LikeButton'
import './grid.css'




export default function Product() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product)
  const likes = useSelector(state => state.session.liked)
  const { id } = useParams();
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false);
  const [exists, setExists] = useState(false)
  const images = [product.image_url_main, product.imageOne, product.imageTwo]
  const user = useSelector(state => state.session.user);


  useEffect(() => {
    dispatch(productStore.getSingleProduct(id))
  }, [dispatch, id])

  useEffect(() => {
    if (user) {
      dispatch(session.getLoves())
    }
  }, [dispatch, user])


  useEffect(() => {

    setExists(isLikedRedux(likes, id))
  }, [likes, id, exists, isLikedRedux])




  function isLikedRedux(likes = [], id) {

    const numId = parseInt(id)

    if (user) {

      for (let i = 0; i < likes.length; i++) {
        let obj = likes[i]

        if (obj['id'] === numId) {
          return true
        }
      }

      return false;
    } else {
      return undefined
    }
  }



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const handleAdd = async (product) => {
    dispatch(cartReducer.addProduct(product))
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



  const classes = useStyles();

  return (

    <div className="outer-container">
      <Grid container spacing={1} style={{ maxWidth: '80%', margin: '0 auto' }}>




          <div id='mainImg-contain'>
            <img src={images[selected]} alt="beauty product" />
          </div>


        <div className="item-description">
          <Grid container direction="column" style={{ height: '100%', justifyContent: 'center'}} className="item-details">


            <Box className="product-container">
              <Typography variant="h4">{product.name}</Typography>

              <IconButton aria-label="love this item" onClick={handleLike}>
                <LikedIcon exists={exists} user={user} />
              </IconButton>

              <Typography variant="h6">{product.brand}</Typography>
              <Typography variant="subtitle1">{product.description}</Typography>
              <Typography variant="subtitle1">{`$${(product.price / 100).toFixed(2)}`}</Typography>
              <Button variant="contained" color="primary" className={classes.button}
                // style={{marginTop: "auto"}}
                startIcon={<AddShoppingCartIcon />}
                onClick={() => {
                  handleAdd(product)
                  handleOpen()
                }}
              >
                Add To Cart
                  </Button>

                  <Grid >
              <ImageGrid images={images} onSelect={setSelected} selected={selected} />
              </Grid>

            </Box>

            <Box>
              <Box>

                <CartModal open={open} onClose={handleClose} product={product} />

              </Box>
            </Box>

          </Grid>

        </div>

      </Grid>

    </div>
  )
}
