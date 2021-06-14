import React from 'react';
import { useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './CheckoutForm.css'

import Typography from '@material-ui/core/Typography';


export default function ThankYou(){

     const order = useSelector(state=> state.order)
     const history = useHistory()

     const handleReturn = ()=> {
         history.push('/')
     }
       return (
           <div style={{boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: 'fit-content', margin: '0 auto', padding: '5em', marginTop: '14em'}}>
           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '.5em'}}>
           <div style={{width: '500px', margin: '0 auto', textAlign:'center', borderBottom: '1px solid black'}}>
            <Typography variant="h4" styles={{padding: '1em'}}>Thank you for your order</Typography>
           <Typography variant="h4">Order Summary</Typography>

           </div>
            <div style={{textAlign: 'center', width:'500px', margin: '0 auto', backgroundColor: 'rgb(242 232 232)', marginBottom: '1em'}}>
             <Typography variant="subtitle1">
              Order Total: {`$${(order.id.total/100).toFixed(2)}`}
             </Typography>
            </div>
            {order.id.products.map((item, idx)=> (
                <div key={idx}>

                <Typography variant="subtitle1">{`${item.brand}  ---  $${(item.price/100).toFixed(2)}`}</Typography>
                </div>

            ))}

             <Button onClick={handleReturn} variant="contained" color="secondary">Return to Home</Button>
            </div>

            </div>








    )
}
