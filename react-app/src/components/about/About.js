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
import * as productStore from '../../store/product'
import { ShoppingCart } from "@material-ui/icons";
// import {getSingleProduct} from '../../store/product'
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as cartReducer from '../../store/cart'
import CartModal from '../cart/cartModal'


export default function About() {

  const dispatch= useDispatch();
  const product = useSelector(state => state.product.product);
  const { id } = useParams();
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false);
  const images = [product.image_url_main, product.imageOne, product.imageTwo]
  const cart = useSelector(state => state.cart.products)


  useEffect(() => {
    dispatch(productStore.getSingleProduct(id))

  }, [dispatch, id])

  // useEffect(() => {
  //   setOpen(true)
  // }, [cart])


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

          {/* <Grid item sm={1} >
            <div>
                <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1618190978/60409772_ichcck.jpg">

                </img>
            </div>
          </Grid> */}

          <Grid item sm={5}>
            <div style={{marginLeft: '30px'}}>
              <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1618190978/60409772_ichcck.jpg" width='100%' />
            </div>
          </Grid>

          <Grid item sm={6}>
            <Grid container direction="column" style={{height: '100%',  width:'100%'}}>

              {/* <Divider /> */}
              <Box mt={2} style={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h4">Natalie Oldroyd</Typography>

                <Typography variant="subtitle1">Natalie is a software engineer asjdfoausdnpfnasdifhasifnhipao siouhasiofhasuhnaufhnodishni
                fhnoiashncfiahu siouhasiofhasuhnaufhnodishni</Typography>
                <Typography variant="subtitle1">{product.description}</Typography>
                <Typography variant="subtitle1">{`$${product.price/100}`}</Typography>
              </Box>

            </Grid>

          </Grid>

        </Grid>
      </div>
    )
  }
