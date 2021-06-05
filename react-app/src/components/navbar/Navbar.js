import React from 'react';
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
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import * as session from '../../store/session'
import {useHistory, Link} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';


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
  const classes = useStyles();
  const userInSession = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleProfileMenuOpenTwo = (event) => {
  //   alert("handleProfileMenuOpen2")
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const handleLogOut = (event) => {
    dispatch(session.logout())
  }

  const handleLogin =(event) => {
    history.push("/login")
  }

  // const handleLogOutTwo = (event) => {
  //   dispatch(session.logout())
  // }


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
      onClick={handleLogOut}>
    >
      <MenuItem component = {Link} to="/MyAccount">My Account</MenuItem>
      <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
    </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge color="secondary">
  //           <FavoriteIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Loves</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton color="inherit">
  //         <Badge color="secondary">
  //           <ShoppingCartIcon/>
  //         </Badge>
  //       </IconButton>
  //       <p>Your Basket</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle aria-hidden={false}/>
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  // let profileIcon;

  // if (userInSession) {
  //   profileIcon = (
  //     <AccountCircle user={userInSession} />
  //   )
  // } else {
  //   profileIcon = (
  //     <DoubleArrowIcon/>
  //   )
  // }

  return (
    <div>
      <AppBar style={{marginTop: 100}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
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
            <IconButton color="inherit">
              <Badge color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <FavoriteIcon/>
              </Badge>
            </IconButton>
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
          </div>
          <div className={classes.sectionDesktop}>
            {!userInSession &&
            <Button
              variant="contained"
              color="secondary"
              // aria-controls={mobileMenuId}
              // aria-haspopup="true"
              onClick={handleLogin}
              className={classes.button}
              startIcon={<PersonIcon />}
            >
              Login
            </Button>
          }
          </div>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </div>
  );
}
