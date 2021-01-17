import React from 'react';
//import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';
import './search.css';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  typography: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '2px',
    '&:hover': {
      backgroundColor: 'unset !important',
      color: 'unset !important',
    },
    '&:click': {
      backgroundColor: 'unset !important',
      color: 'unset !important',
    },
    disableRipple: true,
    disableFocusRipple: true,
  },
  menu: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '22.5px',
    '&:hover': {
      backgroundColor: 'unset !important',
      color: 'unset !important',
    },
    disableRipple: true,
    disableFocusRipple: true,
  },
  orange: {
    color: theme.palette.getContrastText('#aa11ff'),
    backgroundColor: '#aa11ff',
  },
  '@media(min-width: 1100px)': {
    menu: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(0.5),
      float: 'right',
      width: '2rem',
      height: '2rem',
      marginTop: '2.7vh',
      paddingRight: '45.5px',
      '&:hover': {
        backgroundColor: 'unset !important',
        color: 'unset !important',
      },
      '&:click': {
        backgroundColor: 'unset !important',
        color: 'unset !important',
      },
      disableRipple: true,
      disableFocusRipple: true,
    },
  },
}));
const name = 'Nipun Gupta';

export default function Profile({ name, bitsId }) {
  const classes = useStyles();
  const onLogoutSuccess = async (res) => {
    const isTokenExists = await localStorage.getItem('token');
    if (isTokenExists) {
      localStorage.removeItem('token');
    }
    history.push('/');
  };

  /* const [ck,setck]=useState('inline');
  if (location.pathname.match(/home/)){
    setck["none"];
  }*/
  const clientId =
    '125310704983-vdns6gu4872lcp00dssddhvaaocbgv3j.apps.googleusercontent.com';
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });
  const userinfo = JSON.parse(
    window.atob(localStorage.getItem('token').split('.')[1])
  );
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut();
    // localStorage.removeItem('token');
    // history.push('/');
  };

  const handle1 = () => {
    history.push('/credits');
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick2 = () => {
    history.push('/home');
  };

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <IconButton
          disableRipple
          className={
            userinfo.permissionLevel != 0 ? classes.menuButton : classes.menu
          }
          onClick={handleClick}
        >
          <AccountCircleRoundedIcon className="icons" />
        </IconButton>
      </MuiThemeProvider>
      {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={name} className={classes.orange} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={bitsId} />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleLogout}>
            <ListItemText
              className={classes.typography}
              primary="Logout"
              onClick={handleLogout}
            />
          </ListItem>
          <Divider />
          {location.pathname.match(/home/) ? (
            <ListItem button className={classes.hey} onClick={handle1}>
              <ListItemText
                className={classes.typography}
                primary="Credits"
                onClick={handle1}
              />
            </ListItem>
          ) : (
            <ListItem button onClick={handleClick2}>
              <ListItemText
                className={classes.typography}
                primary="Home"
                onClick={handle1}
              />
            </ListItem>
          )}
        </List>
        {/* <Typography className={classes.typography}>New notifications</Typography> */}
      </Popover>
    </div>
  );
}
