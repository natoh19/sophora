import React, { useEffect } from 'react';
import './profilePage.css'
import * as session from '../../store/session'
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';


export default function ProfilePage() {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const likes = useSelector(state => state.session.liked)

    useEffect(() => {
        dispatch(session.getLoves())
    }, [dispatch])

    const handleRemove = (item) => {
        dispatch(session.removeLove(item))
    }



    return (
        <>

        <div className="headline-container">
            <h3 className="headline">Your Liked Items and Account Info</h3>
            <div className="account-info-container">
                <div className="account-info">
                    <span>Email</span>
                </div>
                <div className="account-info">
                <span>{user.email}</span>
            </div>
            </div>
            </div>

            <div className="likes-container">


                {Array.isArray(likes) && likes.map((like, idx) => {
                    return <div key={idx} className="like-container">
                        <span
                            className="like-name">{like.name}
                        </span>
                        <div className="like-image">
                            <img src={like.image_url_main} alt={like.name}/>
                        </div>
                        <Button
                            className="remove-button"
                            onClick={() => handleRemove(like.id)}>
                            Remove
                        </Button>
                    </div>
                })}



            </div>

        </>
    )
}
