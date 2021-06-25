import React, {useEffect, useState} from 'react';
import * as session from '../../store/session'
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';




const useStyles = makeStyles((theme) => ({
    root: {
      '& > span': {
        margin: theme.spacing(2),
      },
    },
  }));

function LikedIcon(props){
    return (
        <SvgIcon {...props}>
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </SvgIcon>
    )
}


export default function LikeButton({exists, user}){
    const classes = useStyles();

    // const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.session.liked)

    const dispatch = useDispatch();
    const [like, setLikes] = useState(false)



    // useEffect(() =>{
    //     dispatch(session.getLoves())
    //    likeFlag(id)
    //    console.log('++++++id in useEffect', id)
    // }, [dispatch, id])

    // const likeFlag = (id) => {
    //     console.log('++++++++id arg in likeFlag', id)
    //     console.log('++++++LIKES from state', likes)
    //     // likes.map(like => console.log('++++LIKE', like))
    //     let flag = likes.map(like => like[id] === id)
    //     console.log('+++++FLAG', flag)


    //     if (!likes[id]){
    //         console.log('+++++LIKE', like)
    //         console.log('____LIKEID', likes[id])
    //         setLikes(false)
    //     }

    //     if(likes[id]){
    //         console.log('++++++++LIKE', like)
    //         console.log('____LIKEID', likes[id])
    //         setLikes(true)
    //     }
    // }



    // const handleToggle = (id) => {
    //     if (likeFlag){
    //         dispatch(session.removeLove(id))
    //     } else {
    //         dispatch(session.addLove(id))
    //     }
    // }

    return (
        <div className = {classes.root}>

            {user && exists ?
            <LikedIcon color="secondary"/>:
            <LikedIcon />
                }



        </div>



    )


}
