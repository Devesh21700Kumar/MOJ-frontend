import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../login/login';
import Box from '@material-ui/core/Box';
import './welcome.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: '#EF4646',
  },
  Logo: {
    //zIndex: '12',
    position: 'fixed',
    width: '37vw',
    height: '25vw',
    left: '12.5vw',
    bottom: '30vh',
    background: '#FFFFFF',
  },
  hand: {
    position: 'fixed',
    width: '17vw',
    height: '16vw',
    left: '24.5vw',
    marginBottom: '2vh',
    background: '#FFFFFF',
  },
  lub: {
    position: 'fixed',
    width: '11vw',
    height: '10vw',
    left: '29.5vw',
    top: '68vh',
    //marginBottom:'-34px',
    background: '#FFFFFF',
  },
  sun: {
    position: 'fixed',
    width: '8vw',
    height: '10vw',
    left: '2.5vw',
    top: '3vh',
    background: '#FFFFFF',
  },
  envelope: {
    position: 'fixed',
    width: '13vw',
    height: '10vw',
    left: '0.5vw',
    top: '70vh',
    background: '#FFFFFF',
  },
  jump: {
    position: 'fixed',
    width: '7vw',
    height: '10vw',
    left: '52vw',
    top: '3vh',
    background: '#FFFFFF',
  },
  nirmaan: {
    position: 'fixed',
    width: '10vw',
    height: '7vw',
    left: '2.5vw',
    bottom: '1vh',
    background: '#FFFFFF',
  },
  DevSoc: {
    position: 'fixed',
    width: '13.6vmin',
    height: '10vmin',
    left: '52vw',
    bottom: '1.2vh',
    background: '#FFFFFF',
  },

  smiley: {
    position: 'fixed',
    width: '13vmin',
    height: '13vmin',
    left: '52vw',
    top: '70vh',
    background: '#FFFFFF',
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
  '@media (min-width: 1060px)': {
    loginBox: {
      fontSize: '1.25em',
    },
    summary: {
      fontSize: '1.25em',
    },
    message: {
      fontSize: '1.25em',
    },
    DevSoc: {
      bottom: '3vh',
    },
    smiley: {
      position: 'fixed',
      width: '13vmin',
      height: '13vmin',
      left: '52vw',
      top: '66vh',
      background: '#FFFFFF',
    },
    envelope: {
      position: 'fixed',
      width: '13vw',
      height: '10vw',
      left: '0.5vw',
      top: '66vh',
      background: '#FFFFFF',
    },
    lub: {
      position: 'fixed',
      width: '11vw',
      height: '10vw',
      left: '29.5vw',
      top: '66vh',
      //marginBottom:'-34px',
      background: '#FFFFFF',
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
    Logo: {
      bottom: '70vh',
      left: '30vw',
    },
    hand: {
      left: '40%',
      bottom: '79vh',
    },
    jump: {
      left: '90vw',
    },
    lub: {
      top: '28.8vh',
      left: '44.5vw',
    },
    envelope: {
      top: '33vh',
      left: '3.4vw',
    },
    smiley: {
      top: '34vh',
      left: '84vw',
    },
    nirmaan: {
      top: '42vh',
      left: '4.2vw',
    },
    DevSoc: {
      left: '82.7vw',
      top: '42vh',
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
        paddingTop: '9px',
      },
    },
    '@media(max-height: 400px)': {
      crack: {
        paddingTop: '9px',
      },
    },
    /*'@media(max-height: 470px)': {
      DevSoc:{
        right: '2.5vw',
      },
      nirmaan: {
        left: '3.5vw',
      },
    },*/
  },
}));

export default function Welcome1() {
  const classes = useStyles();
  const h1 = () => {
    <Redirect
      to={{
        pathname: '/login',
        search: '?utm=your+face',
        state: { referrer: currentLocation },
      }}
    />;
  };

  return (
    <React.Fragment>
      <div className={classes.main} id="main">
        <div className={classes.Logo} id="mid0">
          <div className="slideshow0"> </div>
        </div>
        <div className={classes.sun} id="mid1">
          <div className="slideshow1"> </div>
        </div>
        <div className={classes.jump} id="mid2">
          <div className="slideshow2"> </div>
        </div>
        <div className={classes.lub} id="mid3">
          <div className="slideshow3"> </div>
        </div>
        <div className={classes.envelope} id="mid4">
          <div className="slideshow4"> </div>
        </div>
        <div className={classes.smiley} id="mid5">
          <div className="slideshow5"> </div>
        </div>
        <div className={classes.hand} id="mid6">
          <div className="slideshow6"> </div>
        </div>
        <div className={classes.nirmaan} id="mid7">
          <div className="slideshow7"> </div>
        </div>
        <div className={classes.DevSoc} id="mid8">
          <a href="https://devsoc.club/" target="_blank">
            <div className="slideshow8"> </div>
          </a>
        </div>
        <div className={classes.sidepane} id="sidepane">
          <div className={classes.summary} id="summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>

                <Login />
        </div>
      </div>
    </React.Fragment>
  );
}
