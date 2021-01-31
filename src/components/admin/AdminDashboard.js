import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, IconButton, Snackbar } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { Redirect } from 'react-router-dom';

import Navbar from '../navbar/navbar';
import MessageCard from './MessageCard';
import AssignCoreMembersPopup from '../popups/AssignCoreMembersPopup';
import URL from '../util/url';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      height: '100vh',
    },
    tabs: {
      backgroundColor: '#EF4646',
      padding: '20px 0px 0px 10px',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    tab: {
      borderRadius: '10px 10px 0 0',
      width: '30%',
      textAlign: 'center',
    },
    tabButton: {
      fontWeight: '700',
      fontSize: '20px',
      textTransform: 'none',
      width: '100%',
      fontFamily: 'oxygen',
      borderRadius: '10px 10px 0 0',
    },
    mainContent: {
      width: '100%',
      backgroundColor: '#EF4646',
    },
    inner: {
      backgroundColor: '#FFFDE8',
      borderRadius: '20px 20px 0 0',
      padding: '1.5rem',
    },
    flags: {
      width: '100%',
      fontFamily: 'Oxygen',
      fontStyle: 'normal',
      fontWeight: 900,
      textAlign: 'center',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginBottom: '0.5rem',
      padding: '1rem',
    },
    flag: {
      textTransform: 'none',
      fontFamily: 'oxygen',
      fontSize: '20px',
      fontWeight: 800,
      borderRadius: 0,
    },
    flagText: {
      padding: '0rem 2rem',
    },
    select: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0px',
    },
    subtitle1: {
      fontFamily: 'Oxygen',
      fontStyle: 'normal',
      fontWeight: 900,
      textAlign: 'center',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subtitle2: {
      fontFamily: 'Oxygen',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '70px',
      margin: '0px 15px',
      padding: 0,
      borderBottom: '2px solid #EF4646',
    },
    messages: {
      width: '90%',
      padding: '10px',
      margin: '0px auto 40px auto',
    },
    approveButton: {
      background: '#00CF53',
      color: 'white',
      borderRadius: '25px',
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      height: '3rem',
      textTransform: 'none',
      '&:hover': {
        background: '#00CF53',
        color: 'white',
      },
      fontFamily: 'Oxygen',
    },
    rejectButton: {
      background: '#EF4646',
      color: 'white',
      borderRadius: '25px',
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      height: '3rem',
      textTransform: 'none',
      '&:hover': {
        background: '#EF4646',
        color: 'white',
      },
      fontFamily: 'Oxygen',
    },
    paginatorButton: {
      margin: theme.spacing(1),
      textTransform: 'none',
      fontSize: '16px',
    },
    paginatorFragment: {
      width: 'max-content',
    },
    backToTop: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backToTopButton: {
      textTransform: 'none',
      fontSize: '1rem',
      fontFamily: 'Oxygen, sans serif',
    },
    noMessages: {
      color: '#FC0404',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Oxygen, sans serif',
    },
    footer: {
      width: '100%',
      backgroundColor: '#EF4646',
      height: '10px',
    },
    '@media(min-width: 320px)': {
      flag: {
        fontSize: '12px',
      },
      tab: {
        width: '40%',
      },
      tabButton: {
        fontSize: '12px',
      },
      select: {
        flexDirection: 'column',
      },
      subtitle1: {
        marginBottom: '0.5rem',
      },
      subtitle2: {
        marginBottom: '0.5rem',
      },
      input: {
        width: 'max-content',
      },
      messages: {
        width: '100%',
        padding: '0px',
      },
      buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
      },
      buttons1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
      },
      paginatorFragment: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    '@media(min-width: 360px)': {
      flag: {
        fontSize: '14px',
      },
      messages: {
        width: '100%',
        padding: '5px',
      },
    },
    '@media(min-width: 375px)': {
      tabButton: {
        fontSize: '14px',
      },
    },
    '@media(min-width: 411px)': {
      tabButton: {
        fontSize: '16px',
      },
    },
    '@media(min-width: 540px)': {
      buttons: {
        flexDirection: 'row',
      },
      buttons1: {
        flexDirection: 'row',
      },
      paginatorButton: {
        fontSize: '14px',
      },
    },
    '@media(min-width: 720px)': {
      flag: {
        fontSize: '16px',
      },
      tabButton: {
        fontSize: '18px',
      },
      select: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      subtitle1: {
        marginTop: '0.5rem',
      },
      subtitle2: {
        marginTop: '0.5rem',
      },
      input: {
        width: '70px',
      },
      paginatorButton: {
        fontSize: '16px',
      },
    },
    '@media(min-width: 1024px)': {
      flag: {
        fontSize: '18px',
      },
      tab: {
        width: '30%',
      },
      messages: {
        width: '90%',
      },
      buttons: {
        width: '90%',
        margin: '0px auto',
        display: 'flex',
        justifyContent: 'flex-end',
      },
      buttons1: {
        width: '90%',
        margin: '0px auto',
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  })
);

