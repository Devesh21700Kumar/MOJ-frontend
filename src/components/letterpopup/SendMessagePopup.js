import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { IconButton } from '@material-ui/core';
import './LetterPopup.css';
import Popover from '@material-ui/core/Popover';
import URL from '../util/url';
import data from '../util/finaldata';
import List from '@material-ui/core/List';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DOMPurify from 'dompurify';
import sanitizeHtml from 'sanitize-html';
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
}));
export default function SendMessagePopup({
  enabled,
  //submitFunction,
  toggleVisibility,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const [name,setName] =React.useState('');
  //const [bitsId,setId] =React.useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
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
  //console.log(receiverEmail);
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
        } else {
          setOpen(false);
          //console.log(response);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    postMessage();
    //console.log('yay');
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
  //function handlepost(){
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  //console.log(data[0].name);

  function checkspace(dat) {
    return (dat = dat.split(/\s+/)[0].concat(' ', dat.split(/\s+/)[1]));
  }

  if (componentEnabled)
    return (
      <div className="letterpopup-classes-root">
        <div className="letterpopup-classes-cross" onClick={hideMe} />
        <Paper elevation={0} className="letterpopup-classes-message">
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
                <div>
                  <IconButton
                    onClick={handleClick}
                    style={{ marginLeft: '-35%', marginTop: '-14%' }}
                  >
                    <SearchIcon />
                  </IconButton>
                </div>
                <div className="search">
                  <TextField
                    className="letterpopup-classes-sendToTextField"
                    value={receiverEmail}
                    onChange={(e) => {
                      setSendToAddress(DOMPurify.sanitize(e.target.value));
                    }}
                    placeholder="Who is this for?"
                  />
                </div>
              </div>
              <Popover
                id={id}
                open={open1}
                anchorEl={anchorEl}
                onClose={handleClose1}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <List component="nav" className aria-label="notifications">
                  {receiverEmail.length > 0 ? (
                    data.filter(
                      (dataset) =>
                        dataset.name
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
                            dataset.name.toLowerCase() ===
                              receiverEmail.toLowerCase() ||
                            checkspace(dataset.name)
                              .toLowerCase()
                              .includes(receiverEmail.toLowerCase()) ||
                            dataset.email.includes(receiverEmail.toLowerCase())
                        )
                        .slice(0, 4)
                        .map((person, index) => (
                          <ListItem button>
                            <ListItemText
                              className
                              primary={person.name}
                              secondary={person.email}
                              onClick={() => {
                                setSendToAddress(
                                  DOMPurify.sanitize(person.email)
                                );
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
                            setSendToAddress(DOMPurify.sanitize(person.email));
                            handleClose2();
                          }}
                        />
                      </ListItem>
                    )
                  ) : (
                    <ListItem button>
                      <ListItemText
                        className
                        primary="enter some value to search"
                        onClick={() => {
                          setSendToAddress(DOMPurify.sanitize(person.email));
                          handleClose2();
                        }}
                      />
                    </ListItem>
                  )}
                </List>
              </Popover>
              <div className="letterpopup-classes-messageBody">
                <TextField
                  multiline
                  className="letterpopup-classes-messageTextField"
                  value={messageBody}
                  onChange={(e) => {
                    setMessageText(DOMPurify.sanitize(e.target.value));
                  }}
                  variant="outlined"
                  rows={calculateTextAreaRows()}
                />
              </div>
            </div>
            <div className="letterpopup-classes-sendButton">
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
