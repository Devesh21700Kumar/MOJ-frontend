import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../login/login';
import Box from '@material-ui/core/Box';
import { LinearScale } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: '#EF4646',
  },

  mid: {
    position: 'fixed',
    width: '35vw',
    height: '25vw',
    left: '12.5vw',
    bottom: '35vh',
    background: '#FFFFFF',
  },

  message: {
    position: 'fixed',
    left: '20vw',
    top: '70vh',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '2em',
    textAlign: 'center',
    color: '#FFFDE8',
  },

  sidepane: {
    position: 'fixed',
    width: '35vw',
    height: '100vh',
    right: '0',
    background: '#FFFDE8',
    border: '0.01px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px 0px 0px 20px',
  },

  summary: {
    position: 'absolute',
    fontFamily: 'Raleway',
    top: '2em',
    right: '1em',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.5em',
    textAlign: 'right',
    color: '#000000',
  },

  loginBox: {
    position: 'absolute',
    width: '75%',
    right: '10%',
    height: '10%',
    bottom: '10vh',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.5em',
    textDecorationLine: 'none',
    background: '#FFFFFF',
    border: '0.05px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
  },
  '@media (max-width: 1000px)': {
    loginBox: {
      fontSize: '1.25em',
    },
    summary: {
      fontSize: '1.25em',
    },
    message: {
      fontSize: '1.25em',
    },
  },
  '@media (max-width: 860px)': {
    loginBox: {
      fontSize: '1em',
    },
    summary: {
      fontSize: '1em',
    },
  },
  '@media (max-width: 620px)': {
    loginBox: {
      fontSize: '1em',
    },
    summary: {
      fontSize: '0.75em',
    },
  },
  '@media (max-width: 470px)': {
    mid: {
      bottom: '70vh',
      left: '30vw',
    },
    loginBox: {
      fontSize: '1.5em',
      height: '15%',
    },
    summary: {
      fontSize: '1em',
      textAlign: 'center',
      right: '0',
      margin: '1em',
    },
    sidepane: {
      height: '50vh',
      width: '100vw',
      top: '50vh',
      right: 'auto',
      textAlign: 'center',
      borderRadius: '20px 20px 0px 0px',
    },
    message: {
      top: '40vh',
      left: '20vw',
      fontSize: '2em',
    },
    '@media(max-height: 400px)': {
      crack: {
        paddingTop:'9px',
      },
    },
    '@media(max-height: 400px)': {
      crack: {
        paddingTop:'9px',
      },
    },
  },
}));

export default function Welcome1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.main} id="main">
        <div className={classes.mid} id="mid">
          Insert Logo here // Temporary Box
        </div>
        <div className={classes.message} id="message">
          Message of Joy
        </div>
        <div className={classes.sidepane} id="sidepane">
          <div className={classes.summary} id="summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className={classes.loginBox} id="loginBox">
            <Box display="flex">
              <Box paddingLeft="1em" paddingTop="0.5em">
                <svg
                  height="5vh"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.86484 24.1726L7.4725 29.3704L2.38352 29.478C0.862656 26.6572 0 23.4297 0 20.0001C0 16.6836 0.806563 13.5561 2.23625 10.8022H2.23734L6.76797 11.6329L8.75266 16.1363C8.33727 17.3473 8.11086 18.6473 8.11086 20.0001C8.11102 21.4682 8.37695 22.8748 8.86484 24.1726Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M39.6503 16.2642C39.88 17.474 39.9998 18.7235 39.9998 20.0004C39.9998 21.4323 39.8492 22.829 39.5624 24.1763C38.5888 28.7609 36.0448 32.7642 32.5207 35.5971L32.5196 35.596L26.813 35.3049L26.0054 30.2631C28.3438 28.8917 30.1713 26.7455 31.134 24.1763H20.4395V16.2642H31.29H39.6503Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M32.5203 35.5954L32.5214 35.5965C29.094 38.3514 24.7401 39.9998 20.0005 39.9998C12.384 39.9998 5.76208 35.7427 2.38403 29.4778L8.86536 24.1724C10.5543 28.68 14.9027 31.8888 20.0005 31.8888C22.1917 31.8888 24.2445 31.2965 26.006 30.2624L32.5203 35.5954Z"
                    fill="#28B446"
                  />
                  <path
                    d="M32.7658 4.60437L26.2866 9.90875C24.4636 8.76922 22.3086 8.11094 19.9998 8.11094C14.7866 8.11094 10.3569 11.467 8.75257 16.1362L2.23718 10.8022H2.23608C5.56468 4.38461 12.2701 0 19.9998 0C24.8526 0 29.302 1.72859 32.7658 4.60437Z"
                    fill="#F14336"
                  />
                </svg>
              </Box>
              <Box className={classes.crack} paddingLeft="0.5em" paddingTop="0.5em">
                <Login />
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
