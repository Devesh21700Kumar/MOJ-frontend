import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './search.css';
import { Route, Redirect, useHistory } from 'react-router';
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
    marginRight: '2.6vw',
    paddingRight: '3px',
  },
  menu: {
    display: 'none',
  },
}));

export default function Notifs() {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userinfo = JSON.parse(
    window.atob(localStorage.getItem('token').split('.')[1])
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick0 = () => {
    history.push('/admin');
  };
  const handleClick1 = () => {
    history.push('/core');
  };
  const handleClick2 = () => {
    history.push('/home');
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <IconButton
        className={
          userinfo.permissionLevel != 0 ? classes.menuButton : classes.menu
        }
        onClick={handleClick}
      >
        <ArrowForwardIosIcon style={{}} className="icons" />
      </IconButton>

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
        <List
          component="nav"
          className={classes.root}
          aria-label="notifications"
        >
          <div style={{ padding: '0' }}>
            <ListItem
              button
              className={
                userinfo.permissionLevel != 2 ? classes.menu : classes.hey
              }
            >
              <ListItemText
                className={classes.typography}
                primary="Redirect to Admin"
                onClick={handleClick0}
              />
            </ListItem>
            <Divider />
            <ListItem
              button
              className={
                userinfo.permissionLevel == 0 ? classes.menu : classes.hey
              }
            >
              <ListItemText
                className={classes.typography}
                primary="Redirect to Core"
                onClick={handleClick1}
              />
            </ListItem>
            <Divider />
            <ListItem button className={classes.hey}>
              <ListItemText
                className={classes.typography}
                primary="Redirect to Home"
                onClick={handleClick2}
              />
            </ListItem>
          </div>
        </List>
      </Popover>
    </div>
  );
}
