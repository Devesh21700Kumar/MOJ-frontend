import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, CssBaseline, Grid, InputBase } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';

import MessageCard from './MessageCard';
import message_data from './messageData';
import AssignCoreMembersPopup from '../popups/AssignCoreMembersPopup';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#FFFDE8',
      flexGrow: 1,
      '*::-webkit-scrollbar': {
        width: '10px',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#EF4646',
        borderRadius: '30px',
      },
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
      marginBottom: '1rem',
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
      padding: '10px 0px',
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
      marginBottom: '1rem',
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
      marginBottom: '1rem',
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
      width: 'mex-content',
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
        padding: '10px',
      },
      buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 70px',
      },
      buttons1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 70px',
      },
    },
  })
);


const red = '#FC0404';
const yellow = '#FFD94D';
const green = '#4CBC14';

const ShowMessages = ({
  msgs,
  redFlaggedMsgs,
  yellowFlaggedMsgs,
  greenFlaggedMsgs,
  redFlag,
  yellowFlag,
  greenFlag,
  setNumber,
}) => {
  return (
    <>
      {redFlag === red
        ? redFlaggedMsgs.map((message, index) => (
            <MessageCard
              bitsId={message.bitsId}
              message={message.message}
              date={message.date}
              key={index}
              index={index}
              n={setNumber()}
            />
          ))
        : greenFlag === green
        ? greenFlaggedMsgs.map((message, index) => (
            <MessageCard
              bitsId={message.bitsId}
              message={message.message}
              date={message.date}
              key={index}
              index={index}
              n={setNumber()}
            />
          ))
        : yellowFlag === yellow
        ? yellowFlaggedMsgs.map((message, index) => (
            <MessageCard
              bitsId={message.bitsId}
              message={message.message}
              date={message.date}
              key={index}
              index={index}
              n={setNumber()}
            />
          ))
        : msgs.map((message, index) => (
            <MessageCard
              bitsId={message.bitsId}
              message={message.message}
              date={message.date}
              key={index}
              index={index}
              n={setNumber()}
            />
          ))}
    </>
  );
};

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
  const [value, setValue] = useState('');
  const [redFlag, setRedFlag] = useState('transparent');
  const [yellowFlag, setYellowFlag] = useState('transparent');
  const [greenFlag, setGreenFlag] = useState('transparent');


  useEffect(() => {
    setMsgs(message_data);
    setRedFlaggedMsgs(message_data.filter((message) => message.flag === 'red'));
    
    setYellowFlaggedMsgs(
      message_data.filter((message) => message.flag === 'yellow')
    );
    
    setGreenFlaggedMsgs(
      message_data.filter((message) => message.flag === 'green')
    );
    
  }, [setMsgs, setRedFlaggedMsgs, setYellowFlaggedMsgs, setGreenFlaggedMsgs]);

  const handleChange25 = () => {
    
    if (checked50 === true) {
        setChecked50(!checked50);
      }
      setValue(' ');
  
      setChecked25(!checked25);

  };

  const handleChange50 = () => {
   
    if (checked25 === true) {
        setChecked25(!checked25);
      }
      setValue(' ');

      setChecked50(!checked50);
  
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (checked25 === true) {
        setChecked25(!checked25);
      }
      if (checked50 === true) {
        setChecked50(!checked50);
      }
  };

  const setNumber = () => {
    if (checked25) return '25';
    else if (checked50) return '50';
    else return value;
  };
  const [i, seti] = useState(0);

  const hc1 = () => {
    if (i >= 50) {
      seti((i)=>i - 50);
      setValue(' ');
      if (checked25 === true) {
        setChecked25(!checked25);
      }
          if (checked50 === true) {
        setChecked50(!checked50);
      }
    }
    //console.log(i);

  };

  const hc2 = () => {
      seti((i)=>i + 50);
      setValue(' ');
      if (checked25 === true) {
        setChecked25(!checked25);
                if (checked50 === true) {
        setChecked50(!checked50);
      }
    //console.log(i);
    }
};

