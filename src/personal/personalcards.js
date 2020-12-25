import { React, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './personal.css';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  margi: {
    // border: '3px solid black',
    backgroundColor: '#FFD94D',
    margin: '5px',
    borderRadius: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Gin: {
    marginTop: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1,
  },
  Gin1: {
    marginTop: '12px',
    marginRight: '2rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1,
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
}));

export default function PersonalCards({ text, index }) {
  const classes = useStyles();
  return (
    <Grid container direction={'column'}>
      <Container className={classes.margi} id="cross">
        <Grid container direction={'row'} className={classes.krait}>
          <Grid item xs className={classes.Gin}>
            <IconButton>{text}</IconButton>
          </Grid>
          <Grid item xs alignContent="flex-end" className={classes.Gi}></Grid>
          <Grid item xs lg={2} className={classes.Gin1}>
            <Typography variant="h6" edge="start">
              <b key="index">
                <p className={classes.date}>28th Dec 2020, 2:31 a.m.</p>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
