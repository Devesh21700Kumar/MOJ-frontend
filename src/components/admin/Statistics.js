import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import CsvDownload from 'react-json-to-csv';
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
    inactive: {
      backgroundColor: '#4CBC14',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '30px',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      fontWeight: 'bold',
      fontFamily: 'Oxygen',
      outline: 'none',
    },
    inactiveOuter: {
      borderRadius: '30px',
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
  const [inactiveUsers, setInactiveUsers] = useState({});
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

  async function fetchInactiveUsers() {
    const { mails } = await (
      await fetch(`${URL}/api/level2/inactivemails`, {
        method: 'GET',
        headers: { token: `${token}` },
      })
    ).json();
    setInactiveUsers(mails);
  }

  useEffect(() => {
    fetchStatistics();
    fetchInactiveUsers();
  }, [setTotal, setPending, setDelivered, setRejected, setInactiveUsers]);

  return (
    <div className={classes.root}>
      {/* Tabs */}
      <Navbar
        navtext="MoJ"
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
          {inactiveUsers.length > 0 ? (
            <ButtonBase className={classes.inactiveOuter}>
              <CsvDownload
                data={inactiveUsers}
                className={classes.inactive}
                filename="inactive_users.csv"
              >
                Download CSV File of Inactive Users
              </CsvDownload>
            </ButtonBase>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
