
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CartModal(props) {
  const classes = useStyles();
  const history=useHistory()


  const handleConfirm = () => {
    history.push('/confirmation')
  };


  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        {...props}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
              <Grid container direction="column" style={{maxWith:'500px'}} >
                  <Box mt={3}>
                      <div>
                          <img src={props.product.image_url_main} style={{maxWidth: 250}} alt={props.product.name}/>
                      </div>
                      <div>
                      <Typography variant="h4">{props.product.name}</Typography>
                        <Typography variant="h6">{props.product.brand}</Typography>
                        <Typography variant="subtitle1">{props.product.description}</Typography>
                        <Typography variant="subtitle1">{`$${(props.product.price/100).toFixed(2)}`}</Typography>
                      </div>
                     <Button onClick={handleConfirm}variant="contained" color="secondary">Checkout</Button>
                  </Box>
              </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
