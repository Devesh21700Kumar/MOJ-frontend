import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar/navbar';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../credits/credits.css';
import '../credits/creds1.css';
import img1 from './../../imageassets/1A.jpeg';
import img2 from './../../imageassets/2A.jpeg';
import img3 from './../../imageassets/3A.jpeg';
import img4 from './../../imageassets/4A.jpeg';
import img5 from './../../imageassets/5A.jpeg';
import img6 from './../../imageassets/1B.jpeg';
import img7 from './../../imageassets/2B.jpeg';
import img8 from './../../imageassets/3B.jpeg';
import img9 from './../../imageassets/1C.jpeg';
import img10 from './../../imageassets/2C.jpeg';
import img11 from './../../imageassets/3C.jpeg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '4px',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#EF4646',
        //borderRadius: '10px',
      },
    },
    root: {
      //position:'relative',
      //borderRadius:'16px',
      backgroundColor: '#FFFDE8',
      flexGrow: 1,
      minHeight: '100vh',
      //maxWidth: '100vw',
      //padding: '1.5rem',
      //height: '100vh',
      overflowX: 'hidden',
      overflowY: 'hidden',
      minHeight: '120vh',
      //overflowY: 'scroll',
    },
    inner: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#EF4646',
      //overflowY:'scroll',
      //minHeight:'100vh',
    },
    main: {
      padding: '1.5rem',
      borderRadius: '20px 20px 0 0',
      backgroundColor: '#FFFDE8',
      overflowY: 'hidden',
      minHeight: '100vh',
    },
    mainContent: {
      zIndex: '1',
      //borderRadius:'16px',
      overflowWrap: 'break-word',
      marginTop: '9.9vh',
      position: 'absolute',
      backgroundColor: '#FFFDE8',
      padding: '1.5rem',
      width: '40vw',
      //minHeight: '79.5vh',
    },
    stats: {
      overflowWrap: 'break-word',
      width: '45vw',
      margin: '2rem auto',
    },
    mainContentB: {
      overflowY: 'hidden',
      minHeight: '100vh',
      //overflowWrap: 'break-word',
      //minHeight:'110vh',
      //overflowX:'hidden',
      left: '50%',
      marginTop: '4.9vh',
      position: 'absolute',
      //float:'right',
      //Height:'100vh',
      backgroundColor: '#FFFDE8',
      padding: '1.5rem',
      width: '50vw',
    },
    statsB: {
      overflowWrap: 'break-word',
      width: '85vw',
      margin: '2rem auto',
    },
    stat: {
      fontFamily: 'Oxygen, sans-serif',
      fontSize: '18px',
    },
    stat1: {
      fontFamily: 'Oxygen, sans-serif',
      color: '#EF4646',
      fontSize: '28px',
    },
    test: {
      //zIndex: '12',
      //position: 'fixed',
      //width: '37vw',
      position: 'relative',
      overflow: 'hidden',
      height: '14.5vmax',
      width: '14.5vmax',
      border: '2px solid #ef4646',
      marginBottom: '3vh',
      //left: '12.5vw',
      //bottom: '30vh',
      background: '#FFFFFF',
    },
    inactive: {
      backgroundColor: '#4CBC14',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '30px',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      fontWeight: 'bold',
      fontFamily: 'Oxygen',
      outline: 'none',
    },
    inner: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#EF4646',
      //overflowY:'scroll',
      //minHeight:'100vh',
    },
    inactiveOuter: {
      borderRadius: '30px',
    },
    pad: {
      paddingLeft: '2vw',
    },

    '@media(min-width: 540px)': {
      stat: {
        fontSize: '18px',
      },
    },
    main: {
      padding: '1.5rem',
      borderRadius: '20px 20px 0 0',
      backgroundColor: '#FFFDE8',
      overflowY: 'hidden',
      minHeight: '100vh',
    },
  })
);

