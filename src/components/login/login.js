// href="https://accounts.google.com/o/oauth2/v2/auth?client_id=125310704983-vdns6gu4872lcp00dssddhvaaocbgv3j.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftender-kilby-a8e96b.netlify.app%2F&response_type=code&scope=https%3A//www.googleapis.com/auth/userinfo.email&hd=goa.bits-pilani.ac.in&prompt=consent"

import axios from 'axios';
import { Route, Redirect, useHistory } from 'react-router';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';

const clientId =
  '125310704983-vdns6gu4872lcp00dssddhvaaocbgv3j.apps.googleusercontent.com';

function Login() {
  let history = useHistory();
  const onLogoutSuccess = (res) => {
    console.log('Logged out');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });

  const onSuccess = (res) => {
    let accessToken = res.accessToken;
    let email = res.profileObj.email;
    axios
      .post('https://jogwbackend.herokuapp.com/api/user/oauthlogin', {
        access_token: accessToken,
        email: email,
      })
      .then(function (response) {
        const permissionLevel = JSON.parse(
          atob(response.data.token.split('.')[1])
        ).permissionLevel;
        localStorage.setItem('token', response.data.token);
        var status = response.data.ok;
        if (status) {
          if (permissionLevel == 0) {
            //history.push('/home');
            Redirect('/home');
          } else if (permissionLevel == 1) {
            //Redirect('/core');
            Redirect('/core');
          } else if (permissionLevel == 2) {
            //Redirect('/admin');
            Redirect('/admin');
          } else {
            signOut();
          }
        } else {
          signOut();
          history.push('/');
        }
      })
      .catch((e) => {
        alert('Please try again later');
        console.log(e);
      });
  };

  const onFailure = (err) => {
    console.log(err);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        hostedDomain="goa.bits-pilani.ac.in"
        prompt="consent"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        uxMode="redirect"
        redirectUri="https://tender-kilby-a8e96b.netlify.app/"
        render={(renderProps) => (
          <div
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{ cursor: 'pointer' }}
          >
            Login with Google
          </div>
        )}
      />
    </div>
  );
}

export default Login;
