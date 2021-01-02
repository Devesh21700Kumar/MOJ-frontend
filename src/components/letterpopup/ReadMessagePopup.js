import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import './LetterPopup.css';

// message array structure:
// [
//      [message, dateTime],
//      [message, dateTime],
//      [message, dateTime], ...
// ]
export default function ReadMessagePopup({
  enabled,
  startFrom,
  messageArray,
  toggleVisibility,
}) {
  const [currentPosition, setCurrentPosition] = useState(startFrom);
  const [componentEnabled, setComponentEnabled] = useState(enabled);
  React.useEffect(() => {
    return () => {
      setComponentEnabled(enabled);
    };
  }, [enabled]);

  let nextMessage = () => {
    let newPosition;
    if (currentPosition == messageArray.length - 1) newPosition = 0;
    else newPosition = currentPosition + 1;
    setCurrentPosition(newPosition);
  };
  let prevMessage = () => {
    let newPosition;
    if (currentPosition == 0) newPosition = messageArray.length - 1;
    else newPosition = currentPosition - 1;
    setCurrentPosition(newPosition);
  };
  let hideMe = () => {
    toggleVisibility(false);
  };

  if (componentEnabled)
    return (
      <SendMessage
        messageArray={messageArray}
        currentPosition={currentPosition}
        next={nextMessage}
        prev={prevMessage}
        hideMe={hideMe}
      />
    );
  else return <></>;
}

function SendMessage({ messageArray, currentPosition, next, prev, hideMe }) {
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
  return (
    <div className="letterpopup-classes-root">
      <div className="letterpopup-classes-cross" onClick={hideMe} />
      <Paper elevation={0} className="letterpopup-classes-message">
        <div className="letterpopup-classes-dateTime">
          {
            //dateFormatter(messageArray[currentPosition][1])
          }
        </div>
        <div className="letterpopup-classes-messageBoxesWrapper">
          <div className="letterpopup-classes-messageBody">
            {messageArray[currentPosition][0]}
          </div>
        </div>
      </Paper>
      <div className="letterpopup-classes-left-arrow" onClick={prev} />
      <div className="letterpopup-classes-right-arrow" onClick={next} />
    </div>
  );
}
