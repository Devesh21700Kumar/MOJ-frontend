import React from 'react';
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
import './search.css';

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
  },
  menu: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '22.5px',
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
    },
  },
}));
const name = 'Nipun Gupta';

export default function Profile({ name, bitsId }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const [name,setName] =React.useState('');
  //const [bitsId,setId] =React.useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const userinfo = JSON.parse(
    window.atob(localStorage.getItem('token').split('.')[1])
  );
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    location.replace('/');
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
        <AccountCircleRoundedIcon className="icons" />
      </IconButton>

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
          <Divider variant="inset" component="li" />
          <Divider />
          <ListItem button>
            <ListItemText
              className={classes.typography}
              primary="Logout"
              onClick={handleLogout}
            />
          </ListItem>
        </List>
        {/* <Typography className={classes.typography}>New notifications</Typography> */}
      </Popover>
    </div>
  );
}