const red = '#FC0404';
const yellow = '#FFD94D';
const green = '#4CBC14';

const AdminDashboard = () => {
  const classes = useStyles();
  const [tabColor1, setTabColor1] = useState('#FFFDE8');
  const [tabColor2, setTabColor2] = useState('#FB8989');
  const [msgs, setMsgs] = useState([]);
  const [redFlaggedMsgs, setRedFlaggedMsgs] = useState([]);
  const [yellowFlaggedMsgs, setYellowFlaggedMsgs] = useState([]);
  const [greenFlaggedMsgs, setGreenFlaggedMsgs] = useState([]);
  const [checked25, setChecked25] = useState(false);
  const [checked50, setChecked50] = useState(false);
  const [value, setValue] = useState(null);
  const [redFlag, setRedFlag] = useState('transparent');
  const [yellowFlag, setYellowFlag] = useState('transparent');
  const [greenFlag, setGreenFlag] = useState('transparent');
  const [messageId, setMessageId] = useState([]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [type, setType] = useState('');
  const [j, setj] = useState(0);
  const [f, setf] = useState(greenFlaggedMsgs);
  const [display, setDisplay] = useState('none');
  const [spinner, setSpinner] = useState(false);
  const [c3, setc3] = useState(false);

  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const dateFormatter = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate() + ', ';
    const month = date.toLocaleString('default', { month: 'long' }) + ' ';
    const year = date.getFullYear() + ', ';
    const time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return month + day + year + time;
  };

  const { permissionLevel, name, bitsId } = JSON.parse(
    atob(token.split('.')[1])
  );

  if (permissionLevel !== 2) return <Redirect to="/home" />;

  async function fetchMessages() {
    const { messages } = await (
      await fetch(`${URL}/api/level2/unassignedMessages`, {
        method: 'GET',
        headers: {
          token: `${token}`,
        },
      })
    ).json();
    setMsgs(messages.reverse());

    const { data } = await (
      await fetch(`${URL}/api/level2/finalapproval`, {
        method: 'GET',
        headers: {
          token: `${token}`,
        },
      })
    ).json();
    const { approved, denied, yellowflagged } = data;
    if(greenFlag == green){
      setf(approved.reverse());
    }
    if(yellowFlag == yellow){
      setf(yellowflagged.reverse());
    }
    if(redFlag == red){
      setf(denied.reverse());
    }
    setRedFlaggedMsgs(denied.reverse());
    setYellowFlaggedMsgs(yellowflagged.reverse());
    setGreenFlaggedMsgs(approved.reverse());
    setDisplay('flex');
  }

  useEffect(async () => {
    const { messages } = await (
      await fetch(`${URL}/api/level2/unassignedMessages`, {
        method: 'GET',
        headers: {
          token: `${token}`,
        },
      })
    ).json();
    setMsgs(messages.reverse());

    const { data } = await (
      await fetch(`${URL}/api/level2/finalapproval`, {
        method: 'GET',
        headers: {
          token: `${token}`,
        },
      })
    ).json();
    const { approved, denied, yellowflagged } = data;
    setRedFlaggedMsgs(denied.reverse());
    setYellowFlaggedMsgs(yellowflagged.reverse());
    setGreenFlaggedMsgs(approved.reverse());
    setDisplay('flex');
    setf(approved.reverse());
  }, []);

  const handleChange25 = () => {
    if (checked50) setChecked50(!checked50);
    if (checked25 && !checked50) {
      setChecked25(!checked25);
      setMessageId([]);
      setSpinner(true);
      setTimeout(() => setSpinner(false), 500);
    }
    for (let i = j; i < 25+j; i++) {
      if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
    }
    setValue(null);
    setChecked25(!checked25);
    if (!checked25) {
      for (let i = j; i < 25+j; i++) {
        if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
      }
      if (redFlag === red) {
        for (let i = j; i < 25+j; i++) {
          if (redFlaggedMsgs[i])
            setMessageId((messageId) => [...messageId, redFlaggedMsgs[i]._id]);
        }
      } else if (yellowFlag === yellow) {
        for (let i = j; i < 25+j; i++) {
          if (yellowFlaggedMsgs[i])
            setMessageId((messageId) => [
              ...messageId,
              yellowFlaggedMsgs[i]._id,
            ]);
        }
      } else if (greenFlag === green) {
        for (let i = j; i < 25+j; i++) {
          if (greenFlaggedMsgs[i])
            setMessageId((messageId) => [
              ...messageId,
              greenFlaggedMsgs[i]._id,
            ]);
        }
      } else {
        for (let i = j; i < 25+j; i++) {
          if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
        }
        for (let i = j; i < 25+j; i++) {
          if (msgs[i]) setMessageId((messageId) => [...messageId, msgs[i]._id]);
        }
      }
    } else {
      for (let i = j; i < 25+j; i++) {
        if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
      }
    }
  };

  const handleChange50 = () => {
    if (checked25) setChecked25(!checked25);
    if (!checked25 && checked50) {
      setChecked50(!checked25);
      setMessageId([]);
      setSpinner(true);
      setTimeout(() => setSpinner(false), 500);
    }
    for (let i = j; i < 50+j; i++) {
      if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
    }
    setValue(null);
    setChecked50(!checked50);
    if (!checked50) {
      for (let i = j; i < 50+j; i++) {
        if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
      }
      if (redFlag === red) {
        for (let i = j; i < 50+j; i++) {
          if (redFlaggedMsgs[i])
            setMessageId((messageId) => [...messageId, redFlaggedMsgs[i]._id]);
        }
      } else if (yellowFlag === yellow) {
        for (let i = j; i < 50+j; i++) {
          if (yellowFlaggedMsgs[i])
            setMessageId((messageId) => [
              ...messageId,
              yellowFlaggedMsgs[i]._id,
            ]);
        }
      } else if (greenFlag === green) {
        for (let i = j; i < 50+j; i++) {
          if (greenFlaggedMsgs[i])
            setMessageId((messageId) => [
              ...messageId,
              greenFlaggedMsgs[i]._id,
            ]);
        }
      } else {
        for (let i = j; i < 50+j; i++) {
          if (msgs[i]) setMessageId((messageId) => [...messageId, msgs[i]._id]);
        }
      }
    } else {
      for (let i = j; i < 50+j; i++) {
        if (msgs[i]) setMessageId((messageId) => [...messageId, []]);
      }
    }
  };

  const setNumber = () => {
    if (checked25) return 25;
    else if (checked50) return 50;
    else return value;
  };

  const null1 = [];

  const hc1 = () => {
    if (j > 50) {
      setj(j - 50);
      setValue(null);
      setMessageId(null1);
      if (checked25) setChecked25(!checked25);
      if (checked50) setChecked50(!checked50);
    } else if (j <= 50) {
      setj(0);
      setValue(null);
      setMessageId(null1);
      if (checked25) setChecked25(!checked25);
      if (checked50) setChecked50(!checked50);
    }
  };

  const hc2 = () => {
    if (j + 50 < f.length - 50) {
      setj(j + 50);
      setValue(null);
      setMessageId(null1);
      if (checked25) setChecked25(!checked25);
      if (checked50) setChecked50(!checked50);
    } else if (f.length - (j + 50) < 50 && f.length - (j + 50) > 0) {
      setj(j + 50);
      setValue(null);
      setMessageId(null1);
      if (checked25) setChecked25(!checked25);
      if (checked50) setChecked50(!checked50);
    } else if (j + 50 == f.length - 50) {
      setj(j + 50);
      setValue(null);
      setMessageId(null1);
      if (checked25) setChecked25(!checked25);
      if (checked50) setChecked50(!checked50);
    } else {
      setj(j);
      setValue(null);
      setMessageId(null1);
      if (checked25) setChecked25(!checked25);
      if (checked50) setChecked50(!checked50);
    }
  };

  useEffect(() => {
    setRedFlaggedMsgs(redFlaggedMsgs);
    setYellowFlaggedMsgs(yellowFlaggedMsgs);
    setGreenFlaggedMsgs(greenFlaggedMsgs);
  }, [j]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarOpen(false);
  };

  const handleRejection = () => {
    async function postRejectedMessages() {
      const response = await (
        await fetch(`${URL}/api/level2/approveMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: `${token}`,
          },
          body: JSON.stringify({ disapproveId: messageId }),
        })
      ).json();

      if (response.ok) {
        setType('Declined');
        setSnackBarOpen(true);
        fetchMessages();
        setValue(null);
        setChecked25(false);
        setChecked50(false);
      }
    }

    postRejectedMessages();
  };

  const handleApproval = () => {
    async function postApprovedMessages() {
      const response = await (
        await fetch(`${URL}/api/level2/approveMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: `${token}`,
          },
          body: JSON.stringify({ approveId: messageId }),
        })
      ).json();

      if (response.ok) {
        setType('Approved');
        setSnackBarOpen(true);
        fetchMessages();
        setValue(null);
        setChecked25(false);
        setChecked50(false);
      }
    }

    postApprovedMessages();
  };

  return (
    <div className={classes.root}>
      {/* Tabs */}
      <Navbar
        navtext="MoJ"
        navHeading="Admin Dashboard"
        name={name}
        bitsId={bitsId}
      />
      <div className={classes.tabs} id="top">
        <Box
          className={classes.tab}
          style={{ backgroundColor: tabColor1 }}
          onClick={() => {
            setTabColor1('#FFFDE8');
            setTabColor2('#FB8989');
            setRedFlag('transparent');
            setYellowFlag('transparent');
            setGreenFlag('transparent');
            setChecked25(false);
            setChecked50(false);
            setValue(null);
            setj(0);
            fetchMessages();
            setMessageId(null1);
            setc3(false);
            setSpinner(true);
            setTimeout(() => setSpinner(false), 500);
          }}
        >
          <Button className={classes.tabButton}>Pending Messages</Button>
        </Box>
        <Box
          className={classes.tab}
          style={{ backgroundColor: tabColor2 }}
          onClick={() => {
            setTabColor1('#FB8989');
            setTabColor2('#FFFDE8');
            setGreenFlag(green);
            setChecked25(false);
            setChecked50(false);
            setMessageId(null1);
            setf(greenFlaggedMsgs);
            setValue(null);
            setj(0);
            fetchMessages();
            setc3(true);
            setSpinner(true);
            setTimeout(() => setSpinner(false), 500);
          }}
        >
          <Button className={classes.tabButton}>Final Approval</Button>
        </Box>
      </div>
      {/* Main Content */}
      <div className={classes.mainContent}>
        <Box className={classes.inner}>
          <Grid container spacing={3}>
            {tabColor1 === '#FB8989' && (
              <div className={classes.flags}>
                <Button
                  className={classes.flag}
                  onClick={() => {
                    setf(redFlaggedMsgs);
                    setRedFlag(red);
                    setYellowFlag('transparent');
                    setGreenFlag('transparent');
                    setChecked25(false);
                    setChecked50(false);
                    setValue(null);
                    setMessageId(null1);
                    setj(0);
                    setSpinner(true);
                    fetchMessages();
                    setTimeout(() => setSpinner(false), 500);
                  }}
                  style={{ borderBottom: `3px solid ${redFlag}` }}
                >
                  <div className={classes.flagText}>Red Flagged</div>
                </Button>
                <Button
                  className={classes.flag}
                  onClick={() => {
                    setf(yellowFlaggedMsgs);
                    setYellowFlag(yellow);
                    setRedFlag('transparent');
                    setGreenFlag('transparent');
                    setMessageId(null1);
                    setChecked25(false);
                    setChecked50(false);
                    setValue(null);
                    setj(0);
                    setSpinner(true);
                    fetchMessages();
                    setTimeout(() => setSpinner(false), 500);
                  }}
                  style={{ borderBottom: `3px solid ${yellowFlag}` }}
                >
                  <div className={classes.flagText}>Yellow Flagged</div>
                </Button>
                <Button
                  className={classes.flag}
                  onClick={() => {
                    setf(greenFlaggedMsgs);
                    setGreenFlag(green);
                    setRedFlag('transparent');
                    setYellowFlag('transparent');
                    setChecked25(false);
                    setChecked50(false);
                    setValue(null);
                    setMessageId(null1);
                    setj(0);
                    setSpinner(true);
                    fetchMessages();
                    setTimeout(() => setSpinner(false), 500);
                  }}
                  style={{ borderBottom: `3px solid ${greenFlag}` }}
                >
                  <div className={classes.flagText}>Green Flagged</div>
                </Button>
              </div>
            )}
            <div className={classes.select} style={{ display: display }}>
              <Grid item xs className={classes.subtitle1}>
                Select
              </Grid>
              <Grid item xs className={classes.subtitle2}>
                First 25
                <span style={{ marginLeft: '2rem' }}>
                  <svg
                    onClick={handleChange25}
                    display={!checked25 ? 'block' : 'none'}
                    style={{ cursor: 'pointer' }}
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.44 2H12C6.47715 2 2 6.47715 2 12V25C2 30.5228 6.47715 35 12 35H25C30.5228 35 35 30.5228 35 25V11.9"
                      stroke="#EF4646"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    onClick={handleChange25}
                    display={checked25 ? 'block' : 'none'}
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7491 3H12C6.47715 3 2 7.47715 2 13V26C2 31.5228 6.47715 36 12 36H25.4545C30.9774 36 35.4545 31.5228 35.4545 26V12.9"
                      stroke="#EF4646"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.35266 20.4977L13.679 25.2532C15.7919 26.8415 18.776 26.5108 20.4899 24.4985L38.7999 3"
                      stroke="#EF4646"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Grid>
              <Grid item xs className={classes.subtitle2}>
                First 50
                <span style={{ marginLeft: '2rem' }}>
                  <svg
                    onClick={handleChange50}
                    display={!checked50 ? 'block' : 'none'}
                    style={{ cursor: 'pointer' }}
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.44 2H12C6.47715 2 2 6.47715 2 12V25C2 30.5228 6.47715 35 12 35H25C30.5228 35 35 30.5228 35 25V11.9"
                      stroke="#EF4646"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    onClick={handleChange50}
                    display={checked50 ? 'block' : 'none'}
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7491 3H12C6.47715 3 2 7.47715 2 13V26C2 31.5228 6.47715 36 12 36H25.4545C30.9774 36 35.4545 31.5228 35.4545 26V12.9"
                      stroke="#EF4646"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.35266 20.4977L13.679 25.2532C15.7919 26.8415 18.776 26.5108 20.4899 24.4985L38.7999 3"
                      stroke="#EF4646"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Grid>
              <Grid item xs className={classes.subtitle2}>
                <Grid
                  item
                  style={c3 ? { display: 'block' } : { display: 'none' }}
                >
                  <Button
                    variant="contained"
                    className={classes.approveButton}
                    size="large"
                    onClick={async () => {
                      await setSpinner(true);
                      await handleApproval();
                      await fetchMessages();
                      if (greenFlag === green) {
                        await setf(green);
                      }
                      if (yellowFlag === yellow) {
                        await setf(yellow);
                      }
                      if (redFlag === red) {
                        await setf(red);
                      }
                      await setTimeout(() => setSpinner(false), 500);
                    }}
                  >
                    Approve
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {tabColor1 === '#FFFDE8' && msgs.length ? (
            <div className={classes.buttons} style={{ display: display }}>
              <AssignCoreMembersPopup
                fetchMessages={fetchMessages}
                setSpinner={setSpinner}
                messageId={messageId}
                setMessageId={setMessageId}
                fetchMessages={fetchMessages}
                checked25={checked25}
                setChecked25={setChecked25}
                checked50={checked50}
                setChecked50={setChecked50}
                value={value}
                setValue={setValue}
              />
            </div>
          ) : null}
          <div className={classes.messages}>
            {!spinner ? (
              redFlag === red ? (
                redFlaggedMsgs.length > 0 ? (
                  redFlaggedMsgs
                    .slice(
                      j,
                      j + 50 <= redFlaggedMsgs.length
                        ? j + 50
                        : redFlaggedMsgs.length
                    )
                    .map((message, index) => (
                      <MessageCard
                        messageId={messageId}  
                        fetchMessages={fetchMessages}
                        body={message.body}
                        j={j}
                        date={dateFormatter(message.date)}
                        key={redFlaggedMsgs.indexOf(message)}
                        index={redFlaggedMsgs.indexOf(message)}
                        _id={message._id}
                        setMessageId={setMessageId}
                        n={setNumber()}
                      />
                    ))
                ) : (
                  <h1 className={classes.noMessages}>
                    No Messages to Display!
                  </h1>
                )
              ) : greenFlag === green ? (
                greenFlaggedMsgs.length > 0 ? (
                  greenFlaggedMsgs
                    .slice(
                      j,
                      j + 50 <= greenFlaggedMsgs.length
                        ? j + 50
                        : greenFlaggedMsgs.length
                    )
                    .map((message) => (
                      <MessageCard
                        messageId={messageId}  
                        body={message.body}
                        j={j}
                        date={dateFormatter(message.date)}
                        key={greenFlaggedMsgs.indexOf(message)}
                        index={greenFlaggedMsgs.indexOf(message)}
                        _id={message._id}
                        setMessageId={setMessageId}
                        n={setNumber()}
                      />
                    ))
                ) : (
                  <h1 className={classes.noMessages}>
                    No Messages to Display!
                  </h1>
                )
              ) : yellowFlag === yellow ? (
                yellowFlaggedMsgs.length > 0 ? (
                  yellowFlaggedMsgs
                    .slice(
                      j,
                      j + 50 <= yellowFlaggedMsgs.length
                        ? j + 50
                        : yellowFlaggedMsgs.length
                    )
                    .map((message) => (
                      <MessageCard
                        messageId={messageId}  
                        body={message.body}
                        j={j}
                        date={dateFormatter(message.date)}
                        key={yellowFlaggedMsgs.indexOf(message)}
                        index={yellowFlaggedMsgs.indexOf(message)}
                        _id={message._id}
                        setMessageId={setMessageId}
                        n={setNumber()}
                      />
                    ))
                ) : (
                  <h1 className={classes.noMessages}>
                    No Messages to Display!
                  </h1>
                )
              ) : msgs.length !== 0 ? (
                msgs.map((message) => (
                  <MessageCard
                    messageId={messageId}  
                    body={message.body}
                    date={dateFormatter(message.date)}
                    key={msgs.indexOf(message)}
                    index={msgs.indexOf(message)}
                    _id={message._id}
                    setMessageId={setMessageId}
                    n={setNumber()}
                  />
                ))
              ) : (
                <h1 className={classes.noMessages}>No Messages to Display!</h1>
              )
            ) : (
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '40vh' }}
              >
                <Grid item xs={3}>
                  <CircularProgress
                    className={classes.centre}
                    style={{ color: '#ef4646' }}
                  />
                </Grid>
              </Grid>
            )}
          </div>

          {/* Buttons */}
          {tabColor1 === '#FFFDE8' ? (
            msgs.length ? (
              <div className={classes.buttons} style={{ display: display }}>
                <AssignCoreMembersPopup
                  fetchMessages={fetchMessages}
                  setSpinner={setSpinner}
                  messageId={messageId}
                  setMessageId={setMessageId}
                  fetchMessages={fetchMessages}
                  checked25={checked25}
                  setChecked25={setChecked25}
                  checked50={checked50}
                  setChecked50={setChecked50}
                  value={value}
                  setValue={setValue}
                />
              </div>
            ) : null
          ) : (
            <div className={classes.buttons1} style={{ display: display }}>
              <Button
                variant="contained"
                className={classes.rejectButton}
                size="large"
                onClick={async () => {
                  await setSpinner(true);
                  await handleRejection();
                  await fetchMessages();
                  if (greenFlag === green) {
                    await setf(green);
                  }
                  if (yellowFlag === yellow) {
                    await setf(yellow);
                  }
                  if (redFlag === red) {
                    await setf(red);
                  }
                  await setTimeout(() => setSpinner(false), 500);
                }}
              >
                Reject
              </Button>
              <div className={classes.paginatorFragment}>
                <Button
                  className={classes.paginatorButton}
                  onClick={hc1}
                  startIcon={<ChevronLeftRounded />}
                  disabled={j === 0}
                >
                  Previous 50
                </Button>
                <Button
                  className={classes.paginatorButton}
                  onClick={hc2}
                  endIcon={<ChevronRightRounded />}
                  disabled={50 >= f.length - j}
                >
                  Next 50
                </Button>
              </div>
              <Button
                variant="contained"
                className={classes.approveButton}
                size="large"
                onClick={async () => {
                  await setSpinner(true);
                  await handleApproval();
                  await fetchMessages();
                  if (greenFlag === green) {
                    await setf(green);
                  }
                  if (yellowFlag === yellow) {
                    await setf(yellow);
                  }
                  if (redFlag === red) {
                    await setf(red);
                  }
                  await setTimeout(() => setSpinner(false), 500);
                }}
              >
                Approve
              </Button>
            </div>
          )}
          <div className={classes.backToTop}>
            <Button
              className={classes.backToTopButton}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
              style={{ display: display }}
            >
              Back to Top
            </Button>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={snackBarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message={`${type} message(s) successfully!`}
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleSnackbarClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </Box>
      </div>
    </div>
  );
};

export default AdminDashboard;
