import { React, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './personal.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  margi: {
    // border: '3px solid black',
    backgroundColor: '#FFD94D',
    margin: '5px',
    borderRadius: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '7vh',
    boxShadow: ' 10px 10px 5px grey',
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
    marginRight: '2rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1.1,
    marginTop: '0.77vh',
  },

  Gi: {
    flex: 2,
  },
  date: {
    margin: '.8rem 1rem 0 0',
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
  const date = ['28th Dec 2020, 2:31 a.m.', '28th Dec 2020, 2:31 a.m.'];
  return (
    <Grid container irection={'column'}>
      <Container className={classes.margi} id="cross" raised={true}>
        <Grid container direction={'row'} className={classes.krait}>
          <Grid item xs className={classes.Gin}>
            <p className={classes.date}>
              {screen.width >= 591 ? text.slice(0, 15) : text.slice(0, 10)}
            </p>
          </Grid>
          <Grid item xs alignContent="flex-end" className={classes.Gi}></Grid>
          <Grid item xs lg={2} className={classes.Gin1}>
            <Typography variant="h6" edge="start">
              <b key="index">
                <p className={classes.date}>
                  {screen.width >= 591
                    ? screen.width >= 680
                      ? date[0].slice(0, 24)
                      : date[0].slice(0, 19)
                    : date[0].slice(0, 9)}
                </p>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
