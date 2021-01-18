import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import {
  ChevronRightRounded,
  ChevronLeftRounded,
  KeyboardArrowUpRounded,
  CachedRounded,
} from '@material-ui/icons';
import axios from 'axios';
import MessageCard from './MessageCard';

const useStyles = makeStyles((theme) => ({
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
    overflow: 'hidden',
    borderBottom: '25px solid #EF4646',
    minHeight: '100vh',
  },
  pageBar: {
    backgroundColor: '#EF4646',
    padding: '20px 0 0 10%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  tabBox: {
    backgroundColor: '#FFFDE8',
    borderRadius: '10px 10px 0 0',
    display: 'flex',
  },
  tabButton: {
    fontWeight: '700',
    backgroundColor: '#FFFDE8',
    fontSize: '20px',
    padding: '7px 15px',
    textTransform: 'none',
    borderRadius: '10px 10px 0 0',
    fontFamily: 'Oxygen, sans-serif',
  },
  refreshButton: {
    color: '#EF4646',
    padding: '0 7px',
  },
  headerText: {
    margin: 0,
    color: 'white',
    width: '90%',
    fontSize: '24px',
    paddingLeft: '1%',
  },
  msgNumberText: {
    margin: 0,
    color: 'white',
    fontSize: '18px',
  },
  paginatorFragment: {
    display: 'flex',
    paddingRight: '65px',
    left: '80%',
    position: 'absolute',
  },
  backToTop: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0rem',
  },
  backToTopButton: {
    textTransform: 'none',
    fontSize: '1rem',
    fontFamily: 'Oxygen, sans serif',
  },
  bottomPaginator: {
    margin: '1rem 0rem',
  },
  noMessages: {
    color: '#FC0404',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Oxygen, sans serif',
  },
  '@media (max-width: 1200px)': {
    paginatorFragment: {
      paddingRight: 0,
      textAlign: 'center',
    },
  },
  '@media (max-width: 860px)': {
    paginatorButton: {
      padding: '12px 0',
    },
  },
  '@media (max-width: 620px)': {
    paginatorText: {
      fontSize: '12px',
      padding: '5px 0',
    },
    paginatorButton: {
      padding: '12px 0',
    },
    paginatorFragment: {
      left: '65%',
    },
  },
  '@media (max-width: 470px)': {
    pageBar: {
      display: 'block',
      padding: '20px 0 0 10px',
      justifyContent: 'flex-start',
    },
    paginatorFragment: {
      position: 'relative',
      left: '35%',
    },
    tabBox: {
      margin: '0 7vh',
      textAlign: 'center',
    },
  },
}));

const API_URL = 'https://jogwbackend.herokuapp.com/api/level1';

const Dashboard = () => {
  const classes = useStyles();
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const userInfo = JSON.parse(atob(token.split('.')[1]));
  const [msgs, setMsgs] = useState({});
  const [msgPage, setMsgPage] = useState(0);
  const handleChangePage = (goToNext) => {
    if (goToNext) {
      if (msgPage < Math.ceil(msgs.length / 10) - 1) {
        setMsgPage((newPage) => (newPage = msgPage + 1));
      }
    } else {
      if (msgPage > 0) {
        setMsgPage((newPage) => (newPage = msgPage - 1));
      }
    }
  };

  if (userInfo.permissionLevel < 1) return <Redirect to="/home" />;

  const Paginator = () => {
    return (
      <div className={classes.paginatorFragment}>
        <IconButton
          className={classes.paginatorButton}
          onClick={() => handleChangePage(false)}
        >
          <ChevronLeftRounded />
        </IconButton>
        <p className={classes.paginatorText}>
          {msgPage * 10 + 1} -
          {(msgPage + 1) * 10 > msgs.length ? msgs.length : msgPage * 10 + 10}{' '}
          of {msgs.length}
        </p>
        <IconButton
          className={classes.paginatorButton}
          onClick={() => handleChangePage(true)}
        >
          <ChevronRightRounded />
        </IconButton>
      </div>
    );
  };
  const dateFormatter = (timestamp) => {
    var date = new Date(timestamp);
    var day = date.getDate() + ', ';
    var month = date.toLocaleString('default', { month: 'long' }) + ' ';
    var year = date.getFullYear() + ', ';
    var time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return month + day + year + time;
  };
  async function fetchMessages() {
    try {
      let response = await axios.get(API_URL + '/getassignment', {
        method: 'GET',
        headers: {
          token: `${token}`,
        },
      });
      setMsgs(response.data.data.reverse());
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(async () => {
    fetchMessages();
  }, []);
  return (
    <div className={classes.root}>
      <Navbar
        navtext="MoJ"
        navHeading="Core Dashboard"
        name={userInfo.name}
        bitsId={userInfo.bitsId}
      />
      <div className={classes.pageBar}>
        <Box component="span" className={classes.tabBox}>
          <div className={classes.tabButton}>Messages to review</div>
          <IconButton className={classes.refreshButton} onClick={fetchMessages}>
            <CachedRounded />
          </IconButton>
        </Box>
        <Paginator />
      </div>
      <Container>
        {Array.isArray(msgs) && msgs.length !== 0 ? (
          msgs
            .slice(msgPage * 10, msgPage * 10 + 10)
            .map((message, index) => (
              <MessageCard
                rollNumber={message.receiverId}
                message={message.body}
                date={dateFormatter(message.date)}
                id={message._id}
                key={msgPage * 10 + index}
                index={msgPage * 10 + index}
              />
            ))
        ) : (
          <h1 className={classes.noMessages}>No Messages Left to Review</h1>
        )}
      </Container>
      <Paginator className={classes.bottomPaginator} />
      <div className={classes.backToTop}>
        <Button
          className={classes.backToTopButton}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        >
          Back to Top
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
