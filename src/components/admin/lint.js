import { useState, Fragment, useEffect, createContext } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DashBoardCards from '../DashBoard/DashBoardCards';
import AccountCircle from '@material-ui/icons/AccountCircle';
//export const Data = createContext();
//import axios from 'axios';
//export const Data1 = createContext();
import Avatar from '@material-ui/core/Avatar';
import PrimarySearchAppBar from '../navbar/navbar';
import { Redirect } from 'react-router-dom';
import '../DashBoard/loader.css';
import useStyles from '../DashBoard/DashBoardStyles';
import LeftpaneTop from '../leftpanecomponent/leftpanetop';
import LeftpaneBottom from '../leftpanecomponent/leftpanebottom';
import { Announcement } from '@material-ui/icons';
import AnnouncementCards from '../DashBoard/AnnouncementCards';
import Followup from '../DashBoard/Followup';

export default function DashBoardfirst() {
  const classes = useStyles();

  const [load, setload] = useState(false);
  const [Announcementdata, setAnnouncementdata] = useState(
    Array(50)
      .fill({
        body:
          'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummyLorem Ipsum is simply dummy.',
      })
      .map((obj) => {
        return {
          body: obj.body,
        };
      })
  );

  return (
    <Fragment>
      <div className={classes.root} id="root">
        <div className="nav1">
          <PrimarySearchAppBar />
        </div>

        {/*Welcome message and heading*/}

        <div className={classes.mainContent} id="divtoprint"></div>
        <Box className={classes.inner}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={12} md={12} lg={12}>
                  <LeftpaneTop />
                </Grid>
                <Grid item xs={6} sm={12} md={12} lg={12}>
                  <LeftpaneBottom />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7}>
              {load ? (
                <div className={classes.messages}>
                  <Container>
                    <div className="spinwrap">
                      <div className="spinner">
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </Container>
                </div>
              ) : (
                <Fragment>
                  <div className={classes.messages2}>
                    <IconButton>
                      <Avatar />
                    </IconButton>
                    <Typography>
                      Devesh Kumar
                      <br />
                      f201902xxG
                    </Typography>
                  </div>
                  <div className={classes.messages}>
                    <Container style={{ marginTop: '0px' }}>
                      <AnnouncementCards body={Announcementdata.body} />
                    </Container>
                  </div>
                  <div className={classes.messages1}>
                    <Button variant="contained">Ask a Question</Button>
                  </div>
                </Fragment>
              )}
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              {load ? (
                <div className={classes.messages}>
                  <Container>
                    <div className="spinwrap">
                      <div className="spinner">
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </Container>
                </div>
              ) : (
                <Fragment>
                  <Followup />
                </Fragment>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Fragment>
  );
}
