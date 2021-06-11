import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './CheckoutForm.css'
import * as orderReducer from '../../store/order'
import Typography from '@material-ui/core/Typography';


export default function ThankYou(){
     const cart = Object.values(useSelector(state => state.cart.products))
     const order = useSelector(state=> state.order)
       return (
           <div style={{boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: 'fit-content', margin: '0 auto', padding: '5em'}}>
           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '.5em'}}>
           <div style={{width: '500px', margin: '0 auto', textAlign:'center', borderBottom: '1px solid black'}}>
           <Typography variant="h4">Order Summary</Typography>

           </div>
            <div style={{textAlign: 'center', width:'500px', margin: '0 auto', backgroundColor: 'rgb(242 232 232)', marginBottom: '1em'}}>
             <Typography variant="subtitle1">
              Order Total: {`$${order.id.total}`}
             </Typography>
            </div>
            {order.id.products.map((item, idx)=> (
                <div >

                <Typography variant="subtitle1">{`${item.brand}  ---  $${(item.price/100).toFixed(2)}`}</Typography>
                </div>
            ))}
            </div>

            </div>








    )
}
