import React from 'react';
import './profilePage.css'
import * as session from '../../store/session'
import {removeLove} from '../../store/session'
import { useSelector, useDispatch } from "react-redux";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'


export default function ProfilePage() {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const likes = useSelector(state => state.session.liked)
    const userInSession = useSelector(state => state.session.liked)
    const cart = Object.values(useSelector(state => state.cart.products))
    console.log(likes)


    const handleRemove=(item)=> {

        dispatch(session.removeLove(item))

    }

    return (
        <div className="account-container">
            <div className="account-subcontainer">
            <div className="likes-container">


                {Array.isArray(likes) && likes.map(like => {
                   return <div>
                       <span>{like.name}</span><button style={{marginLeft: '8px'}} onClick={() => handleRemove(like.id)}>Remove</button>
                       </div>
               })}








            </div>
            <div className="account-info-container">
               <h2 className="account-info-header">Account Information</h2>
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
