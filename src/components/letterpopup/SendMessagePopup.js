import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './LetterPopup.css';

export default class SendMessagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      sendToAddress: '',
      enabled: props.enabled,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitFunction(messageText, sendToAddress);
  };
  calculateTextAreaRows = () => {
    var rows = 0;
    if (window.innerWidth > 768)
      rows = parseInt((window.innerHeight * 7.5) / 1080);
    else rows = parseInt((window.innerHeight * 2) / 768);
    return rows;
  };
  hideMe = () => {
    this.setState({
      enabled: false,
    });
  };

  render() {
    if (this.state.enabled)
      return (
        <div className="letterpopup-classes-root">
          <div className="letterpopup-classes-cross" onClick={this.hideMe} />
          <Paper elevation={0} className="letterpopup-classes-message">
            <form
              className="letterpopup-classes-form"
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <div className="letterpopup-classes-messageBoxesWrapper">
                <div className="letterpopup-classes-sendTo">
                  <TextField
                    className="letterpopup-classes-sendToTextField"
                    value={this.state.sendToAddress}
                    onChange={(e) => {
                      this.setState({
                        sendToAddress: e.target.value,
                      });
                    }}
                    placeholder="Who is this for?"
                  />
                </div>

                <div className="letterpopup-classes-messageBody">
                  <TextField
                    multiline
                    className="letterpopup-classes-messageTextField"
                    value={this.state.messageText}
                    onChange={(e) => {
                      this.setState({
                        messageText: e.target.value,
                      });
                    }}
                    variant="outlined"
                    rows={this.calculateTextAreaRows()}
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
    else return <div />;
  }
}
