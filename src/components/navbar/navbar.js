import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Notifs from './notifs';
import Profile from './profile';
import Search from './search';
import '../navbar/navbar.css';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    //bottom: theme.spacing(2),
    //right: theme.spacing(2),
  },
  appBar: {
    backgroundColor: '#EF4646',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  margin: {
    borderBottom: '3px solid green',
  },
  card: {
    backgroundColor: ' #E7B8B8',
  },
  margi: {
    borderBottom: '3px solid purple',
    borderRadius: '50px',
  },
  top: {
    marginTop: '0.77vh',
    padding: '0px',
  },
  '@media(max-width: 540px)': {
    hide: {
      display: 'none',
    },
  },
}));

export default function Navbar({ navHeading, name, bitsId }) {
  const classes = useStyles();
  if (navHeading == null) {
    navHeading = 'DashBoard';
  }
  return (
    <React.Fragment>
      <div position="fixed" className={classes.appBar}>
        <Grid
          container
          direction="row"
          justify="space-between"
          display="flex"
          alignItems="flex-start"
        >
          <Grid item xs sm md={4} lg={4}>
            <div className="trux" id="free">
              JoGW
            </div>
          </Grid>
          <Grid className={classes.hide} item xs sm md={4} lg={4}>
            <div className="trux1" id="free1">
              {navHeading}
            </div>
          </Grid>
          <Grid
            item
            xs
            sm
            md={4}
            lg={4}
            alignContent="flex-end"
            className={classes.top}
            id="free2"
          >
            <Notifs />
            <Profile name={name} bitsId={bitsId} />

            {/* <IconButton className={classes.menuButton}><NotificationsActiveIcon  /></IconButton> */}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
