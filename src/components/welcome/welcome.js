import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../login/login';
import Box from '@material-ui/core/Box';
import sun from '../../imageassets/sun.png';
import happy from '../../imageassets/hafdfppy 1.png';
import letter from '../../imageassets/letter.png';
import smiley from '../../imageassets/happy 1.png';
import nirmanLogo from '../../imageassets/nirmaan.png';
import devSocLogo from '../../imageassets/DevSoc.png';
import Logo from '../../imageassets/MOJ Logo 1.png';
import hands from '../../imageassets/hands.png';
import love from '../../imageassets/love 1.png';
import '../welcome/welcome.css';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100vw',
    height: '100vh',
    background: '#EF4646',
    display: 'flex',
  },
  sidepane: {
    width: '30vw',
    background: '#FFFDE8',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px 0px 0px 20px',
    padding: '3rem 1rem',
  },
  sidepaneContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  summary: {
    fontFamily: 'Raleway',
    width: '90%',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    textAlign: 'left',
    color: '#000000',
  },
  images: {
    width: '70vw',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    gridGap: '10px',
    padding: '10px',
    margin: '1rem',
  },
  middle: {
    gridArea: '1 / 2 / 5 / 5',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    width: 600,
  },
  handImage: {
    width: 80,
  },
  loveImage: {
    width: 60,
  },
  sun: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunImage: {
    width: 80,
  },
  happyMan: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  happyImage: {
    width: 80,
  },
  letter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterImage: {
    width: 80,
  },
  smiley: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smileyImage: {
    width: 80,
  },
  nirman: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nirmanLogo: {
    width: 120,
  },
  devSoc: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  devSocLogo: {
    width: 120,
  },
  '@media(min-width: 0px)': {
    main: {
      flexDirection: 'column',
      flexGrow: 1,
      width: 'max-content',
      height: 'max-content',
    },
    images: {
      width: '100vw',
      minHeight: '60vh',
      padding: 0,
      gridGap: 0,
      margin: 0,
    },
    sidepane: {
      width: '100vw',
      height: '40vh',
      borderRadius: '20px 20px 0px 0px',
      padding: '20px 0px',
    },
    sidepaneContent: {
      width: '90%',
      margin: 'auto',
    },
    summary: {
      fontSize: '12px',
      textAlign: 'center',
    },
    sunImage: {
      width: 25,
    },
    happyImage: {
      width: 25,
    },
    mainLogo: {
      width: 200,
    },
    handImage: {
      width: 25,
    },
    loveImage: {
      width: 20,
    },
    letterImage: {
      width: 25,
    },
    smileyImage: {
      width: 25,
    },
    nirmanLogo: {
      width: 50,
    },
    devSocLogo: {
      width: 50,
    },
  },
  '@media(min-width: 375px)': {
    mainLogo: {
      width: 250,
    },
    summary: {
      fontSize: '14px',
    },
  },
  '@media(min-width: 411px)': {
    mainLogo: {
      width: 300,
    },
    summary: {
      fontSize: '16px',
    },
  },
  '@media(min-width: 768px)': {
    sunImage: {
      width: 50,
    },
    happyImage: {
      width: 50,
    },
    mainLogo: {
      width: 450,
    },
    handImage: {
      width: 50,
    },
    loveImage: {
      width: 40,
    },
    letterImage: {
      width: 50,
    },
    smileyImage: {
      width: 50,
    },
    nirmanLogo: {
      width: 100,
    },
    devSocLogo: {
      width: 100,
    },
    summary: {
      fontSize: '20px',
    },
    crack: {
      marginTop: '8px',
    },
  },
  '@media(min-width: 1024px)': {
    main: {
      flexDirection: 'row',
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    images: {
      width: '70vw',
      height: '100vh',
      gridGap: '10px',
      margin: 0,
    },
    sunImage: {
      width: 80,
    },
    happyImage: {
      width: 80,
    },
    handImage: {
      width: 80,
    },
    loveImage: {
      width: 60,
    },
    letterImage: {
      width: 80,
    },
    smileyImage: {
      width: 80,
    },
    nirmanLogo: {
      width: 120,
    },
    devSocLogo: {
      width: 120,
    },
    sidepane: {
      width: '30vw',
      height: '100vh',
      background: '#FFFDE8',
      borderRadius: '20px 0px 0px 20px',
      padding: 0,
    },
    sidepaneContent: {
      width: '95%',
      height: '100vh',
      padding: 0,
    },
    summary: {
      fontSize: '22px',
      textAlign: 'left',
    },
  },
}));

