import axios from 'axios';
import { Route, Redirect, useHistory } from 'react-router-dom';
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
        localStorage.setItem('token', response.data.token);
        var status = response.data.ok;
        if (status) {
          signOut();
          history.push('/home');
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
        prompt="select_account"
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
            {screen.width > 610 ? 'Login with Google' : 'Google Login'}
          </div>
        )}
      />
    </div>
  );
}

export default Login;
