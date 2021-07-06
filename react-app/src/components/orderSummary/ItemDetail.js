import React from 'react';
import {useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as cartReducer from '../../store/cart'



export default function ItemDetail({product}) {

  const dispatch = useDispatch();


  const handleIncrease = () => {
    dispatch(cartReducer.increaseQty(product))
  };

  const handleDecrease = () => {
    dispatch(cartReducer.decreaseQty(product))
  };

  const handleRemove = () => {
    dispatch(cartReducer.removeProduct(product))
  };

  const handlePriceFormat= () => {
      const formatPrice = ((product.qty * product.price)/100).toFixed(2)
      return formatPrice
  }



  return (
      <>
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
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
<Box item display="flex">
    <Button variant="outlined" onClick={handleIncrease}>+</Button>
    <Typography style={{marginLeft: '11px', marginRight: '11px'}}>{product.qty}</Typography>
    <Button variant="outlined" onClick={handleDecrease}>-</Button>
</Box>
<Grid item xs>
    <Button variant="contained" color="secondary" onClick={handleRemove}>
        Delete
    </Button>
</Grid>
<Grid item xs>
    <Typography>{`$${handlePriceFormat()}`}</Typography>
</Grid>



</Grid>

</>
  );
}
