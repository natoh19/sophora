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
import {getSingleProduct} from '../../store/product'
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';





export default function Product() {

  const dispatch= useDispatch();
  const product = useSelector(state => state.product.product);
  const { id } = useParams();
  const [selected, setSelected] = useState(0)
  const images = [product.image_url_main, product.imageOne, product.imageTwo]

  useEffect(() => {
    dispatch(getSingleProduct(id))

  }, [dispatch, id])

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

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
                <Typography variant="h6">{product.brand}</Typography>
                <Typography variant="subtitle1">{product.description}</Typography>
                <Typography variant="subtitle1">{`$${product.price/100}`}</Typography>
              </Box>
              <Box>
                <Button variant="contained" color="primary" className={classes.button} style={{marginTop: "auto", marginLeft: "30px"}} startIcon = {<AddShoppingCartIcon />}>Add To Cart</Button>
                <IconButton aria-label="love this item">
                  <FavoriteIcon />
                </IconButton>
              </Box>

            </Grid>

          </Grid>

        </Grid>
      </div>
    )
  }
