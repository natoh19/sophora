import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";



export default function LoginModal(props) {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();




  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));

    if (data.errors) {
      setErrors(data.errors);
    } else {
      props.handleClose();
    }
  };

  const handleDemoUser= async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password'
    const dispatched = await dispatch(login( email, password))

    if (dispatched.errors) setErrors(dispatch.errors)
  }

  const handleClose = () => {

    props.handleClose();
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }


  return (
    <Box>


      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" align="center">Login</DialogTitle>
        <form onSubmit={onLogin}>
        <DialogContent>
        <Typography align="center">
        Login to add items to your <span role="img" aria-label="heart">💙</span>  list and checkout!

        </Typography>
        <div style={{padding: '.5em', margin: '0 auto', fontWeight: 'bold'}}>
        {errors && errors.map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </div>

          <TextField
            autoFocus
            margin="dense"
            required
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={updateEmail}
          />

        <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={updatePassword}
            fullWidth


          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Login
          </Button>
        </DialogActions>
        </form>

        <form onSubmit={handleDemoUser} style={{paddingLeft: '8.5em', paddingBottom: '2em'}}>

          <Button type="Submit" variant="contained" color="secondary" onClick={handleDemoUser}>Demo User</Button>
        </form>
      </Dialog>

    </Box>
  );
}
