import { React, useState, Fragment, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './personal.css';
import Typography from '@material-ui/core/Typography';
import { Data } from '../personal/personal';
import { Data1 } from '../personal/personal';
//import { Data3 } from '../personal/personal';
//import { Data4 } from '../personal/personal';
import Button from '@material-ui/core/Button';
import ReadMessagePopup from '../letterpopup/ReadMessagePopup';
import SendMessagePopup from '../letterpopup/SendMessagePopup';

const useStyles = makeStyles((theme) => ({
  margi: {
    // border: '3px solid black',
    backgroundColor: '#FFD94D',
    margin: '5px',
    borderRadius: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '7vh',
    boxShadow: '  0 8px 6px -6px black',
  },
  Gin: {
    padding: '0 0px 0px 0px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1.1,
    marginTop: '0.87vh',
  },
  Gin1: {
    padding: '0 0px 0px 0px',
    marginRight: '0rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1.1,
    marginTop: '0.77vh',
  },

  Gi: {
    flex: 1.5,
  },
  date: {
    margin: '.8rem 0rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '1rem',
  },
  krait: {
    marginLeft: '7px',
  },
  '@media(max-height: 680px)': {
    Gin: {
      fontSize: '20px',
      marginTop: '0.32vh',
    },
    Gin1: {
      marginTop: '0.18vh',
    },
  },
  '@media(max-height: 568px)': {
    Gin: {
      fontSize: '20px',
      marginTop: '0.12vh',
    },
    Gin1: {
      marginTop: '0.08vh',
    },
  },
  '@media(max-height: 750px)': {
    Gin: {
      fontSize: '20px',
      marginTop: '0.36vh',
    },
    Gin1: {
      marginTop: '0.08vh',
    },
  },
}));

export default function PersonalCards({ text, index }) {
  const classes = useStyles();
  const { get } = useContext(Data);
  const kit = get.reverse();
  console.log(kit);
  // const pos=useContext(Data3);
  const i = useContext(Data1);
  //const vat=useContext(Data4);
  // setvat(true);
  const dateFormatter = (timestamp) => {
    var date = new Date(timestamp);
    var day = date.getDate() + 'th ';
    var month = date.toLocaleString('default', { month: 'short' }) + ' ';
    var year = date.getFullYear() + ', ';
    var time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return day + month + year + time;
  };
  const [pos, setpos] = useState(0);
  const [vat, setvat] = useState(false);
  const toggleReadMessages = (b) => {
    setvat(b);
  };
  console.log(pos);
  return (
    <Fragment>
      <ReadMessagePopup
        messageArray={get.map((obj) => {
          return [obj.body, obj.date];
        })}
        startFrom={pos}
        enabled={vat}
        toggleVisibility={toggleReadMessages}
        key={'ReadMessagePopupKey-' + vat}
      />
      {Array.isArray(get) && get.length !== 0 ? (
        kit
          .slice(i, i + 15 <= get.length ? i + 15 : get.length)
          .map((text, index) => (
            <Grid container direction={'column'}>
              <Container
                value={index}
                className={classes.margi}
                id="cross"
                //raised={true}}
              >
                <Grid
                  onClick={() => {
                    toggleReadMessages(true);
                    setpos((i / 15) * 15 + index);
                  }}
                  container
                  direction={'row'}
                  className={classes.krait}
                >
                  <Grid item xs className={classes.Gin}>
                    <p className={classes.date}>
                      {`${(i / 15) * 15 + index + 1}.  `}
                      {screen.width >= 591
                        ? text.body.slice(0, 15)
                        : text.body.slice(0, 10)}
                    </p>
                  </Grid>
                  <Grid
                    item
                    xs
                    alignContent="flex-end"
                    className={classes.Gi}
                  ></Grid>
                  <Grid item xs lg={2} className={classes.Gin1}>
                    <Typography variant="h6" edge="start">
                      <b key="index">
                        <p className={classes.date}>
                          {
                            screen.width >= 591
                              ? screen.width >= 680
                                ? dateFormatter(text.date).slice(0, 22)
                                : dateFormatter(text.date).slice(0, 19)
                              : dateFormatter(text.date).slice(0, 9)
                            //dateFormatter(text.date).slice(0,21)
                          }
                        </p>
                      </b>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          ))
      ) : (
        <h1 className="baxter">No Messages to Display !</h1>
      )}
    </Fragment>
  );
}
