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
    await setTimeout(() => setSpinner(false), 1500);
  }, [enabled]);

  //---Next----//

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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition + 1][2],
              }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] == 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition + 1][2],
              }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[0][2],
              }),
            })
          ).json();
          if (response.ok) {
            console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition][2],
              }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[messageArray.length - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[messageArray.length - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
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
        await setSpinner(true);
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
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[messageArray.length - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
        await setSpinner(true);
        await setTimeout(() => {
          setSpinner(false);
        }, 500);
      }
      postRead();
    } else if (
      fix == 0 &&
      currentPosition == 0 &&
      messageArray[currentPosition - 1][3] != 0 &&
      messageArray[currentPosition][3] != 0
    ) {
      async function postRead() {
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
        await setSpinner(true);
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
        try {
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
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }

      postRead();
    }
    await setload(true);
    await setTimeout(() => {
      setload(false);
    }, 500);
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
                <React.Fragment>
                  {messageArray[currentPosition][0]}
                </React.Fragment>
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
