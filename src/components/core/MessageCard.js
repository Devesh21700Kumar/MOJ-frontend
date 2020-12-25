import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Snackbar,
} from '@material-ui/core';
import { CancelRounded, CheckCircleRounded } from '@material-ui/icons';
import ShowMoreText from 'react-show-more-text';

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
    padding: '5px',
    margin: 0,
    overflow: 'hidden',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '17px',
    fontWeight: '400',
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
  anchorClass: {
    textDecoration: 'none',
    '&:link': {
      fontSize: '17px',
    },
  },
}));

const MessageCard = ({ rollNumber, message, date }) => {
  const classes = useStyles();
  // State variables
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  // click handlers
  const handleClick = (msg) => {
    setOpen(true);
    setText('This message has been ' + msg);
    setStatus(msg);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleStatus = () => {
    if (status === 'accepted') return '7px solid #00CF53';
    else if (status === 'rejected') return '7px solid #EF4646';
    else return;
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
    </React.Fragment>
  );
  // complete component
  return (
    <Card
      className={classes.msgCard}
      style={{ borderRight: handleStatus() }}
      raised={true}
    >
      <CardHeader
        title={'To: ' + rollNumber}
        className={classes.cardHeaderRollNum}
        titleTypographyProps={{
          variant: 'paragraph',
        }}
      />
      <div>
        <ShowMoreText
          lines={3}
          more="View more"
          less="View less"
          expanded={false}
          anchorClass={classes.anchorClass}
          className={classes.cardContent}
        >
          <p>{message}</p>
        </ShowMoreText>
        <div className={classes.cardFooter}>
          <p className={classes.date}>{date}</p>
          <CardActions disableSpacing>{buttons}</CardActions>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => setTimeout(handleClose, 1000)}
        message={text}
        key={text}
      />
    </Card>
  );
};

export default MessageCard;
