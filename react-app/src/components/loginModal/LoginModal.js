import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
    console.log(email, password)
    const data = await dispatch(login(email, password));
    props.handleClose();
    if (data.errors) {
      setErrors(data.errors);
    }
  };

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
      <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <form onSubmit={onLogin}>
        <DialogContent>
        <Box>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </Box>

          <TextField
            autoFocus
            margin="dense"
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
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={updatePassword}
            fullWidth
            value={email}

          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onLogin} color="primary">
            Login
          </Button>
        </DialogActions>
        </form>
      </Dialog>

    </Box>
  );
}
