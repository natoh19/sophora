import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as session from '../../store/session'
import {useHistory, Link} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import LoginModal from '../loginModal/LoginModal'
import SignUpModal from '../signUpModal/SignUpModal'
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

// import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'secondary'
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'secondary'
  },
  inputRoot: {
    color: 'secondary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      color: 'secondary'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      color: 'secondary'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      color: 'secondary'
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const userInSession = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = Object.values(useSelector(state => state.cart.products))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false)
  const [userAction, setUserAction] =useState('')
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const handleLogOut = (event) => {
    dispatch(session.logout())
  }

  const handleClickOpen = (val) => {
    setOpen(val);
  };

  const handleSignUpToggle=(val) =>{
    setSignUpOpen(val)
  }

  const handleCartIconClick =() => {
    history.push('/confirmation')
  }

  const handleFavClick=()=> {
    history.push('/myaccount')
  }







  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      // onClick={handleLogOut}
      >

      <MenuItem component = {Link} to="/MyAccount">My Account</MenuItem>

    </Menu>
  );


  return (
    <div>
      <AppBar style={{position: 'absolute', top: '63px'}}>
        <Toolbar>
        {renderMenu}

        {userInSession &&
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          }
          <Typography className={classes.title} variant="h6" noWrap component = {Link} to="/" style= {{textDecorationLine: 'none', color: 'white'}}>
           Sophora
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>


            <IconButton aria-label="cart" onClick= {handleCartIconClick}>
              <StyledBadge badgeContent={cart.length} color="secondary">
               <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>



            <IconButton color="inherit">
              <Badge color="secondary">
                {userInSession &&
                <FavoriteIcon onClick={handleFavClick}/>
                }
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            <LoginModal open={open} handleClose={() => handleClickOpen(false)}/>
            {/* <LoginModal open={open}/> */}
            {!userInSession &&
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleClickOpen(true)}
              className={classes.button}
              startIcon={<PersonIcon />}
            >
             Login
            </Button>
          }
          </div>
          <div className={classes.sectionDesktop}>

            {userInSession &&
            <Button
            variant="contained"
            color="secondary"
            // onClick={() => handleClickOpen(true)}
            className={classes.button}
            // startIcon={<PersonIcon />}
            onClick={handleLogOut}

            >
              Logout
            </Button>
            }

          </div>

          <div className={classes.sectionDesktop}>
          <SignUpModal open={signUpOpen} handleClose={() => handleSignUpToggle(false)}/>
          {!userInSession &&
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleSignUpToggle(true)}
          >
          Sign Up
          </Button>

          }

          </div>

        </Toolbar>
      </AppBar>

    </div>
  );
}
