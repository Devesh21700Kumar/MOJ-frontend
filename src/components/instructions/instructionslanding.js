import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import '../instructions/instructions.css';
import Navbar1 from '../navbar/navbar1';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

const instructionsland = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="r">
      <Navbar1 stats={true} />
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
                  1){' '}
                  <b style={{ color: '#EF4646' }}>It's a BITSian only event!</b>
                </h3>
              </li>
              <li>
                <h3>
                  2) Messages can be sent at the{' '}
                  <b style={{ color: '#EF4646' }}>given time slot</b> only.
                </h3>
              </li>
              <li>
                <h3>
                  3) The website is set in such a way that{' '}
                  <b style={{ color: '#EF4646' }}>none</b> of us from the
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
                  4) You can send up to{' '}
                  <b style={{ color: '#EF4646' }}>40 messages a day</b> to
                  anyone you want to.
                </h3>
              </li>
              <li>
                <h3>
                  5) There is a{' '}
                  <b style={{ color: '#EF4646' }}>2000 characters limit</b> for
                  a message.
                </h3>
              </li>
              <li>
                <h3>
                  6) To ensure no negativity is delivered,{' '}
                  <b style={{ color: '#EF4646' }}>
                    all the messages will be screened
                  </b>{' '}
                  by our team, so please be patient if the message is not
                  delivered as soon as you have sent it.
                </h3>
              </li>
              <li>
                <h3>
                  7) <b style={{ color: '#EF4646' }}>Do not send any links</b>{' '}
                  in the msg, it will straightaway be rejected, and you will
                  unnecessarily exhaust your daily message limit.
                </h3>
              </li>
              <li>
                <h3>
                  8) For daily updates, do follow{' '}
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
                    className="nostyle1"
                    target="_blank"
                  >
                    Nirmaan (@nirmaangoa)
                  </a>{' '}
                  instagram pages.
                </h3>
              </li>
              <li>
                <h3>
                  9) For any technical issues drop a mail at{' '}
                  <b>
                    <a
                      href="mailto:devsocbpgc@gmail.com"
                      className="nostyle"
                      target="_blank"
                    >
                      {' '}
                      devsocbpgc@gmail.com{' '}
                    </a>
                    <br></br>
                    <b style={{ color: '#EF4646' }}>
                      Ishant : +91 99969 41700
                      <br></br>
                      Samesh : +91 88925 40106
                    </b>
                  </b>
                </h3>
              </li>
              <li>
                <h3>
                  10) For any event related issue, contact: <br></br>
                  <b style={{ color: '#EF4646' }}>
                    Manleen : +91 95949 12008
                  </b>{' '}
                </h3>
              </li>
            </ol>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default instructionsland;
