import React from 'react';
import '../personal/personal.css';

function Login() {
  return (
    <div>
      <div>
        <a
          style={{ textDecoration: 'none', color: 'black' }}
          href="https://accounts.google.com/o/oauth2/v2/auth?client_id=125310704983-vdns6gu4872lcp00dssddhvaaocbgv3j.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftender-kilby-a8e96b.netlify.app%2F&response_type=code&scope=https%3A//www.googleapis.com/auth/userinfo.email&hd=goa.bits-pilani.ac.in&prompt=consent"
        >
          Login with Google
        </a>
      </div>
    </div>
  );
}

export default Login;
