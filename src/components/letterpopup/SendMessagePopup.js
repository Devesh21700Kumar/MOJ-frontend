import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './LetterPopup.css';

export default function SendMessagePopup(props) {
  const [messageText, setMessageText] = useState('');
  const [sendToAddress, setSendToAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitFunction(messageText, sendToAddress);
  };

  var calculateTextAreaRows = () => {
    var rows = 0;
    if (window.innerWidth > 768)
      rows = parseInt((window.innerHeight * 7.5) / 1080);
    else rows = parseInt((window.innerHeight * 2) / 768);
    return rows;
  };

  return (
    <div className="letterpopup-classes-root">
      <div className="letterpopup-classes-cross" />
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
                value={sendToAddress}
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
                value={messageText}
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
    </div>
  );
}
