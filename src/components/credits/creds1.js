import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar/navbar';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../credits/credits.css';
import '../credits/creds1.css';

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
    '@media(max-width: 320px)': {
      stat: {
        fontSize: '14.5px',
      },
      stat1: {
        fontSize: '15px',
      },
    },
    '@media(min-width: 320px)': {
      stat: {
        fontSize: '14.5px',
      },
      stat1: {
        fontSize: '15px',
      },
      mainContentB: {
        overflowWrap: 'break-word',
        //overflowY:'scroll',
        overflowX: 'hidden',
        left: '50%',
        marginTop: '4.9vh',
        position: 'absolute',
        //float:'right',
        backgroundColor: '#FFFDE8',
        padding: '1.5rem',
        width: '35vw',
      },
    },
    '@media(min-width: 360px)': {
      stat: {
        fontSize: '15px',
      },
      stat1: {
        fontSize: '18px',
      },
      mainContentB: {
        overflowWrap: 'break-word',
        //overflowY:'scroll',
        overflowX: 'hidden',
        left: '50%',
        marginTop: '4.9vh',
        position: 'absolute',
        //float:'right',
        backgroundColor: '#FFFDE8',
        padding: '1.5rem',
        width: '35vw',
      },
    },
    '@media(min-width: 410px)': {
      stat: {
        fontSize: '16px',
      },
      stat1: {
        fontSize: '18px',
      },
      mainContentB: {
        overflowWrap: 'break-word',
        //overflowY:'scroll',
        overflowX: 'hidden',
        left: '50%',
        marginTop: '4.9vh',
        position: 'absolute',
        //float:'right',
        backgroundColor: '#FFFDE8',
        padding: '1.5rem',
        width: '37vw',
      },
    },
    '@media(min-width: 540px)': {
      stat: {
        fontSize: '18px',
      },
    },
    '@media(min-width: 720px)': {
      stat: {
        fontSize: '20px',
      },
      stat1: {
        fontSize: '28px',
      },
      mainContentB: {
        overflowWrap: 'break-word',
        //overflowY:'scroll',
        overflowX: 'hidden',
        left: '50%',
        marginTop: '5.9vh',
        position: 'absolute',
        //float:'right',
        backgroundColor: '#FFFDE8',
        padding: '1rem',
        width: '45vw',
        //marginleft:'1.5vw',
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



const data = [
	{
		category: 'Organizing Committee',
		details: [
			{
				pic: 3,
				name: 'Gourav Baganikar',
				number: '7798296537 ',
				id: 'gourav@bits-spree.org',
				post: 'Chief Coordinator & CSR Head'
			},
			{
				pic: 15,
				name: 'Tanmay Govil ',
				number: ' 7697707699',
				id: ' tanmay@bits-spree.org ',
				post: 'Events Head'
			},
			{
				pic: 23,
				name: 'Dhaval Punwatkar ',
				number: ' 7021092255 ',
				id: ' dhaval@bits-spree.org',
				post: 'Research and Cultural Head'
			},
			{
				pic: 8,
				name: 'Ayush Tewari',
				number: ' 8860193190 ',
				id: 'ayusht@bits-spree.org',
				post: 'Head Of Operations'
			}
		]
	},
	{
		category: 'Council for Student Affairs',
		details: [
			{
				pic: 30,
				name: 'Dhruv Kaluskar',
				number: '9665581729',
				id: 'prez@goa.bits-pilani.ac.in',
				post: 'CSA President'
			},
			{
				pic: 31,
				name: 'Avi Chauhan',
				number: '9665581729',
				id: 'viceprez@goa.bits-pilani.ac.in',
				post: 'CSA Vice President'
			},
			{
				pic: 32,
				name: 'Aanak Sengupta',
				number: '70305 30377',
				id: 'trez@goa.bits-pilani.ac.in',
				post: 'Treasurer'
			},
			{
				pic: 34,
				name: 'Devashish Rane',
				number: '9552674242',
				id: 'sportssec@goa.bits-pilani.ac.in',
				post: 'Sports Secretary'
			},
			{
				pic: 33,
				name: 'Aseem Juneja',
				number: '7589201824',
				id: 'gensec@goa.bits-pilani.ac.in',
				post: 'General Secretary'
			}
		]
	},
	{
		category: 'Development Team',
		details: [
			{
				pic: 27,
				name: 'Nipun Agrawal',
				number: '7665221162',
				id: 'agarwalnipun12@gmail.com',
				post: 'Coordinator'
			},
			{
				pic: 'devs/ishant',
				name: 'Ishant',
				number: '8888329362',
				id: 'ishantgupta777@gmail.com',
				post: 'Full Stack Developer'
			},
			{
				pic: 29,
				name: 'Yash Jain',
				number: '8130297010',
				id: 'yashjain.1999@gmail.com',
				post: 'Head Of Operations'
			},
			{
				pic: 'devs/aryan',
				name: 'Aryan Agrawal',
				number: '9111790711',
				id: 'aryan@bits-spree.org',
				post: 'UI/UX'
			}
		]
	},
];

const handlePics = (e) => {
	//------------handle pics-----------------------
	const container = document.querySelector('.photos');
	const category = e.target.innerText;
	const details = data.filter((obj) => obj.category == category)[0].details;
	container.innerHTML = '';
	details.map((obj) => {
        const img = require(`./../../imageassets/hands.png`);
        //${obj.pic}.png
		container.innerHTML += `
			<div>
			<div>
				<img src=${img} alt="" />
			</div>
			<div class="details">
				<p class="name">${obj.name}</p>
				<p class="post">${obj.post}</p>
				<p class="number">${obj.number}</p>
				<p class="spree-id">${obj.id}</p>
			</div>
		</div>
		`;
	});

	//--------------handle color of selected category----------
	const allCategories = [ ...document.querySelectorAll('.department') ];
	allCategories.forEach((cat) => cat.classList.remove('selected'));
	e.target.classList.add('selected');
};
const Team= () => {
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
					<div onClick={handlePics} className="department">
						Organizing Committee
					</div>
					<div onClick={handlePics} className="department">
						Council for Student Affairs
					</div>
					<div onClick={handlePics} className="department">
						Development Team
					</div>
				</div>
				<div className="photos animated bounceInDown">
					<div>
						<div>
							<img src={require('./../../imageassets/hands.png')} alt="" />
						</div>
						<div className="details">
							<p className="name">Sxxxx</p>
							<p className="post">sxxxx</p>
							<p className="number">9sxx</p>
							<p className="spree-id">99</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</Box>
		</div>
      </div>
 
  );
};


export default Team;