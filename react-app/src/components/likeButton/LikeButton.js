import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';


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


    let button;

    if (exists && user){
        button = <LikedIcon color="secondary" />
    } else if (user) {
        button = <LikedIcon />
    } else {
        button = null
    }

    return (
        <div className = {classes.root}>

            {button}

        </div>



    )


}
