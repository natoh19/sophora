import React, { useState } from 'react';
import { useSelector } from 'react-redux'
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
import Stripe from './Stripe'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

// const promise = loadStripe("pk_test_51Iws9eDTZpv1JDZFarzSyEF2nqq9xenWCwbILooHMNrAgUCCN2WIATjKHDFiEZVqkqHUeiLsRzcV786iA4H9blPJ00yOk7hdYb");

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

  const handleTotal = (cart) => {
    let total = 0
    cart.map(product => total += (product.qty * product.price))
    let subTotal = total / 100
    return subTotal.toFixed(2)

  }

  return (
    <div styles={{ margin: '0 auto' }}>
      <Box width="100%">
        <Typography variant="h3" align="center">
          Checkout
      </Typography>
      </Box>


      <div className="checkout-grid-container">

        <div className="checkout-grid-form">

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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Street Address 2 (optional)"
              name="address2"
              variant="outlined"
              fullWidth
              value={address2}
              margin="normal"
              onChange={(e) => setAddress2(e.target.value)}
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>

        </div>

        <div className="checkout-grid-summary">

          <Grid item xs={12}>
            {cart.map(product => (
              <ItemDetail product={product} cart={cart} />
            ))}

            <Box>
              <Typography variant="h5" align="center">Order Total: {`$${handleTotal(cart)}`}</Typography>
            </Box>
            <Stripe />
          </Grid>



        </div>


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
