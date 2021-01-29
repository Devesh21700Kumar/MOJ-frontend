import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './LetterPopup.css';
import URL from '../util/url';
import axios from 'axios';
import img from './../../imageassets/letter-coloured.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import { set } from 'lodash';

const useStyles = makeStyles((theme) => ({
  noMessages: {
    position: 'absolute',
    transform: 'translate(90%, 90%)',
  },
}));

export default function ReadMessagePopup({
  enabled,
  startFrom,
  messageArray,
  toggleVisibility,
  setGet,
  handler1,
  fix,
  setload,
}) {
  const [currentPosition, setCurrentPosition] = useState(startFrom);
  const [componentEnabled, setComponentEnabled] = useState(enabled);
  const [spinner, setSpinner] = useState(true);
  React.useEffect(async () => {
    await setComponentEnabled(enabled);
    await setTimeout(() => setSpinner(false), 300);
  }, [enabled]);

  //---Next----//

  async function getback() {
    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${localStorage.getItem('token')}` },
      });
      var r = await response.data.data;
      setGet([...r].reverse());
    } catch (error) {
      console.error(error.message);
    }
  }

  async function marknext(params) {
    try {
      const response = await (
        await fetch(`${URL}/api/level0/markasread`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            id: messageArray[params + 1][2],
          }),
        })
      ).json();
      if (response.ok) {
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function marknow(params) {
    try {
      const response = await (
        await fetch(`${URL}/api/level0/markasread`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            id: messageArray[params][2],
          }),
        })
      ).json();
      if (response.ok) {
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function markprev(params) {
    try {
      const response = await (
        await fetch(`${URL}/api/level0/markasread`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            id: messageArray[params - 1][2],
          }),
        })
      ).json();
      if (response.ok) {
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  let nextMessage = () => {
    let newPosition;
    if (currentPosition == messageArray.length - 1) newPosition = 0;
    else newPosition = currentPosition + 1;
    setCurrentPosition(newPosition);
    if (
      fix == 0 &&
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] == 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await marknext(currentPosition);
          await getback();
          await setTimeout(() => {
            setSpinner(false);
          }, 500);
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] == 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknext(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] != 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] != 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] == 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(0);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] == 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await marknow(0);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] != 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    }
  };

  //---Prev----//

  let prevMessage = () => {
    let newPosition;
    if (currentPosition == 0) newPosition = messageArray.length - 1;
    else newPosition = currentPosition - 1;
    setCurrentPosition(newPosition);
    if (
      fix == 0 &&
      currentPosition - 1 >= 0 &&
      messageArray[currentPosition - 1][3] == 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await markprev(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition - 1 >= 0 &&
      messageArray[currentPosition - 1][3] == 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await markprev(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition - 1 >= 0 &&
      messageArray[currentPosition - 1][3] != 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] == 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await marknow(messageArray.length - 1);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] != 0 &&
      messageArray[currentPosition][3] == 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] == 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(messageArray.length - 1);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] != 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        await setSpinner(true);
        try {
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    }
  };

  //---HideMe----//

  let hideMe = async () => {
    if (messageArray[currentPosition][3] == 0 && fix == 0) {
      async function postRead() {
        await setSpinner(true);
        try {
          await marknow(currentPosition);
          await getback();
        } catch (error) {
          console.error(error.message);
        }
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    }
    await toggleVisibility(false);
  };

  if (componentEnabled)
    return (
      <SendMessage
        setload={setload}
        spinner={spinner}
        messageArray={messageArray}
        currentPosition={currentPosition}
        next={nextMessage}
        prev={prevMessage}
        hideMe={hideMe}
      />
    );
  else return <></>;
}

function SendMessage({
  messageArray,
  currentPosition,
  next,
  prev,
  hideMe,
  spinner,
  setload,
}) {
  const classes = useStyles();
  return (
    <div className="letterpopup-classes-root">
      <React.Fragment>
        {spinner ? (
          <CircularProgress
            className="letterpopup-classes-cross2"
            style={{ color: '#fffbeb' }}
          />
        ) : (
          <div className="letterpopup-classes-cross" onClick={hideMe} />
        )}

        <Paper
          elevation={0}
          className="letterpopup-classes-message"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="letterpopup-classes-dateTime">{}</div>
          <div className="letterpopup-classes-messageBoxesWrapper">
            <div className="letterpopup-classes-messageBody">
              {spinner ? (
                <div></div>
              ) : (
                <div style={{ whiteSpace: 'pre-line' }}>
                  {messageArray[currentPosition][0]}
                </div>
              )}
            </div>
          </div>
        </Paper>
        <div
          className="letterpopup-classes-left-arrow"
          onClick={spinner ? null : prev}
        />
        <div
          className="letterpopup-classes-right-arrow"
          onClick={spinner ? null : next}
        />
      </React.Fragment>
    </div>
  );
}
