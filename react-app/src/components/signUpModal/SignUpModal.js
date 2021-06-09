import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

export default function SignUpForm(props) {

const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(email, password));
      props.handleClose();
    }

  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={props.handleSignUpOpen}>
        Open form dialog
      </Button>
      <Dialog open={props.open} onClose={props.handleSignUpClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>

        <form onSubmit={onSignUp}>
        <DialogContent>
          <DialogContentText>
            Register your account at Sophora today!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="email"
            type="email"
            value={email}
            onChange={updateEmail}
            fullWidth
          />
        <TextField
            autoFocus
            margin="dense"
            id="password"
            name="password"
            label="password"
            type="password"
            value={password}
            onChange={updatePassword}
            fullWidth
          />
        <TextField
            autoFocus
            margin="dense"
            id="password"
            name="repeat_password"
            label="password"
            type="password"
            value={repeatPassword}
            onChange={updateRepeatPassword}
            required={true}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Sign Up
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
