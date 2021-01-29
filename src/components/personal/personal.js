import { React, useState, Fragment, useEffect, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../personal/personal.css';
import PersonalCards from '../personal/personalcards';
import SendMessagePopup from '../letterpopup/SendMessagePopup';
export const Data = createContext();
import axios from 'axios';
export const Data1 = createContext();
import Navbar from '../navbar/navbar';
import { Redirect } from 'react-router-dom';
import URL from '../util/url';
import '../personal/loader.css';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#FFFDE8',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#EF4646',
      borderRight: '3px solid #FFFDE8',
      borderLeft: '3px solid #FFFDE8',
    },
  },
  root: {
    backgroundColor: '#EF4646',
    width: '100%',
    overflowX: 'hidden',
  },
  messages: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '0px auto 40px auto',
    minHeight: '30vh',
  },
  tab: {
    borderRadius: '10px 10px 0 0',
    width: '30%',
    textAlign: 'center',
  },
  tabButton: {
    fontWeight: '700',
    fontSize: '20px',
    textTransform: 'none',
    width: '100%',
    fontFamily: 'oxygen',
    borderRadius: '10px 10px 0 0',
  },
  tabs: {
    backgroundColor: '#EF4646',
    padding: '20px 0px 0px 10px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  tabs1: {
    backgroundColor: '#EF4646',
    padding: '10px 0px 0px 5px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  mainContent: {
    width: '100%',
    backgroundColor: '#EF4646',
    margin: '0px auto',
  },
  cA: {
    display: 'flex',
    flexDirection: 'column',
  },
  c1: {
    padding: '2rem 0rem 0rem 4rem',
    width: '92vw',
  },
  c2: {
    width: '92vw',
  },
  fab: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  fabButton: {
    position: 'fixed',
    bottom: 1,
    right: 1,
    margin: '0rem 2rem 2rem 0rem',
  },
  fabButtonIcon: {
    transform: 'scale(3)',
  },
  hot: {
    color: '#EF4646',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '2.6vmax',
  },
  hot1: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '2.2vmax',
  },
  inner: {
    backgroundColor: '#FFFDE8',
    borderRadius: '10px 10px 0 0',
    padding: '1.5rem',
    minHeight: '79.5vh',
    '@media(max-height 900px)': {
      minHeight: '72vh',
    },
  },
  footer: {
    width: '100%',
    backgroundColor: '#EF4646',
    height: '1px',
  },
  '@media(min-width: 320px)': {
    cA: {
      padding: 0,
      width: '100%',
      alignItems: 'center',
    },
    c1: {
      padding: 0,
      width: 'max-content',
      textAlign: 'center',
    },
    c2: {
      padding: 0,
      width: 'max-content',
      textAlign: 'center',
    },
    hot: {
      fontSize: '1.5rem',
    },
    hot1: {
      fontSize: '1rem',
    },
    messages: {
      minHeight: '40vh',
    },
    fabButton: {
      margin: '0rem 1rem 1rem 0rem',
    },
    fabButtonIcon: {
      transform: 'scale(2)',
    },
  },
  '@media(min-width: 360px)': {
    messages: {
      minHeight: '45vh',
    },
    fabButtonIcon: {
      transform: 'scale(3)',
    },
  },
  '@media(min-width: 414px)': {
    messages: {
      minHeight: '60vh',
    },
    fabButton: {
      margin: '0rem 2rem 2rem 0rem',
    },
    fabButtonIcon: {
      transform: 'scale(3)',
    },
  },
  '@media(min-width: 768px)': {
    cA: {
      padding: '0rem 1rem',
      width: 'max-content',
      alignItems: 'flex-start',
    },
    c1: {
      width: '92vw',
      textAlign: 'left',
    },
    c2: {
      width: '92vw',
    },
    hot: {
      paddingLeft: '2rem',
      fontSize: '2rem',
    },
    hot1: {
      fontSize: '1.5rem',
    },
    messages: {
      minHeight: '50vh',
    },
  },
  '@media(min-width: 1024px)': {
    messages: {
      minHeight: '40vh',
    },
    hot: {
      padding: '1rem 0rem 0rem 2rem',
    },
  },
}));

