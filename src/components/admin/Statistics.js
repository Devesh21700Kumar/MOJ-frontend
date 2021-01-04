import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar/navbar';
import URL from '../util/url';

const useStyles = makeStyles((theme) =>
  createStyles({
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
      flexGrow: 1,
      maxWidth: '100vw',
      height: '100vh',
    },
    mainContent: {
      backgroundColor: '#FFFDE8',
      padding: '1.5rem',
    },
    stats: {
      width: '85vw',
      margin: '2rem auto',
    },
    stat: {
      fontFamily: 'Oxygen, sans-serif',
    },
    '@media(min-width: 320px)': {
      stat: {
        fontSize: '18px',
      },
    },
    '@media(min-width: 360px)': {
      stat: {
        fontSize: '22px',
      },
    },
    '@media(min-width: 410px)': {
      stat: {
        fontSize: '24px',
      },
    },
    '@media(min-width: 540px)': {
      stat: {
        fontSize: '28px',
      },
    },
    '@media(min-width: 720px)': {
      stat: {
        fontSize: '30px',
      },
    },
  })
);

const Statistics = () => {
  const classes = useStyles();
  const [total, setTotal] = useState('');
  const [pending, setPending] = useState('');
  const [delivered, setDelivered] = useState('');
  const [rejected, setRejected] = useState('');
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const { name, bitsId } = JSON.parse(atob(token.split('.')[1]));

  async function fetchStatistics() {
    const { total, pending, delivered, rejected } = await (
      await fetch(`${URL}/api/level2/statistics`, {
        method: 'GET',
        headers: { token: `${token}` },
      })
    ).json();
    setTotal(total);
    setPending(pending);
    setDelivered(delivered);
    setRejected(rejected);
  }

  useEffect(() => {
    fetchStatistics();
  }, [setTotal, setPending, setDelivered, setRejected]);

  return (
    <div className={classes.root}>
      {/* Tabs */}
      <Navbar
        navHeading="Admin Dashboard"
        name={name}
        bitsId={bitsId}
        stats={true}
      />
      <div className={classes.mainContent}>
        <div className={classes.stats}>
          <h1 className={classes.stat}>
            Total Sent Messages:{' '}
            <span style={{ color: '#FC0404' }}>{total}</span>
          </h1>
          <h1 className={classes.stat}>
            Total Pending Messages:{' '}
            <span style={{ color: '#FC0404' }}>{pending}</span>
          </h1>
          <h1 className={classes.stat}>
            Total Delivered Messages:{' '}
            <span style={{ color: '#FC0404' }}>{delivered}</span>
          </h1>
          <h1 className={classes.stat}>
            Total Rejected Messages:{' '}
            <span style={{ color: '#FC0404' }}>{rejected}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
