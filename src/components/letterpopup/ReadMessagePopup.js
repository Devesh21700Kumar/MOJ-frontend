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
  console.log('reload');

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
  return (
    <div className="letterpopup-classes-root">
      <div className="letterpopup-classes-cross" onClick={hideMe} />
      <Paper elevation={0} className="letterpopup-classes-message">
        <div className="letterpopup-classes-dateTime">
          {
            messageArray[currentPosition][1]
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
