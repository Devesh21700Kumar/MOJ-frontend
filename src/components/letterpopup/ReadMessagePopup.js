import React from 'react';

import Paper from '@material-ui/core/Paper';

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
      enabled: props.enabled,
    };
  }
  nextMessage = () => {
    let newPosition;
    if (this.state.currentPosition == this.props.messageArray.length - 1)
      newPosition = 0;
    else newPosition = this.state.currentPosition + 1;
    this.setState({
      currentPosition: newPosition,
    });
  };
  prevMessage = () => {
    let newPosition;
    if (this.state.currentPosition == 0)
      newPosition = this.props.messageArray.length - 1;
    else newPosition = this.state.currentPosition - 1;
    this.setState({
      currentPosition: newPosition,
    });
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
            <div className="letterpopup-classes-dateTime">
              {/*this.props.messageArray[this.state.currentPosition]*/}
            </div>
            <div className="letterpopup-classes-messageBoxesWrapper">
              <div className="letterpopup-classes-messageBody">
                {/*this.props.messageArray[this.state.currentPosition]*/}
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
    else return <div />;
  }
}
