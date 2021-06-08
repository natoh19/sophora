import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as orderReducer from '../../store/order'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import './CheckoutForm.css';


export default function CheckoutForm() {
  const dispatch = useDispatch();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const order = useSelector(state => state.order)
  const elements = useElements();



  const handleSubmit =()=> {
    console.log('success')}


    return (
    // Create PaymentIntent as soon as the page loads
    // console.info('order is', order);
    // if(!order || !order.id) return
    // const res = await  window
    //   .fetch("/api/orders/create-payment-intent", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({stripeOrder_id: order.id})
    // })

  //   const data = await res.json();
  //   console.log('++++data', data)
  //   setClientSecret(data.clientSecret);
  //   return data.clientSecret;

  // }, [order]);



  // const handleChange = async (event) => {
  //   // Listen for changes in the CardElement
  //   // and display any errors as the customer types their card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };
  // const handleSubmit = async ev => {
  //   ev.preventDefault();
  //   setProcessing(true);
  //   const secret = await getPaymentIntent();
  //   // console.log('secret is', secret);
  //   const payload = await stripe.confirmCardPayment(secret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement)
  //     }
  //   });
  //   if (payload.error) {
  //     setError(`Payment failed ${payload.error.message}`);
  //     setProcessing(false);
  //     dispatch(orderReducer.updateOrder("failure"))
  //   } else {
  //     setError(null);
  //     setProcessing(false);
  //     setSucceeded(true);
  //     dispatch(orderReducer.updateOrder("success"))
  //   }
  // };




    <form id="payment-form" onSubmit={handleSubmit}>
      {/* <CardElement id="card-element" options={cardStyle} onChange={handleChange} /> */}
      <button
        id="submit"
      >
        <span id="button-text">

            "Pay now"

        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  )
      }
