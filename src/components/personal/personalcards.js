import { React, useState, Fragment, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './personal.css';
import URL from '../util/url';
import Typography from '@material-ui/core/Typography';
import { Data } from '../personal/personal';
import { Data1 } from '../personal/personal';
import Button from '@material-ui/core/Button';
import ReadMessagePopup from '../letterpopup/ReadMessagePopup';
import SendMessagePopup from '../letterpopup/SendMessagePopup';
import axios from 'axios';
import { sum } from 'lodash';

const useStyles = makeStyles((theme) => ({
  msgCard: {
    padding: '15px',
    marginTop: '20px',
    backgroundColor: '#FFD94D',
    borderRadius: '15px',
    transition: 'all ease-in-out 0.3s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
  },
  msgCardR: {
    padding: '8px 15px 15px 15px',
    marginTop: '20px',
    backgroundColor: '#FFD94D',
    borderRadius: '15px',
    transition: 'all ease-in-out 0.3s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
  },
  msgCard1: {
    padding: '15px',
    marginTop: '20px',
    backgroundColor: '#FFE171',
    borderRadius: '15px',
    transition: 'all ease-in-out 0.3s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
  },
  Gin: {
    padding: '0 0px 0px 0px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1,
  },
  Gin1: {
    padding: '0 0px 0px 0px',
    marginRight: '0rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1,
  },

  Gi: {
    flex: 1,
  },
  date: {
    margin: '.8rem 0rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '0.7rem',
    fontStyle: 'italic',
    fontWeight: 300,
  },
  msgtxt: {
    margin: '.8rem 0rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  date1: {
    margin: '.8rem 0rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '0.94rem',
    fontWeight: 'bold',
  },
  krait: {
    marginLeft: '7px',
  },
  bitsId: {
    fontSize: '12px',
    fontFamily: 'Oxygen, sans-serif',
    fontWeight: 400,
    padding: 0,
    marginTop: '10px',
  },
  noMessages: {
    color: '#FC0404',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Oxygen, sans serif',
  },
  '@media(min-width: 780px)': {
    bitsId: {
      fontSize: '18px',
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 700,
      padding: 0,
      marginTop: '10px',
      fontWeight: 400,
    },
    msgtxt: {
      margin: '.8rem 0rem 0 0',
      fontFamily: 'oxygen',
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    date: {
      margin: '.8rem 0rem 0 0',
      fontFamily: 'oxygen',
      fontStyle: 'italic',
      fontSize: '0.9rem',
      fontWeight: 300,
    },
    date1: {
      margin: '.8rem 0rem 0 0',
      fontFamily: 'oxygen',
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    noMessages: {
      color: '#FC0404',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Oxygen, sans serif',
    },
    '@media(max-height: 680px)': {
      Gin: {
        fontSize: '20px',
      },
    },
    '@media(max-height: 568px)': {
      Gin: {
        fontSize: '20px',
      },
    },
    '@media(max-height: 750px)': {
      Gin: {
        fontSize: '20px',
      },
    },
    '@media(max-width: 320px)': {
      noMessages: {
        color: '#FC0404',
        fontSize: '1.5rem',
      },
    },
    '@media(max-width: 780px)': {
      noMessages: {
        color: '#FC0404',
        fontSize: '2rem',
      },
    },
  },
}));

export default function PersonalCards({ text, index, fix, setGet, setload }) {
  const classes = useStyles();
  const { get } = useContext(Data);
  const i = useContext(Data1);
  const dateFormatter = (timestamp) => {
    var date = new Date(timestamp);
    var day =
      date.getDate() == 1
        ? date.getDate() + 'st  '
        : date.getDate() == 2
        ? date.getDate() + 'nd  '
        : date.getDate() == 3
        ? date.getDate() + 'rd  '
        : date.getDate() == 21
        ? date.getDate() + 'st  '
        : date.getDate() == 22
        ? date.getDate() + 'nd  '
        : date.getDate() == 23
        ? date.getDate() + 'rd  '
        : date.getDate() + 'th ';
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
  function displayname(x) {
    var y = '';
    for (var i = 0; i < 3; i++) {
      var y =
        y +
        x
          .split(' ')
          .slice(i, i + 1)
          .join(' ')
          .charAt(0)
          .toUpperCase() +
        x
          .split(' ')
          .slice(i, i + 1)
          .join(' ')
          .toLowerCase()
          .slice(1) +
        ' ';
    }
    return y;
  }

  async function postRead(i, index) {
    if (get[(i / 15) * 15 + index].read == 0) {
      try {
        const response = await (
          await fetch(`${URL}/api/level0/markasread`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ id: get[(i / 15) * 15 + index]._id }),
          })
        ).json();
        if (response.ok) {
        }
      } catch (error) {
        console.error(error.message);
      }
      try {
        let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        });
        var r = await response.data.data;
        setGet([...r].reverse());
      } catch (error) {
        console.error(error.message);
      }
    }

    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${localStorage.getItem('token')}` },
      });
      var r = await response.data.data;
      setGet([...r].reverse());
    } catch (error) {
      console.error(error.message);
    }
  }

  if (fix == 0) {
    return (
      <Fragment>
        <ReadMessagePopup
          fix={fix}
          get={get}
          setload={setload}
          setGet={setGet}
          messageArray={get.map((obj) => {
            return [obj.body, obj.date, obj._id, obj.read];
          })}
          startFrom={pos}
          enabled={vat}
          toggleVisibility={toggleReadMessages}
          key={'ReadMessagePopupKey-' + vat}
        />
        {Array.isArray(get) && get.length !== 0 ? (
          get
            .slice(i, i + 15 <= get.length ? i + 15 : get.length)
            .map((text, index) => (
              <Card
                className={text.read == 1 ? classes.msgCardR : classes.msgCard1}
                raised={true}
                key={(i / 15) * 15 + index}
                onClick={async () => {
                  await setpos((i / 15) * 15 + index);
                  await toggleReadMessages(true);
                  await postRead(i, index);
                }}
              >
                <div className={classes.bitsId}></div>
                <div className={classes.Gin}>
                  <p
                    className={text.read == 1 ? classes.msgtxt : classes.date1}
                  >
                    {screen.width >= 591
                      ? screen.width >= 680
                        ? text.body.slice(0, 72)
                        : text.body.slice(0, 44)
                      : text.body.slice(0, 30)}
                    <b>.....</b>
                  </p>
                </div>

                <div className={classes.Gin1}>
                  <Typography variant="h6" edge="start">
                    <b key="index">
                      <p className={classes.date}>
                        {/*screen.width >= 591
                          ? screen.width >= 680
                            ? dateFormatter(text.date)
                            : dateFormatter(text.date)
                          : dateFormatter(text.date)
                        */}
                      </p>
                    </b>
                  </Typography>
                </div>
              </Card>
            ))
        ) : (
          <h1 className={classes.noMessages}>No Messages to Display!</h1>
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <ReadMessagePopup
          fix={fix}
          setload={setload}
          messageArray={get.map((obj) => {
            return [obj.body, obj.date];
          })}
          startFrom={pos}
          enabled={vat}
          toggleVisibility={toggleReadMessages}
          key={'ReadMessagePopupKey-' + vat}
        />
        {Array.isArray(get) && get.length !== 0 ? (
          get
            .slice(i, i + 15 <= get.length ? i + 15 : get.length)
            .map((text, index) => (
              <Card
                className={classes.msgCard}
                raised={true}
                key={index}
                onClick={async () => {
                  await setpos((i / 15) * 15 + index);
                  await toggleReadMessages(true);
                }}
              >
                <div className={classes.bitsId}>
                  To
                  {text.name != null
                    ? ' ' + displayname(text.name)
                    : //text.name
                      ' ' + displayname('somebody')}
                </div>
                <div className={classes.Gin}>
                  <p className={classes.msgtxt}>
                    {screen.width >= 591
                      ? screen.width >= 680
                        ? text.body.slice(0, 43)
                        : text.body.slice(0, 31)
                      : text.body.slice(0, 23)}
                    <b>.....</b>
                  </p>
                </div>

                <div className={classes.Gin1}>
                  <Typography variant="h6" edge="start">
                    <p className={classes.date}>
                      {screen.width >= 591
                        ? screen.width >= 680
                          ? dateFormatter(text.date)
                          : dateFormatter(text.date)
                        : dateFormatter(text.date)}
                    </p>
                  </Typography>
                </div>
              </Card>
            ))
        ) : (
          <h1 className={classes.noMessages}>No Messages to Display!</h1>
        )}
      </Fragment>
    );
  }
}
