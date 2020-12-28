import { React, useState, Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './personal.css';
import Typography from '@material-ui/core/Typography';
import { Data } from '../personal/personal';
import { Data1 } from '../personal/personal';
import Button from '@material-ui/core/Button';
import ReadMessagePopup from '../letterpopup/ReadMessagePopup';
import SendMessagePopup from '../letterpopup/SendMessagePopup';

const useStyles = makeStyles((theme) => ({
  margi: {
    // border: '3px solid black',
    backgroundColor: '#FFD94D',
    margin: '5px',
    borderRadius: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '7vh',
    boxShadow: '  0 8px 6px -6px black',
  },
  Gin: {
    padding: '0 0px 0px 0px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1.1,
    marginTop: '0.87vh',
  },
  Gin1: {
    padding: '0 0px 0px 0px',
    marginRight: '0rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1.1,
    marginTop: '0.77vh',
  },

  Gi: {
    flex: 1.5,
  },
  date: {
    margin: '.8rem 0rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '1rem',
  },
  krait: {
    marginLeft: '7px',
  },
  '@media(max-height: 680px)': {
    Gin: {
      fontSize: '20px',
      marginTop: '0.32vh',
    },
    Gin1: {
      marginTop: '0.18vh',
    },
  },
  '@media(max-height: 568px)': {
    Gin: {
      fontSize: '20px',
      marginTop: '0.12vh',
    },
    Gin1: {
      marginTop: '0.08vh',
    },
  },
}));

export default function PersonalCards({ text, index }) {
  const classes = useStyles();
  const { get } = useContext(Data);
  const i = useContext(Data1);
  const [vat, setvat] = useState(false);
  const [k, setk] = useState(0);
  const handle1 = (event) => {
    setvat(true);
  };
  return (
    <Fragment>
      <ReadMessagePopup messagearray={{ get }} startFrom={3} enabled={vat} />
      {console.log(get)};{console.log(vat)};
      {get
        .slice(i, i + 15 <= get.length ? i + 15 : get.length)
        .map((text, index) => (
          <Grid container direction={'column'}>
            <Container
              value={index}
              onClick={handle1}
              className={classes.margi}
              id="cross"
              raised={true}
            >
              <Grid container direction={'row'} className={classes.krait}>
                <Grid item xs className={classes.Gin}>
                  <p className={classes.date}>
                    {`${((i)/15)*15+index+1}.  `}{screen.width >= 591
                      ? text.body.slice(0, 15)
                      : text.body.slice(0, 10)}
                  </p>
                </Grid>
                <Grid
                  item
                  xs
                  alignContent="flex-end"
                  className={classes.Gi}
                ></Grid>
                <Grid item xs lg={2} className={classes.Gin1}>
                  <Typography variant="h6" edge="start">
                    <b key="index">
                      <p className={classes.date}>
                        {screen.width >= 591
                          ? screen.width >= 680
                            ? text.date.slice(0, 24)
                            : text.date.slice(0, 19)
                          : text.date.slice(0, 9)}
                      </p>
                    </b>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        ))}
    </Fragment>
  );
}
