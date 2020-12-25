import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
// import Navbar from '../navbar/navbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import {
  ChevronRightRounded,
  ChevronLeftRounded,
  ArrowUpwardRounded,
} from '@material-ui/icons';
import MessageCard from './MessageCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFDE8',
  },
  pageBar: {
    backgroundColor: '#EF4646',
    padding: '20px 0 0 50px',
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
  },
  backToTopZoom: {
    left: '47%',
    position: 'absolute',
    marginTop: '10px',
  },
  backToTopIcon: {
    marginBottom: '5px',
    padding: '0',
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
}));

const Dashboard = (messages, props) => {
  const classes = useStyles();
  const [msgs, setMsgs] = useState(
    Array(32).fill(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    )
  );
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
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor'
      );
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger} className={classes.backToTopZoom}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  const Paginator = () => {
    return (
      <div className={classes.paginatorFragment}>
        <IconButton className={classes.paginatorButton}>
          <ChevronLeftRounded onClick={() => handleChangePage(false)} />
        </IconButton>
        <p className={classes.paginatorText}>
          {msgPage * 10 + 1} -
          {(msgPage + 1) * 10 > msgs.length ? msgs.length : msgPage * 10 + 10}{' '}
          of {msgs.length}
        </p>
        <IconButton className={classes.paginatorButton}>
          <ChevronRightRounded onClick={() => handleChangePage(true)} />
        </IconButton>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.pageBar}>
        <Box component="span" className={classes.tabBox}>
          <Button className={classes.tabButton}>Messages to review</Button>
        </Box>
        <Paginator />
      </div>
      <Container>
        {msgs.slice(msgPage * 10, msgPage * 10 + 9).map((message) => (
          <MessageCard
            rollNumber={'2019A8PS0666G'}
            message={message}
            date={'28th Dec 2020, 2:31 a.m.'}
          />
        ))}
      </Container>
      <div className={classes.backToTop}>
        <ScrollTop>
          <a style={{ textDecoration: 'none' }}>Back to Top</a>
          <IconButton className={classes.backToTopIcon}>
            <ArrowUpwardRounded />
          </IconButton>
        </ScrollTop>
        <Paginator className={classes.bottomPaginator} />
      </div>
    </div>
  );
};

export default Dashboard;
