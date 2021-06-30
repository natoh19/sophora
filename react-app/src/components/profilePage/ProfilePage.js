import React, {useEffect} from 'react';
import './profilePage.css'
import * as session from '../../store/session'
import * as loveReducer from '../../store/loves'
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';


export default function ProfilePage() {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const likes = useSelector(state => state.loves.liked)
    // const orders= useSelector(state => state.session.orders)
    // const lastOrder = useSelector(state => state.session.lastOrder)



    useEffect(() =>{
        dispatch(session.getOrders())
    }, [dispatch])

    useEffect(() => {
        dispatch(session.getLastOrder())
    }, [dispatch])


    useEffect(() =>{
        dispatch(loveReducer.getLoves())
    }, [dispatch])

    const handleRemove=(item)=> {
        dispatch(loveReducer.removeLove(item))
    }

    return (
        <div className="account-container">
            <div className="account-subcontainer">
            <div className="likes-container">


                {Array.isArray(likes) && likes.map((like, idx) => {
                   return <div key={idx}>
                       <span>{like.name}</span><Button style={{marginLeft: '8px'}} onClick={() => handleRemove(like.id)}>Remove</Button>
                       </div>
               })}


            </div>
            <div className="account-info-container">

               <h2 className="account-info-header">Account Information</h2>
               {/* <p>{lastOrder.total}</p> */}

               <div className="account-info-content">
                   <div className="account-info-row">
                        <div>
                            Email:
                        </div>
                        <div>
                            {user.email}
                        </div>
                        <div>
                            Edit
                        </div>
                    </div>
                    <div className="account-info-row">
                        <div>
                            Password:
                        </div>
                        <div>
                        •••••••
                        </div>
                        <div>
                            Edit
                        </div>

                    </div>


               </div>

            </div>


        </div>


        </div>
    )
}
