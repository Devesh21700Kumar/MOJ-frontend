import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
    padding: '15px',
    marginTop: '20px',
    backgroundColor: '#FFD94D',
  },
  cardHeaderRollNum: {
    fontSize: '20px',
    fontFamily: 'Oxygen, sans-serif',
    fontWeight: '700',
    padding: 0,
    marginTop: '10px',
  },
  cardContent: {
    margin: 0,
    overflow: 'hidden',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '17px',
    fontWeight: '400',
    transition: 'all 2s',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  date: {
    margin: '20px 15px 0 0',
    fontStyle: 'italic',
    fontSize: '17px',
    fontFamily: 'Roboto. sans-serif',
  },
  iconButton: {
    padding: 0,
    margin: '5px 10px',
  },
  viewMore: {
    lineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxOrient: 'vertical',
    display: '-webkit-box',
    transition: 'all 2s',
  },
  anchorClass: {
    textDecoration: 'none',
    '&:link': {
      fontSize: '17px',
    },
    transition: 'all 2s',
  },
  link: {
    background: 'none',
    border: 'none',
    outline: 'none',
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
}));

const API_URL = 'https://jogwbackend.herokuapp.com/api/level1';

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
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
};

const MessageCard = ({ rollNumber, message, date, id }) => {
  const classes = useStyles();
  // State variables
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  const [fullView, setFullView] = useState(false);
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
  const viewMore = () => {
    setFullView(!fullView);
  };
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
    <Card className={cardClass} raised={true}>
      <CardHeader
        title={'To: ' + rollNumber}
        className={classes.cardHeaderRollNum}
        titleTypographyProps={{
          variant: 'inherit',
        }}
      />
      <div>
        <CardContent style={{ transitionDuration: '2s' }}>
          <p
            className={`${classes.cardContent} ${
              fullView ? '' : classes.viewMore
            }`}
          >
            {message}
          </p>
          <button className={classes.link} onClick={viewMore}>
            {fullView ? 'View less' : 'View more'}
          </button>
        </CardContent>
        <div className={classes.cardFooter}>
          <p className={classes.date}>{date}</p>
          <CardActions disableSpacing>{buttons}</CardActions>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={1000}
        onClose={() => setTimeout(handleClose, 1000)}
        message={text}
        key={text}
      />
    </Card>
  );
};

export default MessageCard;
