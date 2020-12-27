import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './LetterPopup.css';

// message array structure:
// [
//      [message, dateTime],
//      [message, dateTime],
//      [message, dateTime], ...
// ]
export default class ReadMessagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: props.startFrom,
    };
  }
  nextMessage = () => {
    let newPosition;
    if (this.state.currentPosition == this.props.messageArray.length - 1)
      newPosition = 0;
    else newPosition = this.state.currentPosition + 1;
    console.log('newPosition: ', newPosition);
    this.setState({
      currentPosition: newPosition,
    });
  };
  prevMessage = () => {
    let newPosition;
    if (this.state.currentPosition == 0)
      newPosition = this.props.messageArray.length - 1;
    else newPosition = this.state.currentPosition - 1;
    console.log('newPosition: ', newPosition);
    this.setState({
      currentPosition: newPosition,
    });
  };

  render() {
    return (
      <div className="letterpopup-classes-root">
        <div className="letterpopup-classes-cross" />
        <Paper elevation={0} className="letterpopup-classes-message">
          <div className="letterpopup-classes-dateTime">
            {this.props.messageArray[this.state.currentPosition][1]}
          </div>
          <div className="letterpopup-classes-messageBoxesWrapper">
            <div className="letterpopup-classes-messageBody">
              {this.props.messageArray[this.state.currentPosition][0]}
            </div>
          </div>
        </Paper>
        <div
          className="letterpopup-classes-left-arrow"
          onClick={this.prevMessage}
        />
        <div
          className="letterpopup-classes-right-arrow"
          onClick={this.nextMessage}
        />
      </div>
    );
  }
}
