import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { IconButton } from '@material-ui/core';
import './sendmessage.css';
import URL from '../util/url';
import data from '../util/finaldata';
import List from '@material-ui/core/List';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';

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
    width: '49vw',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
}));
export default function SendMessagePopup({ enabled, toggleVisibility }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const id = open1 ? 'simple-popover' : undefined;
  const [messageBody, setMessageText] = useState('');
  const [receiverEmail, setSendToAddress] = useState('');
  const [componentEnabled, setComponentEnabled] = useState(enabled);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    return () => {
      setComponentEnabled(enabled);
    };
  }, [enabled]);
  let handleSubmit = (e) => {
    e.preventDefault();
    const date = Date.now();
    async function postMessage() {
      try {
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
          setOpen(true);
          setSendToAddress('');
          setMessageText('');
        } else {
          setOpen(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    postMessage();
  };
  let calculateTextAreaRows = () => {
    let rows = 0;
    if (window.innerWidth > 768)
      rows = parseInt((window.innerHeight * 7.5) / 1080);
    else rows = parseInt((window.innerHeight * 2) / 768);
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
  const [c1, setc1] = useState('none');
  const [c2, setc2] = useState('inline');

  const handleClick = () => {
    if (c1 == 'none' && c2 == 'inline') {
      setc1('inline');
      setc2('none');
    } else if (c1 == 'inline' && c2 == 'none') {
      setc1('none');
      setc2('inline');
    }
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

  if (componentEnabled)
    return (
      <div className="letterpopup-classes-root1">
        <div className="letterpopup-classes-cross1" onClick={hideMe} />
        <Paper elevation={0} className="letterpopup-classes-message1">
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
                <div className="search1">
                  <TextField
                    className="letterpopup-classes-sendToTextField1"
                    value={receiverEmail}
                    onClick={handleClick3}
                    onChange={(e) => {
                      handleClick2();
                      setSendToAddress(e.target.value);
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
                  {data.filter(
                    (dataset) =>
                      dataset.name
                        .toLowerCase()
                        .includes(receiverEmail.toLowerCase()) ||
                      dataset.bitsId
                        .toLowerCase()
                        .includes(receiverEmail.toLowerCase()) ||
                      dataset.name.toLowerCase() ===
                        receiverEmail.toLowerCase() ||
                      checkspace(dataset.name)
                        .toLowerCase()
                        .includes(receiverEmail.toLowerCase()) ||
                      dataset.email.includes(receiverEmail.toLowerCase())
                  ).length > 0 ? (
                    data
                      .filter(
                        (dataset) =>
                          dataset.name
                            .toLowerCase()
                            .includes(receiverEmail.toLowerCase()) ||
                          dataset.bitsId
                            .toLowerCase()
                            .includes(receiverEmail.toLowerCase()) ||
                          dataset.name.toLowerCase() ===
                            receiverEmail.toLowerCase() ||
                          checkspace(dataset.name)
                            .toLowerCase()
                            .includes(receiverEmail.toLowerCase()) ||
                          dataset.email.includes(receiverEmail.toLowerCase())
                      )
                      .slice(0, 101)
                      .map((person, index) => (
                        <ListItem button>
                          <ListItemText
                            className
                            primary={person.name}
                            secondary={person.email}
                            onClick={() => {
                              setSendToAddress(person.email);
                              handleClose2();
                            }}
                          />
                        </ListItem>
                      ))
                  ) : (
                    <ListItem button>
                      <ListItemText
                        className
                        primary="enter correct value to search"
                        onClick={() => {
                          setSendToAddress(person.email);
                          handleClose2();
                        }}
                      />
                    </ListItem>
                  )}
                </List>
              </Paper>
              <div display="none" className="letterpopup-classes-messageBody1">
                <TextField
                  style={{ display: c2 }}
                  multiline
                  inputProps={{ maxLength: 500 }}
                  className="letterpopup-classes-messageTextField1"
                  value={messageBody}
                  onChange={(e) => {
                    setMessageText(e.target.value);
                  }}
                  variant="outlined"
                  rows={
                    screen.width > 550
                      ? screen.width > 900
                        ? calculateTextAreaRows() + 0.2
                        : calculateTextAreaRows() + 3.2
                      : screen.width > 330
                      ? calculateTextAreaRows() + 6.1
                      : calculateTextAreaRows() + 4.1
                  }
                />
              </div>
            </div>
            <div
              style={{ display: c2 }}
              className="letterpopup-classes-sendButton1"
            >
              <Button variant="outlined" type="submit">
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
      </div>
    );
  else return <div />;
}
