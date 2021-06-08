import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import product from '../../store/product';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as cartReducer from '../../store/cart'



export default function OrderSummary({product}) {

  const theme = useTheme();
  const dispatch = useDispatch();


  const handlePriceFormat= (product) => {
      const formatPrice = ((product.qty * product.price)/100).toFixed(2)
      return formatPrice
  }



  return (
  <Grid direction="row">
    <Grid
  container
  direction="row"
  justifItems="center"
  alignItems="start"
  spacing={2}
>
<Grid item xs>
    <Typography variant="h6">
        {product.name}
    </Typography>
    <Typography variant="subtitle1">
        {product.brand}
    </Typography>
</Grid>
<Grid item xs>
    <Box>
        <img src={product.image_url_main} alt={product.name} style={{maxWidth:"75px"}}/>
    </Box>
</Grid>

<Grid item xs>
  <Typography>{`$${handlePriceFormat(product)}`}</Typography>
</Grid>
<Grid item xs>
  <Typography>{product.qty}</Typography>
</Grid>


</Grid>
</Grid>


  );
}
