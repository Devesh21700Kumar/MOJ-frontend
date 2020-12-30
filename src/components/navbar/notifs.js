import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    paddingRight: '3px',
  },
}));

export default function Notifs() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton className={classes.menuButton} onClick={handleClick}>
        <NotificationsActiveIcon style={{}} className="icons" />
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
        <List
          component="nav"
          className={classes.root}
          aria-label="notifications"
        >
          {[
            'New notifications',
            'New notifications',
            'New notifications',
            'New notifications',
            'New notifications',
          ].map((notif, index) => {
            return (
              <div>
                <ListItem button>
                  <ListItemText
                    className={classes.typography}
                    primary={notif}
                  />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
        {/* <Typography className={classes.typography}>New notifications</Typography> */}
      </Popover>
    </div>
  );
}
