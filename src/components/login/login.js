import axios from 'axios';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { Button } from '@material-ui/core';
import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { GoogleLogoSVG } from '../../imageassets/google_svg.js';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  loginButton: {
    textTransform: 'none',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.2rem',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    padding: '0.7rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&:hover': {
      background: '#FFFFFF',
    },
  },
  '@media(min-width: 320px)': {
    loginButton: {
      fontSize: '14px',
      padding: '0.3rem 1rem',
    },
  },
  '@media(min-width: 768px)': {
    loginButton: {
      fontSize: '22px',
      padding: '0.5rem 1rem',
    },
  },
}));

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login() {
  const [open, setOpen] = useState(false);
  const [over, setOver] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const classes = useStyles();
  let history = useHistory();

  const onLogoutSuccess = async (res) => {
    const isTokenExists = await localStorage.getItem('token');
    if (isTokenExists) {
      await localStorage.removeItem('token');
    }
    history.push('/');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOver(false);
  };

  useEffect(() => {
    (async () => {
      const isTokenExists = await localStorage.getItem('token');
      if (!isTokenExists) {
        setDisabled(false);
      }
    })();
  }, []);

  const onSuccess = (res) => {
    let accessToken = res.accessToken;
    let email = res.profileObj.email;
    let str = email.match(/@goa.bits-pilani.ac.in/i);
    if (str === null) {
      signOut();
      setOpen(true);
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/oauthlogin`, {
          access_token: accessToken,
          email: email,
        })
        .then(async function (response) {
          var status = response.data.ok;
          if (status) {
            await localStorage.setItem('token', response.data.token);
            history.push('/home');
          } else {
            signOut();
          }
        })
        .catch((e) => {
          setOver(true);
        });
    }
  };
  const onFailure = (err) => {};

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        hostedDomain="goa.bits-pilani.ac.in"
        prompt="select_account"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        uxMode="popup"
        redirectUri={process.env.REACT_APP_REDIRECT_URI}
        disabled={disabled}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{ cursor: 'pointer', textAlign: 'center' }}
            className={classes.loginButton}
          >
            {GoogleLogoSVG}
            Login with Google
          </Button>
        )}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please signin using BITSmail only!
        </Alert>
      </Snackbar>
      <Snackbar open={over} autoHideDuration={6000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity="error">
          Something went wrong! Please try again later.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
