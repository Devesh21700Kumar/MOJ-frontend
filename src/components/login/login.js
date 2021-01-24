import axios from 'axios';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { Button } from '@material-ui/core';

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
  const classes = useStyles();
  let history = useHistory();
  const onLogoutSuccess = async (res) => {
    const isTokenExists = await localStorage.getItem('token');
    if (isTokenExists) {
      localStorage.removeItem('token');
    }
    history.push('/');
    // console.log('Logged out');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });
  // useEffect(() => {
  //   (async () => {
  //     const isTokenExists = await localStorage.getItem('token');
  //     console.log(isTokenExists);
  //     if (isTokenExists) {
  //       history.push('/home');
  //     }
  //   })();
  // }, []);

  const onSuccess = (res) => {
    let accessToken = res.accessToken;
    let email = res.profileObj.email;
    let str = email.match(/@goa.bits-pilani.ac.in/i);
    if (str === null) {
      signOut();
      alert('Please signin using BITSmail only!');
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/oauthlogin`, {
          access_token: accessToken,
          email: email,
        })
        .then(async function (response) {
          await localStorage.setItem('token', response.data.token);
          var status = response.data.ok;
          if (status) {
            // signOut();
            history.push('/home');
          } else {
            signOut();
            // history.push('/');
          }
        })
        .catch((e) => {
          alert('Please try again later');
          // console.log(e);
        });
    }
  };
  const onFailure = (err) => {
    // console.log(err);
  };

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
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{ cursor: 'pointer', textAlign: 'center' }}
            className={classes.loginButton}
          >
            <svg
              style={{ marginRight: '10px' }}
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
            Login with Google
          </Button>
        )}
      />
    </div>
  );
}

export default Login;
