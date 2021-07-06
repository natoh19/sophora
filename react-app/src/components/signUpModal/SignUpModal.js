import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

export default function SignUpForm(props) {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

// signup in the modal.
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password, first_name, last_name));

      if (data.errors)
       {
          setErrors(data.errors)
        } else {
          props.handleClose()
        }

    } else {
      setErrors(['Confirm password field must match password field'])

    }

  };

  const handleClose = () => {

    props.handleClose();
  };



  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
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


  return (
    <div>


      <Dialog open={props.open} onClose={handleClose}  aria-labelledby="form-dialog-title" style={{padding: '40px'}}>
        <DialogTitle id="form-dialog-title" style={{textAlign:'center'}} variant="h5" >Sign Up</DialogTitle>


        <form onSubmit={onSignUp}>
        <DialogContent>
          <Typography variant="h5" style={{textAlign:'center'}}>
            Register your account at Sophora today!
          </Typography>
          <DialogContentText style={{textAlign:'center'}}>
          *Required Fields
          </DialogContentText>
          <div style={{textAlign:'center'}}>
          {errors && errors.map((error, idx) => (
          <p key={idx} style={{color: 'red'}}>{error}</p>
        ))}
            </div>

          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="email"
            type="email"
            value={email}
            required={true}
            onChange={updateEmail}
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            id="first_name"
            name="first_name"
            label="First Name"
            // type="text"
            value={first_name}
            onChange={updateFirstName}
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            id="last_name"
            name="last_name"
            label="Last Name"
            // type="text"
            value={last_name}
            onChange={updateLastName}
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
            required={true}
            fullWidth
          />
        <TextField
            autoFocus
            margin="dense"
            id="confirm-password"
            name="repeat_password"
            label="Repeat Password"
            type="password"
            value={repeatPassword}
            onChange={updateRepeatPassword}
            required={true}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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
