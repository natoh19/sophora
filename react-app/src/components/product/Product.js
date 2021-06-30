import React, {useState, useEffect} from 'react'
import {

    Typography,
    Button,
    Box,
    IconButton,
    Grid
  } from "@material-ui/core";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import ImageGrid from './ImageGrid';
import * as productStore from '../../store/product';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as cartReducer from '../../store/cart'
import * as session from '../../store/session';
import CartModal from '../cart/cartModal';
import LikedIcon from '../likeButton/LikeButton'
import * as loveReducer from '../../store/loves'



export default function Product() {

  const dispatch= useDispatch();
  const product = useSelector(state => state.product.product);
  const likes = useSelector(state => state.loves.liked)
  const { id } = useParams();
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false);
  const [exists, setExists] = useState(false)
  const images = [product.image_url_main, product.imageOne, product.imageTwo]
  const user = useSelector(state => state.session.user);


  useEffect(() => {
    dispatch(productStore.getSingleProduct(id))
  }, [dispatch, id])

  useEffect(() =>{
    dispatch(loveReducer.getLoves())
  }, [dispatch])

  useEffect(() => {
    setExists(isLikedRedux(likes, id))
  }, [likes, id, exists])


  function isLikedRedux(likes, id){
    const numId = parseInt(id)

    if (user) {

    for (let i = 0; i < likes.length; i++){
      let obj = likes[i]
      if (obj['id'] === numId){
        return true
      }
    }

    return false;
  } else {
    return undefined
  }
  }





  // useEffect(() => {
  //   dispatch(productStore.getSingleProduct(id))

  // }, [dispatch, id])


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

  const handleAdd = async(product) => {
    dispatch(cartReducer.addProduct(product))
  }

  const handleLike=()=> {
    if (user) {

    if (exists){
      dispatch(loveReducer.removeLove(product.id))
    } else {
      dispatch(loveReducer.addLove(product.id))
    }
  }

  }



  const classes = useStyles();

     return (

      <div className="outer-container" style={{paddingTop: '14em'}}>
        <Grid container spacing={1} style={{maxWidth: 900, margin: '0 auto'}}>

          <Grid item sm={1} >
            <ImageGrid images={images} onSelect={setSelected} selected={selected}/>
          </Grid>

          <Grid item sm={5}>
            <div id='mainImg-contain'>
               <img src={images[selected]} alt="beauty product" />
            </div>
          </Grid>

          <Grid item sm={6}>
            <Grid container direction="column" style={{height: '100%', justifyContent: 'center', marginLeft: '11em'}}>


              <Box>
                <Typography variant="h4">{product.name}</Typography>


              {/* <Tooltip title="Remove from your love list"> */}
                <IconButton aria-label="love this item" onClick={handleLike}>
                  <LikedIcon exists ={exists} user={user} />
                </IconButton>
                {/* </Tooltip> */}



                <Typography variant="h6">{product.brand}</Typography>
                <Typography variant="subtitle1">{product.description}</Typography>
                <Typography variant="subtitle1">{`$${(product.price/100).toFixed(2)}`}</Typography>
                <Button  variant="contained" color="primary" className={classes.button}
                // style={{marginTop: "auto"}}
                startIcon = {<AddShoppingCartIcon />}
                onClick = {() => {
                  handleAdd(product)
                  handleOpen()
                }}
              >
                  Add To Cart
                  </Button>



              </Box>
              <Box>
                <Box>

                  <CartModal open={open} onClose={handleClose} product={product}/>

                </Box>
              </Box>

            </Grid>

          </Grid>

        </Grid>
      </div>
    )
  }