const handlepics = (e) => {
  //------------handle pics-----------------------
  /*const container = document.querySelector('.photos');
  const category = e.target.innerText;
  const details = data.filter((obj) => obj.category == category)[0].details;
  container.innerHTML = '';
  details.map((obj) => {
    //console.log(obj.pic);
    const img = obj.pic;
    //${obj.pic}.png
    if (obj.post != '1') {
      container.innerHTML += `
			<div>
			<div class="test">
      <a href=${obj.post} target="_blank">
      <img src=${img} alt="" />
      </a>
			</div>
			<div class="details">
				<p class="name">${obj.name}</p>
        <p class="number">${obj.number}</p>
        ${()=>{return(<div><IconButton><GitHubIcon/></IconButton><IconButton><LinkedInIcon/></IconButton><IconButton><InstagramIcon/></IconButton></div>)}}  
			</div>
		</div>
    `;
    } else {
      container.innerHTML += `
			<div>
			<div class="test">
      <img src=${img} alt="" />
			</div>
			<div class="details">
				<p class="name">${obj.name}</p>
        <p class="number">${obj.number}</p>
        <div><IconButton><GitHubIcon/></IconButton><IconButton><LinkedInIcon/></IconButton><IconButton><InstagramIcon/></IconButton></div>
			</div>
		</div>
    `;
    }
  });(*/

  //--------------handle color of selected category----------
  const allCategories = [...document.querySelectorAll('.department')];
  allCategories.forEach((cat) => cat.classList.remove('selected'));
  e.target.classList.add('selected');
};

const Team = () => {
  const [val, setval] = useState(0);
  const classes = useStyles();
  const token = localStorage.getItem('token');

  if (token === null) return <Redirect to="/" />;

  const [c1, setc1] = useState('photos1');

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
                  Organizing Committee
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
                    <div>
                      <div className="test">
                        <img
                          //src={'./../../imageassets/1.jpeg'}
                          src={img9}
                        />
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
                    <div>
                      <div className="test">
                        <img src={img11} />
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
                    <div>
                      <div className="test">
                        <img src={img10} />
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
                  </React.Fragment>
                ) : val == 1 ? (
                  <React.Fragment>
                    <div>
                      <div className="test">
                        <img
                          //src={'./../../imageassets/1.jpeg'}
                          src={img1}
                        />
                      </div>
                      <div className="details">
                        <p className="name">Devesh Kumar</p>
                        <p className="number">Lead Developer</p>
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
                    <div>
                      <div className="test">
                        <img src={img2} />
                      </div>
                      <div className="details">
                        <p className="name">Rohit Rahul Mundada</p>
                        <p className="number">Developer</p>
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
                    <div>
                      <div className="test">
                        <img src={img3} />
                      </div>
                      <div className="details">
                        <p className="name">Aviral Kumar Goel</p>
                        <p className="number">Developer</p>
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
                    <div>
                      <div className="test">
                        <img src={img4} />
                      </div>
                      <div className="details">
                        <p className="name">Ritvij Kumar Sharma</p>
                        <p className="number">Developer</p>
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
                    <div>
                      <div className="test">
                        <img src={img5} />
                      </div>
                      <div className="details">
                        <p className="name">Mayank Mathur</p>
                        <p className="number">Developer</p>
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
                    <div>
                      <div className="test">
                        <img
                          //src={'./../../imageassets/1.jpeg'}
                          src={img6}
                        />
                      </div>
                      <div className="details">
                        <p className="name">Vedant Sachin Bang</p>
                        <p className="number">Lead Developer</p>
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
                            <InstagramIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="test">
                        <img src={img7} />
                      </div>
                      <div className="details">
                        <p className="name">Vishnu Teja Soorea</p>
                        <p className="number">Developer</p>
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
                            <LinkedInIcon />
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
                    <div>
                      <div className="test">
                        <img src={img8} />
                      </div>
                      <div className="details">
                        <p className="name">Gaurav Sharad Dotiya</p>
                        <p className="number">Developer</p>
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
