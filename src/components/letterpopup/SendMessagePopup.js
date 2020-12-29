import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import './LetterPopup.css';
import URL from '../util/url';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function SendMessagePopup({
  enabled,
  //submitFunction,
  toggleVisibility,
}) {
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
              token: `${atob(localStorage.getItem('token'))}`,
            },
            body: JSON.stringify({ messageBody, receiverEmail, date }),
          })
        ).json();
        if (response.ok) {
          setOpen(true);
        } else {
          setOpen(false);
          console.log(response0);
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
  // }
  /* const handlepost=()=>{
    async function postMessage() {
      try{
      const date= Date.now();  
      const response = await (
        fetcht(`${URL}/api/level0/sendmessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ sendToAddress, messageText, date}),
        })
      ).json();
      }
      catch (error) {
        console.error(error.message);
      }
  
      if (response.ok) {
        setSnackBarOpen(true);
      }
  }postMessage();
}*/

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
              <div className="letterpopup-classes-sendTo">
                <TextField
                  className="letterpopup-classes-sendToTextField"
                  value={receiverEmail}
                  onChange={(e) => {
                    setSendToAddress(e.target.value);
                  }}
                  placeholder="Who is this for?"
                />
              </div>
              <div className="letterpopup-classes-messageBody">
                <TextField
                  multiline
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
