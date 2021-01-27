import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import './LetterPopup.css';
import './sendmessage.css';
import URL from '../util/url';
import data from '../util/newData';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import img from './../../imageassets/letter-coloured.svg';
import axios from 'axios';
import MailIcon from '@material-ui/icons/Mail';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  typography: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '2px',
  },
  menu: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '22.5px',
  },
  orange: {
    color: theme.palette.getContrastText('#aa11ff'),
    backgroundColor: '#aa11ff',
  },
  noMessages: {
    //margin: 'auto',
    position: 'relative',
    Top: '50vh',
    Left: '50vw',
  },
  '@media(min-width: 1100px)': {
    menu: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(0.5),
      float: 'right',
      width: '2rem',
      height: '2rem',
      marginTop: '2.7vh',
      paddingRight: '45.5px',
    },
  },
  hexap: {
    maxHeight: '40vh',
    width: 'max-content',
    maxWidth: '300px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
}));
export default function SendMessagePopup({
  enabled,
  toggleVisibility,
  call2,
  get,
  fix,
  setX2,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const id = open1 ? 'simple-popover' : undefined;
  const [messageBody, setMessageText] = useState('');
  const [receiverEmail, setSendMail] = useState('');
  const [name, setSendToName] = useState('');
  const [componentEnabled, setComponentEnabled] = useState(enabled);
  const [open, setOpen] = React.useState(false);
  const [spinner, setSpinner] = useState(true);
  const [over, setOver] = useState(false);
  const [r, setr] = useState();
  const token = localStorage.getItem('token');
  const data1 = data.sort((a, b) => (a.name > b.name ? 1 : -1));
  const [presentViewportWidth, setPresentViewPortWidth] = useState(0);
  const [presentViewportHeight, setPresentViewPortHeight] = useState(0);
  const [disableSend, setDisableSend] = useState(false);

  if (token === null) return <Redirect to="/" />;

  React.useEffect(async () => {
    await setComponentEnabled(enabled);
    await getremain();
    await setTimeout(() => setSpinner(false), 1500);
  }, [enabled]);

  useEffect(async () => {
    try {
      let response = await axios.get(`${URL}/api/level0/remainquant`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var t = await response.data.remaining;
      setr(t);
      if (t == 0) {
        setOver(true);
      }
      //console.log(t);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  async function getremain() {
    try {
      let response = await axios.get(`${URL}/api/level0/remainquant`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var t = await response.data.remaining;
      setr(t);
      //console.log(t);
    } catch (error) {
      console.error(error.message);
    }
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    const date = Date.now();
    async function postMessage() {
      //setDisableSend(true);
      try {
        setDisableSend(true);
        const response = await (
          await fetch(`${URL}/api/level0/sendmessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ messageBody, receiverEmail, date }),
          })
        ).json();
        if (response.ok) {
          setDisableSend(false);
          setOpen(true);
          call2();
          if (fix == 1 && get.length > 0 && get.length % 15 == 0) {
            setX2('#EF4646');
          }
          setSendToName('');
          setSendMail('');
          setMessageText('');
          getremain('');
        } else {
          setDisableSend(false);
          setOpen(false);
          if (r == 0) {
            setOver(true);
          }
        }
      } catch (error) {
        setDisableSend(false);
        console.error(error.message);
      }
    }
    postMessage();
  };

  let calculateTextAreaRows = () => {
    let rows = 0;
    if (screen.width > 768) rows = parseInt((screen.height * 7.5) / 1080);
    else rows = parseInt((screen.height * 2) / 768);
    return rows;
  };

  let calculateTextAreaRows1 = () => {
    let rows = 0;
    if (screen.width > 768) rows = parseInt((screen.height * 7.5) / 1080);
    else rows = parseInt((screen.height * 2) / 768);
    return rows;
  };

  let hideMe = () => {
    toggleVisibility();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOver(false);
  };

  const [c1, setc1] = useState('none');
  const [c2, setc2] = useState('inline');
  const [c3, setc3] = useState(true);

  const handleClick = () => {
    if (c1 == 'none' && c2 == 'inline') {
      setc1('inline');
      setc2('none');
    } else if (c1 == 'inline' && c2 == 'none') {
      setc1('none');
      setc2('inline');
    }
  };

  const showme = () => {
    setc3(!c3);
    setSendToName('');
    setMessageText('');
    setSendMail('');
  };

  const handleClose2 = () => {
    setc1('none');
    setc2('inline');
  };

  const handleClick2 = () => {
    setc1('inline');
    setc2('none');
  };

  const handleClick3 = () => {
    setc1('inline');
    setc2('none');
  };

  function checkspace(dat) {
    return (dat = dat.split(/\s+/)[0].concat(' ', dat.split(/\s+/)[1]));
  }

  useEffect(() => {
    setPresentViewPortWidth(window.innerWidth);
    setPresentViewPortHeight(window.innerHeight);
  }, [presentViewportWidth, presentViewportHeight]);

  const getCSSVariables = () => {
    return {
      '--this-width-var': `${presentViewportWidth}px`,
      '--this-height-var': `${presentViewportHeight}px`,
    };
  };
  if (componentEnabled) {
    if (window.innerWidth > 760) {
      return (
        <div className="letterpopup-classes-root" style={getCSSVariables()}>
          {spinner ? (
            <CircularProgress
              className="letterpopup-classes-cross2"
              style={{ color: '#fffbeb' }}
            />
          ) : (
            <div className="letterpopup-classes-cross" onClick={hideMe} />
          )}
          <div className="letterpopup-classes-icon1" style={{}}>
            <Paper>
              <div
                style={{
                  display: !messageBody.length > 0 ? 'none' : 'inline',
                }}
              >
                <IconButton>
                  <SortByAlphaIcon
                    style={{ paddingRight: '1rem', color: '#EF4646' }}
                  />
                  {2000 - messageBody.length}
                </IconButton>
              </div>
              {/*<Divider/>*/}
              <div
                style={{
                  display: messageBody.length > 0 ? 'none' : 'inline',
                }}
              >
                <IconButton>
                  <MailIcon
                    style={{ paddingRight: '1rem', color: '#EF4646' }}
                  />
                  {''}
                  {r}
                </IconButton>
              </div>
            </Paper>
          </div>

          <Paper
            style={
              c3
                ? { display: 'block', backgroundImage: `url(${img})` }
                : { display: 'none', backgroundImage: `url(${img})` }
            }
            elevation={0}
            className="letterpopup-classes-message"
          >
            {spinner ? (
              <div></div>
            ) : (
              <React.Fragment>
                <form
                  className="letterpopup-classes-form"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="letterpopup-classes-messageBoxesWrapper">
                    <div
                      className="letterpopup-classes-sendTo"
                      style={{ display: 'flex' }}
                    >
                      <div style={{ display: c2 }}>
                        <IconButton
                          onClick={handleClick}
                          style={{ marginLeft: '-35%', marginTop: '-14%' }}
                        >
                          <SearchIcon />
                        </IconButton>
                      </div>
                      <div style={{ display: c1 }}>
                        <IconButton
                          onClick={handleClick}
                          style={{ marginLeft: '-35%', marginTop: '-14%' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>
                      <div className="letterpopup-classes-sendToTextFieldWrapper">
                        <TextField
                          className="letterpopup-classes-sendToTextFieldWrapper"
                          value={name}
                          onClick={handleClick3}
                          onChange={(e) => {
                            //handleClick2();
                            setSendToName(e.target.value);
                            //setSendMail(e.target.value);
                            handleClick2();
                          }}
                          placeholder="Who is this for?"
                        />
                      </div>
                    </div>
                    <Paper className={classes.hexap} elevation={3}>
                      <List
                        style={{ display: c1, width: '100%' }}
                        elevation={3}
                        component="nav"
                        className={classes.hexap}
                        aria-label="notifications"
                      >
                        {data1.filter(
                          (dataset) =>
                            dataset.name
                              .toLowerCase()
                              .includes(name.toLowerCase()) ||
                            dataset.bitsId
                              .toLowerCase()
                              .includes(name.toLowerCase()) ||
                            dataset.name.toLowerCase() === name.toLowerCase() ||
                            checkspace(dataset.name)
                              .toLowerCase()
                              .includes(name.toLowerCase()) ||
                            dataset.email.includes(name.toLowerCase())
                        ).length > 0 ? (
                          data1
                            .filter(
                              (dataset) =>
                                dataset.name
                                  .toLowerCase()
                                  .includes(name.toLowerCase()) ||
                                dataset.bitsId
                                  .toLowerCase()
                                  .includes(name.toLowerCase()) ||
                                dataset.name.toLowerCase() ===
                                  name.toLowerCase() ||
                                checkspace(dataset.name)
                                  .toLowerCase()
                                  .includes(name.toLowerCase()) ||
                                dataset.email.includes(name.toLowerCase())
                            )
                            .slice(0, 101)
                            .map((person, index) => (
                              <ListItem
                                key={index}
                                button
                                onClick={() => {
                                  setSendToName(person.name);
                                  setSendMail(person.email);
                                  handleClose2();
                                }}
                              >
                                <ListItemText
                                  primary={person.name}
                                  secondary={person.email}
                                />
                              </ListItem>
                            ))
                        ) : (
                          <ListItem
                            button
                            onClick={() => {
                              handleClose2();
                            }}
                          >
                            <ListItemText primary="          " />
                          </ListItem>
                        )}
                      </List>
                    </Paper>
                    <div
                      style={{ display: c2 }}
                      className="letterpopup-classes-messageBody"
                    >
                      <TextField
                        multiline
                        inputProps={{ maxLength: 2000 }}
                        className="letterpopup-classes-messageTextField"
                        value={messageBody}
                        onChange={(e) => {
                          setMessageText(e.target.value);
                        }}
                        variant="outlined"
                        rows={calculateTextAreaRows()}
                      />
                    </div>
                  </div>
                  <div
                    style={{ display: c2 }}
                    className="letterpopup-classes-sendButton"
                  >
                    <Button
                      variant="outlined"
                      type="submit"
                      disabled={disableSend}
                      style={{
                        borderRadius: '20px',
                        color: 'white',
                        backgroundColor: '#EF4646',
                        border: '1.5px solid black',
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </Paper>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Message Sent successfully!!
            </Alert>
          </Snackbar>
          <Snackbar open={over} autoHideDuration={6000} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="error">
              Daily message limit of 40 exhausted
            </Alert>
          </Snackbar>
        </div>
      );
    } else {
      return (
        <div className="letterpopup-classes-root1">
          <div className="letterpopup-classes-cross1" onClick={hideMe} />
          <div className="letterpopup-classes-icon1" style={{}}>
            <Paper>
              <div
                style={{
                  display: !messageBody.length > 0 ? 'none' : 'inline',
                }}
              >
                <IconButton>
                  <SortByAlphaIcon
                    style={{ paddingRight: '1rem', color: '#EF4646' }}
                  />
                  {2000 - messageBody.length}
                </IconButton>
              </div>
              {/*<Divider/>*/}
              <div
                style={{
                  display: messageBody.length > 0 ? 'none' : 'inline',
                }}
              >
                <IconButton>
                  <MailIcon
                    style={{ paddingRight: '1rem', color: '#EF4646' }}
                  />
                  {''}
                  {r}
                </IconButton>
              </div>
            </Paper>
          </div>
          <Paper
            style={c3 ? { display: 'block' } : { display: 'none' }}
            elevation={0}
            className="letterpopup-classes-message1"
          >
            <form
              className="letterpopup-classes-form1"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="letterpopup-classes-messageBoxesWrapper1">
                <div
                  className="letterpopup-classes-sendTo1"
                  style={{ display: 'flex' }}
                >
                  <div style={{ display: c2 }}>
                    <IconButton
                      onClick={handleClick}
                      style={{ marginLeft: '-35%', marginTop: '-14%' }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </div>
                  <div style={{ display: c1 }}>
                    <IconButton
                      onClick={handleClick}
                      style={{ marginLeft: '-35%', marginTop: '-14%' }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="letterpopup-classes-sendToTextFieldWrapper1">
                    <TextField
                      className="letterpopup-classes-sendToTextFieldWrapper1"
                      value={name}
                      onClick={handleClick3}
                      onChange={(e) => {
                        //handleClick2();
                        setSendToName(e.target.value);
                        //setSendMail(e.target.value);
                        handleClick2();
                      }}
                      placeholder="Who is this for?"
                    />
                  </div>
                </div>
                <Paper className={classes.hexap} elevation={3}>
                  <List
                    style={{ display: c1 }}
                    elevation={3}
                    component="nav"
                    className={classes.hexap}
                    aria-label="notifications"
                  >
                    {data1.filter(
                      (dataset) =>
                        dataset.name
                          .toLowerCase()
                          .includes(name.toLowerCase()) ||
                        dataset.bitsId
                          .toLowerCase()
                          .includes(name.toLowerCase()) ||
                        dataset.name.toLowerCase() === name.toLowerCase() ||
                        checkspace(dataset.name)
                          .toLowerCase()
                          .includes(name.toLowerCase()) ||
                        dataset.email.includes(name.toLowerCase())
                    ).length > 0 ? (
                      data1
                        .filter(
                          (dataset) =>
                            dataset.name
                              .toLowerCase()
                              .includes(name.toLowerCase()) ||
                            dataset.bitsId
                              .toLowerCase()
                              .includes(name.toLowerCase()) ||
                            dataset.name.toLowerCase() === name.toLowerCase() ||
                            checkspace(dataset.name)
                              .toLowerCase()
                              .includes(name.toLowerCase()) ||
                            dataset.email.includes(name.toLowerCase())
                        )
                        .slice(0, 101)
                        .map((person, index) => (
                          <ListItem
                            key={index}
                            button
                            onClick={() => {
                              setSendToName(person.name);
                              setSendMail(person.email);
                              handleClose2();
                            }}
                          >
                            <ListItemText
                              primary={person.name}
                              secondary={person.email}
                            />
                          </ListItem>
                        ))
                    ) : (
                      <ListItem button>
                        <ListItemText
                          primary="           "
                          onClick={() => {
                            handleClose2();
                          }}
                        />
                      </ListItem>
                    )}
                  </List>
                </Paper>
                <div
                  style={{ display: c2 }}
                  className="letterpopup-classes-messageBody1"
                >
                  <TextField
                    multiline
                    inputProps={{ maxLength: 2000 }}
                    className="letterpopup-classes-messageTextField1"
                    value={messageBody}
                    onChange={(e) => {
                      setMessageText(e.target.value);
                    }}
                    variant="outlined"
                    rows={
                      screen.width > 550
                        ? screen.width > 900
                          ? calculateTextAreaRows1() + 2
                          : calculateTextAreaRows1() + 4
                        : screen.width > 330
                        ? calculateTextAreaRows1() + 9
                        : calculateTextAreaRows1() + 6
                      //calculateTextAreaRows()
                    }
                  />
                </div>
              </div>
              <div
                style={{ display: c2 }}
                className="letterpopup-classes-sendButton1"
              >
                <Button
                  variant="outlined"
                  type="submit"
                  disabled={disableSend}
                  style={{
                    borderRadius: '20px',
                    color: 'white',
                    backgroundColor: '#EF4646',
                    border: '1.5px solid black',
                    margin: 'auto',
                  }}
                >
                  Send
                </Button>
              </div>
            </form>
          </Paper>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Message Sent successfully!!
            </Alert>
          </Snackbar>
          <Snackbar open={over} autoHideDuration={6000} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="error">
              Daily message limit of 40 exhausted
            </Alert>
          </Snackbar>
        </div>
      );
    }
  } else return <div />;
}
