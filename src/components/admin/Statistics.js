import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CsvDownload from 'react-json-to-csv';
import Navbar from '../navbar/navbar';
import URL from '../util/url';
import { useHistory, Redirect } from 'react-router-dom';

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
    coreStats: {
      fontFamily: 'Oxygen',
      margin: '10px 0px',
    },
    msgCard: {
      padding: '15px',
      marginTop: '20px',
      backgroundColor: '#FFD94D',
      borderRadius: '15px',
      transition: 'all ease-in-out 0.3s',
      '&:hover': {
        cursor: 'pointer',
        transform: 'translateY(-2px)',
      },
    },
    content: {
      fontSize: '14px',
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 700,
      padding: 0,
      marginTop: '10px',
    },
    coreName: {
      fontSize: '12px',
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
      transition: 'all ease-in-out 0.3s',
      '&:hover': {
        backgroundColor: '#5CDE1B',
        transform: 'translateY(-2px)',
      },
      '&:active': {
        transform: 'scale(0.99)',
      },
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

const CoreCard = ({
  name,
  pending,
  greenflagged,
  redflagged,
  yellowflagged,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.msgCard} raised={true}>
        <div className={classes.content}>
          Name: <span className={classes.coreName}>{name}</span>
        </div>
        <div className={classes.content}>Pending: {pending}</div>
        <div className={classes.content}>Green Flagged: {greenflagged}</div>
        <div className={classes.content}>Red Flagged: {redflagged}</div>
        <div className={classes.content}>Yellow Flagged: {yellowflagged}</div>
      </Card>
    </Grid>
  );
};

const Statistics = () => {
  const classes = useStyles();
  const [total, setTotal] = useState('');
  const [pending, setPending] = useState('');
  const [delivered, setDelivered] = useState('');
  const [rejected, setRejected] = useState('');
  const [coreStats, setCoreStats] = useState([]);
  const [inactiveUsers, setInactiveUsers] = useState({});
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const { permissionLevel, name, bitsId } = JSON.parse(
    atob(token.split('.')[1])
  );

  if (permissionLevel !== 2) return <Redirect to="/home" />;

  async function fetchStatistics() {
    const { total, pending, delivered, rejected, corestats } = await (
      await fetch(`${URL}/api/level2/statistics`, {
        method: 'GET',
        headers: { token: `${token}` },
      })
    ).json();
    setTotal(total);
    setPending(pending);
    setDelivered(delivered);
    setRejected(rejected);
    setCoreStats(corestats.sort((a, b) => a.name.localeCompare(b.name)));
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
          <h1 className={classes.coreStats}>Core Stats:</h1>
          <Grid container spacing={3} style={{ paddingBottom: '2rem' }}>
            {coreStats.map(
              (
                { name, pending, greenflagged, redflagged, yellowflagged },
                index
              ) => {
                return (
                  <CoreCard
                    key={index}
                    name={name}
                    pending={pending}
                    greenflagged={greenflagged}
                    redflagged={redflagged}
                    yellowflagged={yellowflagged}
                  />
                );
              }
            )}
          </Grid>
          {inactiveUsers.length > 0 ? (
            <CsvDownload
              data={inactiveUsers}
              className={classes.inactive}
              filename="inactive_users.csv"
            >
              Download CSV File of Inactive Users
            </CsvDownload>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
