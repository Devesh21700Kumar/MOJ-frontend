import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import './LetterPopup.css';
import URL from '../util/url';
import axios from 'axios';

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
  setGet,
  handler1,
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
    //if(messageArray[currentPosition][3]==0){
    async function postRead() {
      try {
        //console.log(get);
        const response = await (
          await fetch(`${URL}/api/level0/markasread`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ id: messageArray[currentPosition + 1][2] }),
          })
        ).json();
        if (response.ok) {
          //setRead(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);
      }
      try {
        //console.log(get);
        const response = await (
          await fetch(`${URL}/api/level0/markasread`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ id: messageArray[currentPosition][2] }),
          })
        ).json();
        if (response.ok) {
          //setRead(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);
      }
      try {
        let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        });
        var r = await response.data.data;
        //setload(false);
        //console.log(response);
        setGet([...r].reverse());
      } catch (error) {
        console.error(error.message);
      }
    }
    postRead();
    //};
  };
  let prevMessage = () => {
    let newPosition;
    if (currentPosition == 0) newPosition = messageArray.length - 1;
    else newPosition = currentPosition - 1;
    setCurrentPosition(newPosition);
    console.log(messageArray[currentPosition][2]);
    //if(messageArray[currentPosition][3]==0){
    async function postRead() {
      try {
        //console.log(get);
        const response = await (
          await fetch(`${URL}/api/level0/markasread`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ id: messageArray[currentPosition - 1][2] }),
          })
        ).json();
        if (response.ok) {
          //setRead(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);
      }
      try {
        //console.log(get);
        const response = await (
          await fetch(`${URL}/api/level0/markasread`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ id: messageArray[currentPosition][2] }),
          })
        ).json();
        if (response.ok) {
          //setRead(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);
      }
      try {
        let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        });
        var r = await response.data.data;
        //setload(false);
        //console.log(response);
        setGet([...r].reverse());
      } catch (error) {
        console.error(error.message);
      }
    }
    postRead();

    //};
  };
  let hideMe = () => {
    toggleVisibility(false);
    async function postRead() {
      try {
        //console.log(get);
        const response = await (
          await fetch(`${URL}/api/level0/markasread`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ id: messageArray[currentPosition][2] }),
          })
        ).json();
        if (response.ok) {
          //setRead(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);
      }

      try {
        let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        });
        var r = await response.data.data;
        //setload(false);
        //console.log(response);
        setGet([...r].reverse());
      } catch (error) {
        console.error(error.message);
      }
    }
    postRead();
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

  let presentViewportWidth = window.innerWidth;
  let presentViewportHeight = window.innerHeight;
  const getCSSVariables = () => {
    return {
      '--this-width-var': `${presentViewportWidth}px`,
      '--this-height-var': `${presentViewportHeight}px`,
    };
  };
  return (
    <div className="letterpopup-classes-root" style={getCSSVariables()}>
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
