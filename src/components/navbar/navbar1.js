import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../navbar/navbar.css';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import './search.css';

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
    position: 'fixed',
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

export default function Navbar1() {
  const classes = useStyles();

  let history = useHistory();

  const handler1 = () => {
    history.push('/');
  };

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
            <div onClick={handler1} className="trux" id="free">
              MOJ
            </div>
          </Grid>
          <Grid className={classes.hide} item xs sm md={4} lg={4}>
            <div className="trux1" id="free1">
              Instructions
            </div>
          </Grid>
          <Grid item xs sm md={4} lg={4} className={classes.top} id="free2">
            <MuiThemeProvider theme={theme}>
              <IconButton
                disableRipple
                className={classes.menu}
                onClick={handler1}
              >
                <ArrowBackIcon className="icons" />
              </IconButton>
            </MuiThemeProvider>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
