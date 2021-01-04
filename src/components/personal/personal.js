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
  root: {
    backgroundColor: '#fffde8',
    width: '100%',

    flexGrow: '1',
    overflowX: 'hidden',
    '*::-webkit-scrollbar': {
      width: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#EF4646',
      borderRadius: '10px',
    },
  },
  messages: {
    width: '100%',
    padding: '10px',
    margin: '0px auto 40px auto',
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
  mainContent: {
    width: '100%',
    backgroundColor: '#EF4646',
    marginTop: '0vh',
  },
  hot: {
    color: '#EF4646',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '3.3vmax',
    marginLeft: '3.7vw',
  },
  hot1: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '2.8vmax',
  },
  inner: {
    backgroundColor: '#FFFDE8',
    borderRadius: '20px 20px 0 0',
    padding: '1.5rem',
    minHeight: '80vh',
  },

  '@media(min-width: 560px)': {
    hot: {
      fontSize: '34px',
    },
    hot1: {
      fontSize: '28px',
      marginLeft: '-6.4vw',
    },
  },
  '@media(max-width: 520px)': {
    hot: {
      fontSize: '20px',
    },
    hot1: {
      fontSize: '16px',
      marginLeft: '-4.4vw',
    },
  },
  '@media(max-width: 320px)': {
    hot: {
      fontSize: '20px',
    },
    hot1: {
      fontSize: '16px',
      marginLeft: '-2.4vw',
    },
  },
  '@media(min-width: 920px)': {
    hot: {
      marginLeft: '5.2vw',
    },
    hot1: {
      marginLeft: '-6.4vw',
    },
  },
  '@media(min-width: 1200px)': {
    hot: {
      marginLeft: '6.2vw',
    },
    hot1: {
      marginLeft: '-6.9vw',
    },
  },
}));

export default function Personal({ name, bitsId }, props) {
  window.history.replaceState(null, null, '/home');
  const classes = useStyles();
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const [rec, setrec] = useState(
    Array(0).fill({
      body: 'Lorem Ipsum BTits simply dummy.',
      date: '28th Dec 2020, 2:31 a.m.',
    })
  );
  const [sent, setsent] = useState(
    Array(0)
      .fill({
        body: 'Lorem Ipsum is simply dummy.',
        date: ' 28th Dec 2020, 2:31 a.m.',
      })
      .map((obj) => {
        return {
          body: obj.body + Math.random(),
          date: obj.data + Math.random(),
        };
      })
  );
  const [load, setload] = useState(true);

  async function call1() {
    setload(true);
    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var r = await response.data.data;
      setload(false);
      //console.log(r);
      setrec([...r].reverse());
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
      setload(false);
      //console.log(r);
      setGet([...r].reverse());
      setrec([...r].reverse());
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
      setload(false);
      setsent([...t].reverse());
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    call2();
  }, []);

  const [get, setGet] = useState(rec);

  const [color, setColor] = useState('#FFFDE8');

  const boxClick = () => {
    if (rec.length >= 15) {
      setColor('#FFFDE8');
      setColor1('#FB8989');
      call1();
      setGet(rec);
      seti(0);
      setX1('#C4C4C4');
      setX2('#EF4646');
    } else {
      setColor('#FFFDE8');
      setColor1('#FB8989');
      call1();
      setGet(rec);
      seti(0);
      setX1('#C4C4C4');
      setX2('#C4C4C4');
    }
  };

  const [color1, setColor1] = useState('#FB8989');

  const boxClick1 = () => {
    if (sent.length >= 15) {
      call2();
      setColor1('#FFFDE8');
      setColor('#FB8989');
      seti(0);
      setGet(sent);
      //console.log(sent.length);
      setX1('#C4C4C4');
      setX2('#EF4646');
    } else {
      call2();
      setColor1('#FFFDE8');
      setColor('#FB8989');
      setGet(sent);
      seti(0);
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
  const hit = () => {
    setEnables(!enables);
  };

  return (
    <Fragment>
      <div className={classes.root} id="root">
        <SendMessagePopup
          enabled={enables}
          toggleVisibility={hit}
          key={'SendMessagePopupKey-' + enables}
        />
        <div className="nav1">
          <Navbar name={userdata.name} bitsId={userdata.bitsId} />
        </div>
        <div className={classes.tabs} id="top">
          <Box
            className={classes.tab}
            style={{ backgroundColor: color }}
            onClick={boxClick}
          >
            <Button className={classes.tabButton}>Inbox</Button>
          </Box>
          <Box
            className={classes.tab}
            style={{ backgroundColor: color1 }}
            onClick={boxClick1}
          >
            <Button className={classes.tabButton}>Sent</Button>
          </Box>
        </div>

        {/*Welcome message and heading*/}

        <div className={classes.mainContent}>
          <div class="ter">
            <IconButton
              className="ter"
              onClick={hit}
              style={{ color: '#EF4646' }}
            >
              <AddCircleIcon className="tera" />
            </IconButton>
          </div>
          <Box className={classes.inner}>
            <Box display="flex" className="cA">
              <Box width="35%" className="c1">
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

              <Box width="15%" textAlign="center" className="c2">
                <Typography className={classes.hot1}>Messages</Typography>
              </Box>
            </Box>
            <div className={classes.messages}>
              <Container>
                {load ? (
                  <div className="spinwrap">
                    <div class="spinner">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                ) : (
                  <Data.Provider value={{ get }}>
                    <Data1.Provider value={i}>
                      <PersonalCards />
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
                  width="48"
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
              <Grid item textAlign="center">
                <Button
                  className="ken"
                  style={{
                    fontWeight: '700',
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    //fontSize: '2.2vh',
                    margin: '1vw',
                  }}
                >
                  Showing {i}-{i + 15 < get.length ? i + 15 : get.length} of{' '}
                  {get.length}
                </Button>
              </Grid>
              <Grid item textAlign="center">
                <svg
                  onClick={hc2}
                  width="48"
                  height="23"
                  viewGrid="0 0 48 23"
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
        </div>
      </div>
    </Fragment>
  );
}
