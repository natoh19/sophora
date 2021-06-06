import React, {useState, useEffect} from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
    Box,
    Divider,
    IconButton,
    Grid
  } from "@material-ui/core";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import ImageGrid from './ImageGrid'
import * as productStore from '../../store/product'
import { ShoppingCart } from "@material-ui/icons";
// import {getSingleProduct} from '../../store/product'
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as cartReducer from '../../store/cart'
import CartModal from '../cart/cartModal'







export default function Product() {

  const dispatch= useDispatch();
  const product = useSelector(state => state.product.product);
  const { id } = useParams();
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = React.useState(false);
  const images = [product.image_url_main, product.imageOne, product.imageTwo]
  const cart = useSelector(state => state.cart.products)


  useEffect(() => {
    dispatch(productStore.getSingleProduct(id))

  }, [dispatch, id])

  useEffect(() => {
    setOpen(true)
  }, [cart])


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

  // onClick={
  //   async () => {
  //   dispatch(cartReducer.addProduct(product))
  // }}

  const classes = useStyles();

     return (

      <div>
        <Grid container spacing={1} style={{maxWidth: 800, margin: '0 auto'}}>

          <Grid item sm={1} >
            <ImageGrid images={images} onSelect={setSelected} selected={selected}/>
          </Grid>

          <Grid item sm={5}>
            <div style={{marginLeft: '30px'}}>
              <img src={images[selected]} width='100%' />
            </div>
          </Grid>

          <Grid item sm={6}>
            <Grid container direction="column" style={{height: '100%'}}>

              {/* <Divider /> */}
              <Box mt={2} style={{marginLeft: "30px"}}>
                <Typography variant="h4">{product.name}</Typography>
                <IconButton aria-label="love this item">
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="h6">{product.brand}</Typography>
                <Typography variant="subtitle1">{product.description}</Typography>
                <Typography variant="subtitle1">{`$${product.price/100}`}</Typography>
              </Box>
              <Box >
                <Box>
                <Button  variant="contained" color="primary" className={classes.button}
                style={{marginTop: "auto", marginLeft: "30px"}} startIcon = {<AddShoppingCartIcon />}
                // onClick={handleAdd}
                onClick={
                  async () => {
                   dispatch(cartReducer.addProduct(product))
                }}
                // onClick={handleOpen}
              >

                  Add To Cart
                  </Button>
                  <CartModal open={open} onClose={handleClose} product={product}/>

                </Box>
              </Box>

            </Grid>

          </Grid>

        </Grid>
      </div>
    )
  }
