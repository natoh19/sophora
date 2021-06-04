import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CheckoutForm from './CheckoutForm'
import {
    CardElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";

// const promise = loadStripe("pk_test_51Iws9eDTZpv1JDZFarzSyEF2nqq9xenWCwbILooHMNrAgUCCN2WIATjKHDFiEZVqkqHUeiLsRzcV786iA4H9blPJ00yOk7hdYb");

export default function CheckoutPage() {
  return (
    <Container style={{marginTop: 300}}>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
      </Grid>
      {/* <Elements stripe={promise}>
        <CheckoutForm />
        </Elements> */}
    </Container>
  );
}
