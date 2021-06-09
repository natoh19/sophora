import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadStripe } from "@stripe/stripe-js";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../orderSummary/OrderSummary'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import ItemDetail from '../orderSummary/ItemDetail'
import * as cartReducer from '../../store/cart'
import * as orderReducer from '../../store/order'
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import Stripe from './Stripe'
// import CreditCardForm from './CreditCardForm'
import OrderFinal from './OrderFinal'
// import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";


export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [zip_code, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const cart = Object.values(useSelector(state => state.cart.products))

  const dispatch = useDispatch();


  const handleTotal = (cart) => {
    let total = 0
    cart.map(product => total += (product.qty * product.price))
    let subTotal = total / 100
    return subTotal.toFixed(2)

  }

  const handlePay=async (e)=> {
    e.preventDefault()
    await dispatch(orderReducer.createOrder())

  }


  return (

    <div>

    <form onSubmit={handlePay} className="checkout-form">
      <Box width="100%">
        <Typography variant="h3" align="center">
          Checkout
      </Typography>
      </Box>

          <Grid item xs={12}>
            <TextField
              required
              marginBottom="5px"
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
          <Button type="submit">Pay</Button>
          </form>





        <div className="checkout-grid-summary">

          <Grid item xs={12}>
            {cart.map(product => (
              <OrderFinal product={product} />

            ))}

          </Grid>
        </div>

        </div>





  )


  {/* <Grid container spacing={3} direction="column">
        <Grid item xs={12}>
          <TextField required id="cardName" label="Name on card" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          /> */}
  {/* </Grid>
        <Grid item xs={12}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
      </Grid>
        <CheckoutForm />


    </div>

    </div





// element.style {
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   flex-direction: column;
//   align-content: center; */}

}
