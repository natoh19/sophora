import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import * as cartReducer from '../../store/cart'
import * as orderReducer from '../../store/order'
import Button from '@material-ui/core/Button';
import OrderFinal from './OrderFinal';


export default function CheckoutPage() {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address1, setAddress1] = useState('')
  const [zip_code, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const cart = Object.values(useSelector(state => state.cart.products))

  const dispatch = useDispatch();
  const history = useHistory()


  const handleTotal = (cart) => {
    let total = 0
    cart.map(product => total += (product.qty * product.price))
    let subTotal = total / 100
    return subTotal.toFixed(2)

  }

  const handlePay = async (e) => {
    e.preventDefault()
    await dispatch(orderReducer.createOrder())
    await dispatch(cartReducer.clearProduct())
    history.push('/ThankYou')


  }

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      width: "100%",
    },
  }));

  const classes = useStyles();


  return (

    <div className="checkout-container">

      <div>

        <Typography variant="h3" align="center">
          Checkout
      </Typography>

        <div>

          <div className="checkout-grid-summary">

            <Grid item xs={12}>
              {cart.map((product, idx) => (
                <div key={idx}>  <OrderFinal product={product} /></div>


              ))}

            </Grid>
          </div>


          <form onSubmit={handlePay} className="checkout-form">
            <Box width="100%">
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </Box>

            <Grid item xs={12}>
              <TextField
                required
                // marginBottom="5px"
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                margin="dense"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                value={lastName}
                margin="dense"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                value={email}
                margin="dense"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="Street Address 1"
                name="address1"
                variant="outlined"
                fullWidth
                value={address1}
                margin="dense"
                onChange={(e) => setAddress1(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="State"
                name="state"
                variant="outlined"
                fullWidth
                value={state}
                margin="dense"
                onChange={(e) => setState(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="Zip Code"
                name="zip_code"
                variant="outlined"
                fullWidth
                value={zip_code}
                margin="dense"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="City"
                name="city"
                variant="outlined"
                fullWidth
                value={city}
                margin="dense"
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label="Country"
                name="country"
                variant="outlined"
                fullWidth
                value={country}
                margin="dense"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <TextField
                  required
                  label="Credit Card Number"
                  variant="filled"
                  margin="dense"
                  fullWidth
                ></TextField>
              </Box>
              <Box>
                <TextField
                  label="CVV"
                  required
                  size="small"
                  variant="outlined"
                  margin="dense"
                  helperText="3 or 4 digits usually found on the signature strip"
                ></TextField>
              </Box>
            </Grid>
            <Box>

              <Typography variant="h5">
                Order Total: {`$${handleTotal(cart)}`}
              </Typography>

            </Box>
            <Button type="submit" className={classes.button} color="primary" variant="contained">Submit Payment</Button>
          </form>

        </div>

      </div>

    </div>

  )

}
