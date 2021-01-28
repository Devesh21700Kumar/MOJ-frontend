import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  makeStyles,
  Snackbar,
} from '@material-ui/core';
import {
  CancelRounded,
  CheckCircleRounded,
  FlagRounded,
} from '@material-ui/icons';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  msgCard: {
    margin: '20px auto',
    padding: '15px',
    backgroundColor: '#FFD94D',
    borderRadius: '15px',
    transition: 'all ease-in-out 0.3s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
  },
  index: {
    fontSize: '18px',
    fontFamily: 'Oxygen, sans-serif',
    fontWeight: 700,
    padding: 0,
    marginTop: '10px',
  },
  cardContent: {
    margin: 0,
    overflow: 'hidden',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '17px',
    fontWeight: 500,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  date: {
    margin: '30px 15px 0 0',
    fontStyle: 'italic',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },
  iconButton: {
    padding: 0,
    margin: '5px 10px',
  },
  acceptedMessage: {
    borderRight: '7px solid #00CF53',
  },
  rejectedMessage: {
    borderRight: '7px solid #EF4646',
  },
  flaggedMessage: {
    borderRight: '7px solid #4B4B4B',
  },
  //nonflaggedMessage:{
  //borderRight:'none',
  //},
}));

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api/level1`;

const postApproval = async (id, approval, flag) => {
  try {
    const response = await (
      await fetch(`${API_URL}/approval`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          messageId: id,
          approved: approval,
          flag: flag,
        }),
      })
    ).json();
  } catch (error) {
    console.error(error.message);
  }
};

const MessageCard = ({ message, date, id, index }) => {
  const classes = useStyles();
  // State variables
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [showPrimaryText, setShowPrimaryText] = useState(false);

  // click handlers
  const handleClick = (msg) => {
    setOpen(true);
    setText('This message has been ' + msg);
    setStatus(msg);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (status === 'accepted') {
      postApproval(id, true, false);
    } else if (status === 'rejected') {
      postApproval(id, false, false);
    } else if (status === 'flagged') {
      postApproval(id, false, true);
    }
    return () => {};
  }, [status]);
  // button react fragment
  const buttons = (
    <React.Fragment>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={() => handleClick('accepted')}
      >
        <CheckCircleRounded
          style={{
            color: '#00CF53',
            fontSize: '45px',
          }}
        />
      </IconButton>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={() => handleClick('rejected')}
      >
        <CancelRounded
          style={{
            color: '#EF4646',
            fontSize: '45px',
          }}
        />
      </IconButton>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={() => handleClick('flagged')}
      >
        <FlagRounded
          style={{
            backgroundColor: '#4B4B4B',
            color: 'white',
            fontSize: '30px',
            borderRadius: '20px',
            padding: '5px',
          }}
        />
      </IconButton>
    </React.Fragment>
  );
  var cardClass = classNames(
    classes.msgCard,
    status === 'accepted'
      ? classes.acceptedMessage
      : status === 'rejected'
      ? classes.rejectedMessage
      : status === 'flagged'
      ? classes.flaggedMessage
      : null
  );
  // complete component
  return (
    <div>
      <Card className={cardClass} raised={true}>
        <div>
          <div className={classes.cardContent}>
            <div>
              <span className={classes.index}>{index + 1}. </span>
              {!showPrimaryText
                ? message.length > 450
                  ? `${message.substr(0, 450)}...`
                  : `${message}`
                : ''}
              <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                component="div"
              >
                {message}
              </Collapse>
            </div>
            <span
              onClick={() => {
                setExpanded(!expanded);
                setShowPrimaryText(!showPrimaryText);
              }}
            >
              {message.length > 80
                ? !expanded
                  ? 'View More'
                  : 'View Less'
                : ''}
            </span>
          </div>
          <div className={classes.cardFooter}>
            <p className={classes.date}>{date}</p>
            <CardActions disableSpacing>{buttons}</CardActions>
          </div>
        </div>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={1000}
        onClose={() => setTimeout(handleClose, 1000)}
        message={text}
        key={text}
      />
    </div>
  );
};

export default MessageCard;