useEffect(() => {
  setMsgs(message_data);
  console.log(redFlaggedMsgs.length);
  setRedFlaggedMsgs(message_data.filter((message) => message.flag === 'red').slice((redFlaggedMsgs.length>=i)?i:i-50,(redFlaggedMsgs.length>=i)?i+50:i));
  setYellowFlaggedMsgs(
    message_data.filter((message) => message.flag === 'yellow').slice((yellowFlaggedMsgs.length>=i)?i:i-50,(yellowFlaggedMsgs.length>=i)?i+50:i)
  );
  setGreenFlaggedMsgs(
    message_data.filter((message) => message.flag === 'green').slice((greenFlaggedMsgs.length>=i)?i:i-50,(greenFlaggedMsgs.length>=i)?i+50:i)
  );
  /*setRedFlaggedMsgs((redFlaggedMsgs) =>
    redFlaggedMsgs.slice(i,i+50)
  );
  setYellowFlaggedMsgs((yellowFlaggedMsgs) =>
    yellowFlaggedMsgs.slice(i,i+50)
  );
  setGreenFlaggedMsgs((greenFlaggedMsgs) =>
    greenFlaggedMsgs.slice(i,i+50)
  );*/
//},[i,setMsgs, setRedFlaggedMsgs, setYellowFlaggedMsgs, setGreenFlaggedMsgs]);
},[i]);
  const Paginator = () => {
    return (
      <div className={classes.paginatorFragment}>
        <Button
          className={classes.paginatorButton}
          onClick={hc1}     
          startIcon={<ChevronLeftRounded />}
        >
        Previous 50
        </Button>
        <Button
          className={classes.paginatorButton}
          onClick={hc2}
          endIcon={<ChevronRightRounded />}
        >
          Next 50
        </Button>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Tabs */}
      <div className={classes.tabs}>
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
                    setRedFlag(red);
                    setYellowFlag('transparent');
                    setGreenFlag('transparent');
                    setChecked25(false);
                    setChecked50(false);
                    setValue('');
                  }}
                  style={{ borderBottom: `3px solid ${redFlag}` }}
                >
                  <div className={classes.flagText}>Red Flagged</div>
                </Button>
                <Button
                  className={classes.flag}
                  onClick={() => {
                    setYellowFlag(yellow);
                    setRedFlag('transparent');
                    setGreenFlag('transparent');
                    setChecked25(false);
                    setChecked50(false);
                    setValue('');
                  }}
                  style={{ borderBottom: `3px solid ${yellowFlag}` }}
                >
                  <div className={classes.flagText}>Yellow Flagged</div>
                </Button>
                <Button
                  className={classes.flag}
                  onClick={() => {
                    setGreenFlag(green);
                    setRedFlag('transparent');
                    setYellowFlag('transparent');
                    setChecked25(false);
                    setChecked50(false);
                    setValue('');
                  }}
                  style={{ borderBottom: `3px solid ${greenFlag}` }}
                >
                  <div className={classes.flagText}>Green Flagged</div>
                </Button>
              </div>
            )}
            <div className={classes.select}>
              <Grid item xs className={classes.subtitle1}>
                Select
              </Grid>
              <Grid item xs className={classes.subtitle2}>
                First 25
                <span style={{ marginLeft: '2rem' }}>
                  <svg
                    onClick={handleChange25}
                    display={checked25 === false ? 'block' : 'none'}
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
                    display={checked25 === true ? 'block' : 'none'}
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
                    display={checked50 === false ? 'block' : 'none'}
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
                    display={checked50 === true ? 'block' : 'none'}
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
                <Grid item>
                  First
                  <InputBase
                    className={classes.input}
                    inputProps={{ 'aria-label': 'naked' }}
                    value={value}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <div className={classes.messages}>
            <ShowMessages
              msgs={msgs}
              redFlaggedMsgs={redFlaggedMsgs}
              yellowFlaggedMsgs={yellowFlaggedMsgs}
              greenFlaggedMsgs={greenFlaggedMsgs}
              redFlag={redFlag}
              yellowFlag={yellowFlag}
              greenFlag={greenFlag}
              setNumber={setNumber}
            />
          </div>

          {/* Buttons */}
          {tabColor1 === '#FFFDE8' ? (
            <div className={classes.buttons}>
              <AssignCoreMembersPopup />
            </div>
          ) : (
            <div className={classes.buttons1}>
              <Button
                variant="contained"
                className={classes.rejectButton}
                size="large"
              >
                Reject
              </Button>
              <Paginator />
              <Button
                variant="contained"
                className={classes.approveButton}
                size="large"
              >
                Approve
              </Button>
            </div>
          )}
        </Box>
      </div>
    </div>
  );
};

export default AdminDashboard;
