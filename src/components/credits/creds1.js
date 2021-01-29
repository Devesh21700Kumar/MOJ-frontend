import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import Navbar from '../navbar/navbar';
import '../credits/creds1.css';
import img1 from './../../imageassets/1A.jpeg';
import img2 from './../../imageassets/2A.jpeg';
import img3 from './../../imageassets/3A.jpg';
import img4 from './../../imageassets/4A.jpeg';
import img5 from './../../imageassets/5A.jpeg';
import img6 from './../../imageassets/1B.jpeg';
import img7 from './../../imageassets/2B.jpeg';
import img8 from './../../imageassets/3B.jpeg';
import img9 from './../../imageassets/1C.jpeg';
import img10 from './../../imageassets/2C.jpeg';
import img11 from './../../imageassets/3C.jpeg';
import img12 from './../../imageassets/4C.jpeg';
import img13 from './../../imageassets/5C.jpeg';
import img14 from './../../imageassets/6C.jpeg';

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
      minHeight: '100vh',
      overflowX: 'hidden',
      overflowY: 'hidden',
      minHeight: '120vh',
    },
    inner: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#EF4646',
    },
    main: {
      padding: '1.5rem',
      borderRadius: '10px 10px 0 0',
      backgroundColor: '#FFFDE8',
      overflowY: 'hidden',
      minHeight: '100vh',
    },
    mainContent: {
      zIndex: '1',
      overflowWrap: 'break-word',
      marginTop: '9.9vh',
      position: 'absolute',
      backgroundColor: '#FFFDE8',
      padding: '1.5rem',
      width: '40vw',
    },
  })
);

const handlepics = (e) => {
  const allCategories = [...document.querySelectorAll('.department')];
  allCategories.forEach((cat) => cat.classList.remove('selected'));
  e.target.classList.add('selected');
};

const Team = () => {
  const [val, setval] = useState(0);
  const classes = useStyles();
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const { name, bitsId } = JSON.parse(atob(token.split('.')[1]));
  return (
    <div className={classes.root} id="r">
      {/* Tabs */}
      <Navbar
        navtext="MoJ"
        navHeading="Credits"
        name={name}
        bitsId={bitsId}
        stats={true}
      />

      {/* Main Content */}

      <div className={classes.inner}>
        <Box className={classes.main}>
          <div id="team-parent">
            <div className="team">
              <div className="depart-name">
                <div
                  onClick={(e) => {
                    handlepics(e);
                    setval(0);
                  }}
                  className="department selected"
                >
                  Coordinators
                </div>
                <div
                  onClick={(e) => {
                    handlepics(e);
                    setval(1);
                  }}
                  className="department"
                >
                  FrontEnd Team
                </div>
                <div
                  onClick={(e) => {
                    handlepics(e);
                    setval(2);
                  }}
                  className="department"
                >
                  BackEnd Team
                </div>
              </div>
              <div className="photos">
                {val == 0 ? (
                  <React.Fragment>
                    <div className="photo">
                      <div className="test">
                        <img src={img9} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Ishant</p>
                        <p className="number">Chief Coordinator</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/ishantgupta777 "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/ishantgupta777/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/im_ishant_/?hl=en  "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img11} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Samesh Lakhotia</p>
                        <p className="number">Sub Coordinator</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/sameshl "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/samesh-lakhotia/  "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/samesh.l/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img10} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Arjun Bajpai</p>
                        <p className="number">Android & Design Head</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/antailbaxt3r"
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/arjun-bajpai/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/arjunbajpai2000/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img12} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Arpit Bhardwaj</p>
                        <p className="number">Web Dev Head</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/arpitbhardwaj24"
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/arpit-bhardwaj-3a170a121/"
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/maybe_arpit/"
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img13} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Sarvesh Shinde</p>
                        <p className="number">Head of Operations</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/Sarvesh67"
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/sarvesh67/"
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/_sarvesh67/"
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img14} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Anshuman Singh</p>
                        <p className="number">Game Dev Head</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/MysteriousAcadia"
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/notanshuman/"
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/notanshuman/"
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : val == 1 ? (
                  <React.Fragment>
                    <div className="photo">
                      <div className="test">
                        <img src={img1} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Devesh Kumar</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/Devesh21700Kumar "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/devesh-kumar-529982198/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/divinus_02/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img2} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Rohit Rahul Mundada</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/Rohit-Mundada"
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/rohit-mundada-84b51219b/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/_rohit_mundada_/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img3} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Aviral Kumar Goel</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/Aviral09 "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/aviral-kumar-goel/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/aviralgoel_/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img4} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Ritvij Kumar Sharma</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/ritvij14 "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/ritvij-kumar-sharma-1410-rks/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/ritvij_14.exe/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img5} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Mayank Mathur</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/Mynk-9 "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/mayank-mathur-205767197/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/mayankmthr/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="photo">
                      <div className="test">
                        <img src={img6} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Vedant Sachin Bang</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/VedantBang "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/vedant-bang-65182a193/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a style={{ color: '#8a3ab9' }} href="#">
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img7} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Vishnu Teja Soorea</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/V-T-Soorea "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a style={{ color: '#0e76a8' }} href="#">
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/sooreavishnu/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div className="photo">
                      <div className="test">
                        <img src={img8} className="image" />
                      </div>
                      <div className="details">
                        <p className="name">Gaurav Sharad Dotiya</p>
                        <div>
                          <IconButton>
                            <a
                              style={{ color: 'black' }}
                              href="https://github.com/grv1 "
                              target="_blank"
                            >
                              <GitHubIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.linkedin.com/in/gaurav-dotiya/ "
                              target="_blank"
                              style={{ color: '#0e76a8' }}
                            >
                              <LinkedInIcon />
                            </a>
                          </IconButton>
                          <IconButton>
                            <a
                              href="https://www.instagram.com/gauravdotiya/?hl=en "
                              target="_blank"
                              style={{ color: '#8a3ab9' }}
                            >
                              <InstagramIcon />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Team;