export default function Welcome1() {
  const classes = useStyles();
  let history = useHistory();
  const addIconClick = () => {
    history.push('/instructionslanding');
  };

  return (
    <React.Fragment>
      <div className={classes.main} id="main">
        <div className={classes.images}>
          <div className={classes.sun}>
            <img src={sun} alt="sun" className={classes.sunImage} />
          </div>
          <div className={classes.happyMan}>
            <img src={happy} alt="happy" className={classes.happyImage} />
          </div>
          <div className={classes.empty}></div>
          <div className={classes.empty}></div>
          <div className={classes.letter}>
            <img src={letter} alt="letter" className={classes.letterImage} />
          </div>
          <div className={classes.smiley}>
            <img src={smiley} alt="smiley" className={classes.smileyImage} />
          </div>
          <div className={classes.empty}></div>
          <div className={classes.middle}>
            <img src={hands} alt="hands" className={classes.handImage} />
            <img src={Logo} alt="Moj" className={classes.mainLogo} />
            <img src={love} alt="love" className={classes.loveImage} />
          </div>
          <div className={classes.empty}></div>
          <div className={classes.nirman} id="nirman">
            <a
              href="https://instagram.com/nirmaangoa?igshid=5bld8fkffclm"
              target="_blank"
            >
              <img
                src={nirmanLogo}
                alt="nirman"
                className={classes.nirmanLogo}
              />
            </a>
          </div>
          <div className={classes.empty}></div>
          <div className={classes.empty}></div>
          <div className={classes.empty}></div>
          <div className={classes.devSoc} id="devsoc">
            <a href="https://devsoc.club/" target="_blank">
              <img
                src={devSocLogo}
                alt="DevSoc"
                className={classes.devSocLogo}
              />
            </a>
          </div>
        </div>
        <div className={classes.sidepane} id="sidepane">
          <div className={classes.sidepaneContent}>
            <div className={classes.summary} id="summary">
              Welcome to Message of Joy!{' '}
              <b>
                <a
                  className="nostyle"
                  href="https://instagram.com/nirmaangoa?igshid=5bld8fkffclm"
                  target="_blank"
                  style={{ color: '#003C78' }}
                >
                  Nirmaan
                </a>
              </b>
              , in collaboration with{' '}
              <b>
                <a
                  className="nostyle"
                  href="https://devsoc.club/"
                  target="_blank"
                >
                  Developers' Society BITS Goa(DevSoc)
                </a>
              </b>{' '}
              is back with one of it's most exquisite events, Message of Joy.
              Amidst the online semester, here's an opportunity to write a few
              words to bring a smile on someone's face. So log in now and send
              personalised, <b>anonymous</b> messages to your friends,
              classmates and peers from the comfort of your home! <br></br>
              <b style={{ color: '#EF4646' }}>
                {' '}
                (Note: Log in with your BITS email ID)
              </b>
              <br></br>
            </div>
            <div className={classes.loginBox} id="loginBox">
              <Box display="flex">
                <Box>
                  <Login />
                </Box>
                <Box className={classes.crack}>
                  <IconButton
                    style={{ color: '#EF4646' }}
                    onClick={addIconClick}
                  >
                    <HelpIcon className={classes.fabButtonIcon1} />
                  </IconButton>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
