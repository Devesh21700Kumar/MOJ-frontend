import { React, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//import Navbar from '../navbar/navbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//import '../navbar/navbar.css';
import '../personal/personal.css';
import PersonalCards from '../personal/personalcards';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
  },
  auto: {},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  margin: {
    borderBottom: '3px solid green',
  },
  card: {
    backgroundColor: ' #E7B8B8',
  },
  margi: {
    // border: '3px solid black',
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
    //background: '#EF4646',
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
    fontSize: '4.3vmin',
  },
  hot1: {
    fontFamily: 'Oxygen',
    height: '3vh',
    fontWeight: 'bold',
    fontSize: '3.1vmin',
  },
}));

export default function Personal({ name, bitsId }, props) {
  const classes = useStyles();

  const [det, setdet] = useState(
    Array(50).fill(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    )
  );
  const [ret, setret] = useState(
    Array(50).fill(
      "Lorem tting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    )
  );
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

  const hc1 = (e) => {
    if (i > 15) {
      seti(i - 15);

      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i <= 15) {
      seti(0);
      setX1('#C4C4C4');
    }
    console.log(i);
  };
  const hc2 = (e) => {
    console.log(i);

    if (i < 15) {
      seti(i + 15);
      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i >= 15) {
      seti(30);
      setX2('#C4C4C4');
    }

    console.log(i);
  };
  return (
    <Fragment>
      {/*<Navbar/>*/}
      <div className="set1">
        <div className="crux1">
          <Box display="flex" bgcolor="#EF4646">
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
                size="large"
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
              flexShrink={1}
            >
              <Button
                onClick={boxClick1}
                style={{ fontWeight: '200', textTransform: 'none' }}
                size="large"
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
          <Box className="c1">
            <Typography className={classes.hot}>Welcome Nipun </Typography>
          </Box>
          <Box textAlign="center">
            <Typography className={classes.hot1}>Messages</Typography>
          </Box>
          {/*Container to show all messages   */}
          <div className="terov1">
            {get.slice(i, i < 25 ? i + 15 : i + 10).map((text, index) => (
              <PersonalCards text={text} index={index} />
            ))}
          </div>
          <div className="ter">
            <IconButton style={{ color: '#EF4646' }}>
              <AddCircleIcon className="tera" />
            </IconButton>
          </div>
          <div className="hexad">
            <Grid
              container
              direction="row"
              justify="center"
              display="flex"
              alignItems="center"
            >
              <Grid item marginLeft="21vw" marginTop="9px" textAlign="center">
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
                  Showing {i}-{i < 26 ? i + 15 : i + 10} of {det.length}
                </Button>
              </Grid>
              <Grid item textAlign="center" marginTop="9px">
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
                    fill={x2}
                  />
                </svg>
              </Grid>
            </Grid>
          </div>
          <div className="hexad1"></div>
        </div>
      </div>
    </Fragment>
  );
}
