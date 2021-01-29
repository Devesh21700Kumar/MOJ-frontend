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
                  1). Login using your{' '}
                  <b style={{ color: '#EF4646' }}>
                    BITS ID (It's a BITSian event only!)
                  </b>
                </h3>
              </li>
              <li>
                <h3>
                  2). Messages can be sent at the <b>given time slot</b> only.
                </h3>
              </li>
              <li>
                <h3>
                  3). The website is set in such a way that none of us from the
                  organising committee can see who is sending the message. So
                  that{' '}
                  <b style={{ color: '#EF4646' }}>
                    implies if you want the recipient to know who you are
                  </b>
                  , write your name at the end.
                </h3>
              </li>
              <li>
                <h3>
                  4). You can send up to{' '}
                  <b style={{ color: '#EF4646' }}>40 messages a day</b> to
                  anyone you want to.
                </h3>
              </li>
              <li>
                <h3>
                  5). There is a{' '}
                  <b style={{ color: '#EF4646' }}>2000 characters limit</b> for
                  a message.
                </h3>
              </li>
              <li>
                <h3>
                  6). To ensure no negativity is delivered,{' '}
                  <b style={{ color: '#EF4646' }}>
                    all the messages will be screened
                  </b>{' '}
                  by our team, so please be patient if the message is not
                  delivered as soon as you have sent it.
                </h3>
              </li>
              <li>
                <h3>
                  7). Click on the Profile Button on the Navbar to Route to all
                  the pages like Credits and Home
                </h3>
              </li>
              <li>
                <h3>
                  8). To return to Home You can click on The MOJ text on the
                  Navbar of the page
                </h3>
              </li>
              <li>
                <h3>
                  9). Click on The Sent Tab to view your sent messages and the
                  Inbox tab to view the messages you have received.
                </h3>
              </li>
              <li>
                <h3>
                  10). Click on the{' '}
                  <b style={{ color: '#EF4646' }}>
                    respective message cards/Boxes in Each tab to open the
                    letter
                  </b>{' '}
                  and read the complete Message of Joy
                </h3>
              </li>
              <li>
                <h3>
                  11). Click on{' '}
                  <b style={{ color: '#EF4646' }}>
                    the Icon with the add symbol in between
                  </b>{' '}
                  to open a send message popup to send a new message..
                  <br></br>
                  You can search the names of the people present in the database
                  through the auto search functions while simultaneously typing
                  in the "who is it for" textfield
                </h3>
              </li>
              <li>
                <h3>
                  12). For daily updates, do follow{' '}
                  <a
                    href="https://www.instagram.com/devsocbitsgoa/?hl=en"
                    className="nostyle"
                    target="_blank"
                  >
                    DevSoc (@devsocbitsgoa)
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.instagram.com/nirmaangoa/?hl=en"
                    className="nostyle"
                    target="_blank"
                  >
                    Nirmaan (@nirmaangoa)
                  </a>{' '}
                  instagram pages.
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
