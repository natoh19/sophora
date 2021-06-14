import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';




export default function OrderFinal({product}) {


  const handlePriceFormat= (product) => {
      const formatPrice = ((product.qty * product.price)/100).toFixed(2)
      return formatPrice
  }



  return (
  <Grid direction="row">
    <Grid
  container
  direction="row"
  justifyItems="center"
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
