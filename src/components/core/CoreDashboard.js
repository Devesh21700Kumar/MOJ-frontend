import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
// import Navbar from '../navbar/navbar';
import {
  ChevronRightRounded,
  ChevronLeftRounded,
  KeyboardArrowUpRounded,
} from '@material-ui/icons';
import axios from 'axios';
import MessageCard from './MessageCard';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#EF4646',
      borderRadius: '10px',
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
    borderRadius: '5px 5px 0 0',
  },
  tabButton: {
    fontWeight: '700',
    backgroundColor: '#FFFDE8',
    fontSize: '20px',
    padding: '7px',
    textTransform: 'none',
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
    marginTop: '25px',
    display: 'flex',
    height: '50px',
    backgroundColor: '#FFFDE8',
  },
  backToTopZoom: {
    display: 'flex',
    position: 'absolute',
    left: '47%',
  },
  backToTopIcon: {
    padding: '0 0 0 2px',
  },
  '@media (max-width: 1000px)': {
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
    backToTopZoom: {
      left: '30%',
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
      left: '30%',
    },
    tabBox: {
      position: 'relative',
      left: '15%',
    },
    backToTopZoom: {
      position: 'relative',
      left: '10%',
    },
  },
}));

const API_URL = 'https://jogwbackend.herokuapp.com/api/level1';

const Dashboard = (messages, props) => {
  const classes = useStyles();
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
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
    var day = date.getDate() + 'th ';
    var month = date.toLocaleString('default', { month: 'short' }) + ' ';
    var year = date.getFullYear() + ', ';
    var time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return day + month + year + time;
  };
  useEffect(async () => {
    try {
      let response = await axios.get(API_URL + '/getassignment', {
        method: 'GET',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'token': `${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data.data);
      console.log(Date(response.data.data[0].date).substr(0, 21));
      setMsgs(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [setMsgs]);
  return (
    <div className={classes.root}>
      <div className={classes.pageBar}>
        <Box component="span" className={classes.tabBox}>
          <Button className={classes.tabButton}>Messages to review</Button>
        </Box>
        <Paginator />
      </div>
      <Container>
        {Array.isArray(msgs) && msgs.length !== 0 ? (
          msgs
            .slice(msgPage * 10, msgPage * 10 + 9)
            .map((message, index) => (
              <MessageCard
                rollNumber={message.receiverId}
                message={message.body}
                date={dateFormatter(message.date)}
                id={message._id}
                key={index}
              />
            ))
        ) : (
          <h2>No messages left to review</h2>
        )}
      </Container>
      <div className={classes.backToTop}>
        <div className={classes.backToTopZoom}>
          <p>Back to top</p>
          <IconButton onClick={scrollTop} className={classes.backToTopIcon}>
            <KeyboardArrowUpRounded />
          </IconButton>
        </div>
        <Paginator className={classes.bottomPaginator} />
      </div>
    </div>
  );
};

export default Dashboard;
