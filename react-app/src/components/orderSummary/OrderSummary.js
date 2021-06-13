import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import ProductCard from '../product/ProductCard'
import * as cartReducer from '../../store/cart'
import ItemDetail from './ItemDetail'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { createOrder } from '../../store/order';
import * as session from '../../store/session'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



export default function OrderSummary() {
    const cart = Object.values(useSelector(state => state.cart.products))
    const dispatch = useDispatch()
    const [qty, setQty] = React.useState('');
    const history = useHistory();
    const userInSession = useSelector(state => state.session.user)



    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width: "100%",
        },
    }));

    const classes = useStyles();

    const handleCheckout = () => {
        // dispatch(createOrder());
        history.push('/checkout')
    }

    const handleTotal = (cart) => {
        let total = 0
        cart.map(item => total += (item.qty * item.price))
        let subTotal = total / 100
        return subTotal.toFixed(2)

    }



    return (

        <Container id="products" style={{paddingTop: '11em' }}>



            <Grid container spacing={3} direction="column" style={{ maxWidth: 800, margin: '0 auto' }}>
               {!userInSession &&
          <Typography variant="h6" align='center' style={{marginBottom: '.75em'}}>
            Please login to place your order
        </Typography>
        }
                {cart.map(product => (
                    <Grid key={product.id} item xs>
                        <ItemDetail product={product} cart={cart} />
                    </Grid>
                ))}

                <Box>
                    <Typography variant = "h5" align="center">Order Total: {`$${handleTotal(cart)}`}</Typography>
                </Box>
                <Button onClick={handleCheckout}className={classes.button} color="primary" variant="contained">Checkout</Button>
            </Grid>


        </Container>





    )
}
