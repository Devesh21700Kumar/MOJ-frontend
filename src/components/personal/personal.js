import { React, useState, Fragment, useEffect, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//import Navbar from '../navbar/navbar';
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

const useStyles = makeStyles((theme) => ({
  margin: {
    borderBottom: '3px solid green',
  },
  card: {
    backgroundColor: ' #E7B8B8',
  },
  margi: {
    backgroundColor: '#FFD94D',
    margin: '5px',
    borderRadius: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Gin: {
    marginTop: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1,
  },
  Gin1: {
    marginTop: '12px',
    marginRight: '2rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1,
  },
  ter: {
    width: '2rem',
    height: '2rem',
    top: '2vh',
    left: '50vw',
  },
  Gi: {
    flex: 2,
  },
  rad: {
    borderRadius: '10px',
  },
  date: {
    margin: '.8rem 1rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '1rem',
  },
  krait: {
    marginLeft: '7px',
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
      marginLeft: '-6.4vw',
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

  const [det, setdet] = useState(
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
  const [ret, setret] = useState(
    Array(0).fill({
      body: 'Lorem Ipsum BTits simply dummy.',
      date: '28th Dec 2020, 2:31 a.m.',
    })
  );
  useEffect(async () => {
    try {
      let response = await axios.get(
        `https://jogwbackend.herokuapp.com/api/level0/sentmessages`,
        {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        }
      );
      var t = response.data.data;
      setret(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  useEffect(async () => {
    try {
      let response = await axios.get(
        `https://jogwbackend.herokuapp.com/api/level0/receivedmessages`,
        {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        }
      );
      var r = response.data.data;
      setdet(response.data.data);
      setGet(r);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const [get, setGet] = useState(det);

  const [color, setColor] = useState('#FFFDE8');

  const boxClick = (e) => {
    setColor('#FFFDE8');
    setColor1('#FB8989');
    setGet(det);
  };

  const [color1, setColor1] = useState('#FB8989');

  const boxClick1 = (e) => {
    setColor1('#FFFDE8');
    setColor('#FB8989');
    setGet(ret);
  };
  const [i, seti] = useState(0);
  const [x1, setX1] = useState('#C4C4C4');
  const [x2, setX2] = useState('#EF4646');
  const userdata = JSON.parse(
    window.atob(localStorage.getItem('token').split('.')[1])
  );
  const hc1 = (e) => {
    if (i > 15) {
      seti(i - 15);

      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i <= 15) {
      seti(0);
      setX1('#C4C4C4');
    }
  };
  const hc2 = (e) => {
    if (i + 15 <= get.length - 15) {
      seti(i + 15);
      setX1('#EF4646');
      setX2('#EF4646');
    } else if (get.length - (i + 15) < 15 && get.length - (i + 15) > 0) {
      seti(i + 15);
      setX2('#C4C4C4');
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
    <div className="nav">
      <SendMessagePopup
        enabled={enables}
        toggleVisibility={hit}
        key={'SendMessagePopupKey-' + enables}
      />
      <div>
        <Navbar name={userdata.name} bitsId={userdata.bitsId} />
      </div>
      <div className="set1">
        <div>
          <Box className="crux1" display="flex" bgcolor="#EF4646">
            <Box width="10%"></Box>
            <Box
              p={0.8}
              style={{ backgroundColor: color, textTransform: 'none' }}
              className="rad1"
              width="20%"
              textAlign="center"
            >
              <Button
                onClick={boxClick}
                style={{ fontWeight: '200', textTransform: 'none' }}
                size="small"
                className="margi1"
              >
                <b> Inbox</b>
              </Button>
            </Box>
            <Box bgcolor="#EF4646" width="40%"></Box>
            <Box
              p={0.8}
              style={{ backgroundColor: color1, textTransform: 'none' }}
              width="20%"
              className="rad1"
              textAlign="center"
            >
              <Button
                onClick={boxClick1}
                style={{ fontWeight: '200', textTransform: 'none' }}
                size="small"
                className="margi1"
              >
                <b>Sent</b>
              </Button>
            </Box>
            <Box width="10%"></Box>
          </Box>
        </div>

        {/*Welcome message and heading*/}
        <div id="color1">
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
          <div className="terov1">
            <Data.Provider value={{ get }}>
              <Data1.Provider value={i}>
                <PersonalCards />
              </Data1.Provider>
            </Data.Provider>
          </div>

          <div className="hexad">
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
                  style={{
                    fontWeight: '700',
                    textTransform: 'none',
                    fontFamily: 'Oxygen',
                    fontSize: '2.2vh',
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
          </div>
        </div>
        <div className="ter">
          <IconButton onClick={hit} style={{ color: '#EF4646' }}>
            <AddCircleIcon className="tera" />
          </IconButton>
        </div>
        <div className="hexad1"></div>
      </div>
    </div>
  );
}