export default function Personal() {
  window.history.replaceState(null, null, '/home');

  const classes = useStyles();

  const token = localStorage.getItem('token');
  if (token === null) return <Redirect to="/" />;

  const [fix, setfix] = useState(0);
  const [load, setload] = useState(true);
  const [count, setcount] = useState();

  async function call1() {
    setload(true);
    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var r = await response.data.data;
      if (r.length>=15){
        setX1('#C4C4C4');
        setX2('#EF4646');
      }
      setGet([...r].reverse());
      setload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(async () => {
    setload(true);
    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var r = await response.data.data;
      if (r.length>=15){
        setX1('#C4C4C4');
        setX2('#EF4646');
      }
      setGet([...r].reverse());
      setload(false);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  async function call2() {
    setload(true);
    try {
      let response = await axios.get(`${URL}/api/level0/sentmessages`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var t = await response.data.data;
      if (t.length>=15){
        setX1('#C4C4C4');
        setX2('#EF4646');
      }
      setGet([...t].reverse());
      setload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  const [get, setGet] = useState([]);

  const [color, setColor] = useState('#FFFDE8');

  const inboxClick = () => {
    if (get.length >= 15) {
      setColor('#FFFDE8');
      setColor1('#FB8989');
      call1();
      setfix(0);
      seti(0);
      setX1('#C4C4C4');
      setX2('#EF4646');
    } else {
      setColor('#FFFDE8');
      setColor1('#FB8989');
      call1();
      seti(0);
      setfix(0);
      setX1('#C4C4C4');
      setX2('#EF4646');
    }
  };

  const [color1, setColor1] = useState('#FB8989');

  const sendClick = () => {
    if (get.length >= 15) {
      call2();
      setColor1('#FFFDE8');
      setColor('#FB8989');
      seti(0);
      setfix(1);
      setX1('#C4C4C4');
      setX2('#EF4646');
    } else {
      call2();
      setColor1('#FFFDE8');
      setColor('#FB8989');
      seti(0);
      setfix(1);
      setX1('#C4C4C4');
      setX2('#C4C4C4');
    }
  };
  const [i, seti] = useState(0);
  const [x1, setX1] = useState('#C4C4C4');
  const [x2, setX2] = useState('#EF4646');

  const userdata = JSON.parse(window.atob(token.split('.')[1]));

  const hc1 = (e) => {
    if (i > 15) {
      seti(i - 15);

      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i <= 15) {
      seti(0);
      setX1('#C4C4C4');
      setX2('#EF4646');
    }
  };
  const hc2 = (e) => {
    if (i + 15 < get.length - 15) {
      seti(i + 15);
      setX1('#EF4646');
      setX2('#EF4646');
    } else if (get.length - (i + 15) < 15 && get.length - (i + 15) > 0) {
      seti(i + 15);
      setX2('#C4C4C4');
      setX1('#EF4646');
    } else if (i + 15 == get.length - 15) {
      seti(i + 15);
      setX2('#C4C4C4');
      setX1('#EF4646');
    } else {
      seti(i);
      setX2('#C4C4C4');
    }
  };
  const [enables, setEnables] = useState(false);

  const addIconClick = () => {
    setEnables(!enables);
  };

  return (
    <Fragment>
      <div className={classes.root} id="root">
        <SendMessagePopup
          count={count}
          setcount={setcount}
          call2={call2}
          setload={setload}
          setX2={setX2}
          get={get}
          fix={fix}
          enabled={enables}
          toggleVisibility={addIconClick}
          key={'SendMessagePopupKey-' + enables}
        />
        <div className="nav1">
          <Navbar navtext="MoJ" name={userdata.name} bitsId={userdata.bitsId} />
        </div>
        <div className={classes.tabs} id="top">
          <Box className={classes.tab} style={{ backgroundColor: color }}>
            <Button
              className={classes.tabButton}
              disabled={load}
              onClick={inboxClick}
            >
              Inbox
            </Button>
          </Box>
          <Box className={classes.tab} style={{ backgroundColor: color1 }}>
            <Button
              className={classes.tabButton}
              disabled={load}
              onClick={sendClick}
            >
              Sent
            </Button>
          </Box>
        </div>

        {/*Welcome message and heading*/}

        <div className={classes.mainContent}>
          <div className={classes.fab}>
            <IconButton
              className={classes.fabButton}
              onClick={addIconClick}
              style={{ color: '#EF4646' }}
            >
              <AddCircleIcon className={classes.fabButtonIcon} id="fab" />
            </IconButton>
          </div>
          <Box className={classes.inner}>
            <Box className={classes.cA}>
              <Box className={classes.c1}>
                <Typography className={classes.hot}>
                  Welcome{' '}
                  {userdata.name
                    .split(' ')
                    .slice(0, 1)
                    .join(' ')
                    .charAt(0)
                    .toUpperCase() +
                    userdata.name
                      .split(' ')
                      .slice(0, 1)
                      .join(' ')
                      .toLowerCase()
                      .slice(1)}
                </Typography>
              </Box>

              <Box style={{ textAlign: 'center' }} className={classes.c2}>
                <Typography className={classes.hot1}>Messages</Typography>
              </Box>
            </Box>
            <div className={classes.messages}>
              <Container>
                {load ? (
                  <div className="spinwrap">
                    <div className="spinner">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                ) : (
                  <Data.Provider value={{ get }}>
                    <Data1.Provider value={i}>
                      <PersonalCards
                        fix={fix}
                        setGet={setGet}
                        setload={setload}
                      />
                    </Data1.Provider>
                  </Data.Provider>
                )}
              </Container>
            </div>

            <Grid
              container
              direction="row"
              justify="center"
              display="flex"
              alignItems="center"
            >
              <Grid item style={{ textAlign: 'center' }}>
                <svg
                  onClick={hc1}
                  width="35"
                  height="23"
                  viewBox="0 0 48 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46392e-07 11.5L47.25 22.3253L47.25 0.674681L5.46392e-07 11.5Z"
                    fill={x1}
                  />
                </svg>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  className="ken"
                  style={{
                    fontWeight: '700',
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    margin: '1vw',
                  }}
                >
                  Showing {get.length > 0 ? i + 1 : i}-
                  {i + 15 < get.length ? i + 15 : get.length} of {get.length}
                </Button>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <svg
                  onClick={hc2}
                  width="35"
                  height="23"
                  viewBox="0 0 48 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 11.5L0.749999 22.3253L0.75 0.674681L48 11.5Z"
                    fill={get.length > 15 ? x2 : x1}
                  />
                </svg>
              </Grid>
            </Grid>
          </Box>
          <div className={classes.tabs1} id="top"></div>
        </div>
        <div className={classes.footer} />
      </div>
    </Fragment>
  );
}