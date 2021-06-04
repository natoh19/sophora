import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },

}));

export default function ProductCard({brand, summary, price, image_url, categoryId, id }) {
    const classes = useStyles();
    const history = useHistory();


    const handleProductGridClick = () => {
        history.push(`{/products/:id}`)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={brand}
                subheader={summary}
            />
            <CardMedia
                className={classes.media}
                image={image_url}
            />
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="h6" >
                   {price}
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Tooltip title="Product Details">
                    <IconButton aria-label="product details">
                        <VisibilityIcon onClick={handleProductGridClick} />
                    </IconButton>
                </Tooltip>
                <Button variant="outlined" onClick={handleProductGridClick} >Details</Button>
            </CardActions>

        </Card>
    );
}
