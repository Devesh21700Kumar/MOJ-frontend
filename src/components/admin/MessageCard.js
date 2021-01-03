import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, Collapse, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
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
  bitsId: {
    fontSize: '18px',
    fontFamily: 'Oxygen, sans-serif',
    fontWeight: 700,
    padding: 0,
    marginTop: '10px',
  },
  cardContent: {
    margin: 0,
    padding: '5px',
    fontFamily: 'Raleway',
    fontWeight: 500,
    fontStyle: 'normal',
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
    fontWeight: 700,
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
  '@media(min-width: 320px)': {
    date: {
      margin: '20px 15px 0 0',
    },
  },
  '@media(min-width: 540px)': {
    cardContent: {
      fontSize: '16px',
    },
  },
  '@media(min-width: 720px)': {
    date: {
      margin: '30px 15px 0 0',
      fontSize: '16px',
    },
  },
  '@media(min-width: 1024px)': {
    cardContent: {
      fontSize: '18px',
    },
  },
}));

const red = '#EF4646';
const grey = '#9D9D9D';

const MessageCard = ({
  bitsId,
  body,
  date,
  index,
  _id,
  messageId,
  setMessageId,
  n,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showPrimaryText, setShowPrimaryText] = useState(false);

  const changeToInt = (num) => {
    if (num === '') {
      num = 0;
    } else {
      num = parseInt(num);
    }

    return num;
  };

  const handleClick = () => {
    if (!checked) {
      setMessageId((messageId) => [...messageId, _id]);
    }
    setChecked(!checked);
  };

  return (
    <Card className={classes.msgCard} raised={true} onClick={handleClick}>
      <div className={classes.bitsId}>
        {index + 1}. To: {bitsId}
      </div>
      <div>
        <div className={classes.cardContent}>
          <div>
            {!showPrimaryText
              ? body.length > 80
                ? `${body.substr(0, 80)}...`
                : `${body}`
              : ''}
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              component="div"
            >
              {body}
            </Collapse>
          </div>
          <span
            onClick={() => {
              setExpanded(!expanded);
              setShowPrimaryText(!showPrimaryText);
            }}
          >
            {body.length > 80 ? (!expanded ? 'View More' : 'View Less') : ''}
          </span>
        </div>
        <div className={classes.cardFooter}>
          <p className={classes.date}>{date}</p>
          <CardActions disableSpacing>
            <IconButton classes={{ root: classes.iconButton }}>
              <CheckCircleOutlineIcon
                style={{
                  color: index < changeToInt(n) || checked ? red : grey,
                  fontSize: '45px',
                }}
              />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

export default MessageCard;
