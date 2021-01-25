import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import Navbar from '../navbar/navbar';
import '../instructions/instructions.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '10px',
        backgroundColor: '#FFFDE8',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#EF4646',
        borderRight: '3px solid #FFFDE8',
        borderLeft: '3px solid #FFFDE8',
      },
    },
    root: {
      backgroundColor: '#FFFDE8',
      flexGrow: 1,
      minHeight: '100vh',
      overflowX: 'hidden',
      overflowY: 'hidden',
      minHeight: '100vh',
    },
    inner: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#EF4646',
    },
    main: {
      padding: '1.5rem',
      borderRadius: '10px 10px 0 0',
      backgroundColor: '#FFFDE8',
      overflowY: 'hidden',
      minHeight: '100vh',
    },
    mainContent: {
      zIndex: '1',
      overflowWrap: 'break-word',
      marginTop: '9.9vh',
      position: 'absolute',
      backgroundColor: '#FFFDE8',
      padding: '1.5rem',
      width: '40vw',
    },
    head: {},
  })
);

const instructions = () => {
  const [val, setval] = useState(0);
  const classes = useStyles();
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const { name, bitsId } = JSON.parse(atob(token.split('.')[1]));
  return (
    <div className={classes.root} id="r">
      {/* Tabs */}
      <Navbar
        navtext="MoJ"
        navHeading="Instructions"
        name={name}
        bitsId={bitsId}
        stats={true}
      />

      {/* Main Content */}

      <div className={classes.inner}>
        <Box className={classes.main}>
          <div id="parent">
            <h1
              className="head"
              style={{ fontFamily: 'Oxygen', color: '#EF4646' }}
              id="clause header"
            >
              How To Use The Page?
            </h1>
          </div>
          <div id="list">
            <ol>
              <li>
                <h3>
                  1).Click on the Profile Button on the Navbar to Route to all
                  the pages like Credits and Home
                </h3>
              </li>
              <li>
                <h3>
                  2).To return to Home You can click on The MOJ text on the
                  Navbar of the page
                </h3>
              </li>
              <li>
                <h3>
                  3).Click on The Sent Tab to view your sent messages and the
                  Inbox tab to view the messages you have received
                </h3>
              </li>
              <li>
                <h3>
                  4).Click on the respective message cards/Boxes in Each tab to
                  open the letter and read the complete Message of Joy
                </h3>
              </li>
              <li>
                <h3>
                  5).Click on The Icon with the add symbol in between to open a
                  send message popup to send a new message..
                  <br></br>
                  You can search the names of the people present in the database
                  through the auto search functions while simultaneously typing
                  in the "who is it for" textfield
                </h3>
              </li>
              <li>
                <h3>
                  6).You will have a limit of sending 40 messages a day and each
                  message can have at most 2000 characters. You can view the
                  remaining daily messages and characters remaining after you
                  open up the send letter popup
                </h3>
              </li>
              <li>
                <h3>
                  7).Click on the Logos of the Clubs in the Login panel to
                  discover special stuff..
                </h3>
              </li>
              <li>
                <h3>
                  8).lastly.. do not forget to checkout The Credits Page and do
                  send those fellow peeps some messages of Joy
                </h3>
              </li>
            </ol>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default instructions;
