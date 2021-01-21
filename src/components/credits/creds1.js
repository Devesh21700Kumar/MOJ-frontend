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

const data = [
  {
    category: 'Organizing Committee',
    details: [
      {
        pic: 1,
        name: 'Devesh1',
        post: '1',
        number: '6969696969',
        id: 'hey ',
      },
      {
        pic: 2,
        name: 'Devesh1',
        post: '1',
        number: 'hey',
        id: 'hey',
      },
      {
        pic: 3,
        name: 'Devesh1',
        post: '1',
        number: 'hey',
        id: 'hey',
      },
      {
        pic: 4,
        name: 'Devesh1',
        post: '1',
        number: 'hey',
        id: 'hey',
      },
    ],
  },
  /*{
    category: 'Council for Student Affairs',
    details: [
      {
        pic: 1,
        name: 'Devesh1',
        number: '1 ',
        id: 'jjjjjooopp',
        post: 'jjjjjooopp ',
      },
      {
        pic: 2,
        name: 'Devesh1',
        number: '2',
        id: 'jjjjjooopp',
        post: 'jjjjjooopp',
      },
      {
        pic: 3,
        name: 'Devesh1',
        number: '3',
        id: 'jjjjjooopp',
        post: 'jjjjjooopp',
      },
      {
        pic: 4,
        name: 'Devesh1',
        number: '4',
        id: 'jjjjjooopp',
        post: 'jjjjjooopp',
      },
    ],
  },*/
  {
    category: 'FrontEnd Team',
    details: [
      {
        pic: img1,
        name: 'Devesh Kumar',
        number: 'Lead Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/Devesh21700Kumar',
      },
      {
        pic: img2,
        name: 'Rohit Rahul Mundada',
        number: 'Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/Rohit-Mundada',
      },
      {
        pic: img3,
        name: 'Aviral Kumar Goel',
        number: 'Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/Aviral09',
      },
      {
        pic: img4,
        name: 'Ritvij Kumar Sharma',
        number: 'Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/ritvij14',
      },
      {
        pic: img5,
        name: 'Mayank Mathur',
        number: 'Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/Mynk-9',
      },
    ],
  },
  {
    category: 'BackEnd Team',
    details: [
      {
        pic: img6,
        name: 'Vedant Sachin Bang',
        number: 'Lead Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/VedantBang',
      },
      {
        pic: img7,
        name: 'Vishnu Teja Soorea',
        number: 'Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/V-T-Soorea',
      },
      {
        pic: 3,
        name: 'Gaurav Sharad Dotiya',
        number: 'Developer',
        id: 'jjjjjooopp',
        post: 'https://github.com/grv1',
      },
    ],
  },
];

const handlePics = (e) => {
  //------------handle pics-----------------------
  const container = document.querySelector('.photos');
  const category = e.target.innerText;
  const details = data.filter((obj) => obj.category == category)[0].details;
  container.innerHTML = '';
  details.map((obj) => {
    //console.log(obj.pic);
    const img = obj.pic;
    //${obj.pic}.png
    if(obj.post!="1"){
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
			</div>
		</div>
    `;
    }else{
      container.innerHTML += `
			<div>
			<div class="test">
      <img src=${img} alt="" />
			</div>
			<div class="details">
				<p class="name">${obj.name}</p>
        <p class="number">${obj.number}</p>
			</div>
		</div>
    `;
    }
  });

  //--------------handle color of selected category----------
  const allCategories = [...document.querySelectorAll('.department')];
  allCategories.forEach((cat) => cat.classList.remove('selected'));
  e.target.classList.add('selected');
};
const Team = () => {
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
                <div onClick={handlePics} className="department selected">
                  Organizing Committee
                </div>
                <div onClick={handlePics} className="department">
                  FrontEnd Team
                </div>
                <div onClick={handlePics} className="department">
                  BackEnd Team
                </div>
              </div>
              <div className="photos">
                <div>
                  <div className="test">
                    <img
                      //src={'./../../imageassets/1.jpeg'}
                      src={'./../../imageassets/1A.jpeg'}
                      alt="oye"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Devesh1</p>
                    <p className="number">6969696969</p>
                  </div>
                </div>
                <div>
                  <div className="test">
                    <img src={'./../../imageassets/1A.jpeg'} alt="oye" />
                  </div>
                  <div className="details">
                    <p className="name">Devesh1</p>
                    <p className="number">hey</p>
                  </div>
                </div>
                <div>
                  <div className="test">
                    <img src={'./../../imageassets/1B.jpeg'} alt="oye" />
                  </div>
                  <div className="details">
                    <p className="name">Devesh1</p>
                    <p className="number">hey</p>
                  </div>
                </div>
                <div>
                  <div className="test">
                    <img src={'./../../imageassets/1A.jpeg'} alt="oye" />
                  </div>
                  <div className="details">
                    <p className="name">Devesh1</p>
                    <p className="post">oye1</p>
                    <p className="number">hey</p>
                    <p className="spree-id">hey</p>
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

/*<svg
className="chuck"
width="75"
height="75"
viewBox="0 0 75 75"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M41.4125 20.3829C39.4588 18.8177 36.5961 19.1281 35.0268 21.0781C34.6878 21.4964 34.071 21.5657 33.6519 21.2276C33.2336 20.8896 33.1642 20.2705 33.5014 19.8523C35.5493 17.3045 39.1289 16.7394 41.8629 18.3563L74.018 18.2594H74.0202C74.5618 18.2594 74.9964 18.6989 75 19.2355C75.0023 19.7707 74.564 20.2116 74.0225 20.2162L43.9933 20.3073C44.7569 21.3351 45.2468 22.507 45.4453 23.7355L74.0057 23.8076C74.5468 23.8098 74.9819 24.2494 74.9819 24.7837C74.9796 25.3234 74.5423 25.7599 74.0035 25.7599C74.0035 25.7599 74.0035 25.7599 74.0012 25.7599L45.5436 25.6905C45.4113 27.1864 44.858 28.6692 43.8469 29.9218C42.2445 31.9221 39.9542 33.1743 37.4019 33.4516C37.047 33.4919 36.6945 33.5055 36.3419 33.5055C35.7673 33.5055 35.2044 33.4516 34.6461 33.3514L37.1377 35.8425C37.5188 36.2237 37.5188 36.845 37.1377 37.2275C36.9464 37.4151 36.694 37.5084 36.4448 37.5084C36.1951 37.5084 35.9431 37.4151 35.7528 37.2275L33.2648 34.7341C33.4153 35.6146 33.4955 36.5228 33.394 37.445C33.1194 39.995 31.8645 42.2867 29.8665 43.8905C28.5668 44.9391 26.9915 45.5106 25.3597 45.5967V73.9129C25.3597 74.4553 24.9196 74.8926 24.3849 74.8926C23.8424 74.8926 23.4074 74.4526 23.4074 73.9129V45.448C22.0669 45.1875 20.8333 44.6137 19.8105 43.7319V73.9247C19.8105 74.4671 19.3705 74.9044 18.833 74.9044C18.2956 74.9044 17.8605 74.4644 17.8605 73.9247V41.0223C16.8282 38.4424 17.5111 35.3894 19.7915 33.559C20.212 33.2187 20.8284 33.2948 21.1655 33.7108C21.505 34.1314 21.4356 34.7481 21.0151 35.0862C19.5096 36.2966 18.993 38.2874 19.55 40.0258C19.7054 40.198 19.8105 40.4251 19.8105 40.6761V40.6806C19.9492 40.9557 20.1164 41.2231 20.3172 41.4719C21.3065 42.7027 22.714 43.4767 24.2893 43.6517C25.8686 43.8116 27.403 43.3698 28.6361 42.3755C30.2254 41.0998 31.2292 39.2758 31.449 37.2474C31.6262 35.6033 31.2527 33.9922 30.4357 32.5928C29.7903 31.8315 28.9062 31.2174 27.8 31.3298C28.0103 31.4114 28.1943 31.5261 28.3615 31.6824C29.0929 31.8605 29.7405 32.3178 30.1012 33.0483C30.8231 34.5456 30.1968 36.3619 28.7059 37.0856C28.2088 37.3353 27.6781 37.4477 27.1574 37.4477C25.8523 37.4477 24.5856 36.7167 23.9593 35.4605C22.9605 33.385 23.8184 30.8816 25.8808 29.8683C26.3539 29.6368 26.832 29.5063 27.3006 29.426C25.9742 28.5668 24.509 28.0207 22.9941 27.9374C20.7092 27.8368 18.5611 28.6602 16.8857 30.3138C13.4017 33.7788 13.4683 37.9077 14.1137 42.2985C14.1137 42.313 14.1232 42.3252 14.1232 42.3393C14.1282 42.3533 14.1232 42.3728 14.1232 42.3896C14.2406 43.1754 14.3693 43.9711 14.5007 44.7792C14.7064 46.0023 14.9117 47.2045 15.0481 48.395C15.6622 53.7434 16.1924 58.3576 12.0898 61.3645C10.7874 62.3274 9.24339 62.8246 7.64459 62.8246C7.2168 62.8246 6.78854 62.7861 6.36619 62.7194C4.27252 62.3687 2.37054 61.1687 1.15649 59.4244C-0.879631 56.4969 -0.153641 52.4555 2.77161 50.4148C3.2207 50.104 3.83022 50.2186 4.13612 50.6609C4.447 51.11 4.33461 51.7173 3.89005 52.0281C2.90076 52.7115 2.23867 53.7489 2.02386 54.9339C1.81087 56.1167 2.07372 57.3235 2.76208 58.3082C3.67976 59.6224 5.10909 60.5261 6.68613 60.7934C8.20609 61.049 9.71651 60.6928 10.9351 59.7947C13.9727 57.5673 13.7552 54.2695 13.1054 48.6293C13.0288 47.9532 12.9046 47.2453 12.7899 46.5452C12.3331 46.9512 11.8075 47.2888 11.1408 47.4724C10.8204 47.563 10.4955 47.6065 10.1751 47.6065C8.59808 47.6065 7.14474 46.5619 6.69293 44.9749C6.47087 44.1864 6.56649 43.3548 6.97253 42.6379C7.37405 41.916 8.03614 41.3953 8.83192 41.1732C9.51575 40.982 10.2327 41.0658 10.854 41.4193C11.4703 41.7728 11.9221 42.337 12.1134 43.0181C12.1732 43.2402 12.2013 43.4604 12.199 43.6825C12.2448 43.324 12.2253 42.9705 12.1822 42.6356C11.5129 37.9811 11.4005 33.0297 15.504 28.9457C17.5737 26.8905 20.2506 25.8677 23.1015 26.0037C23.668 26.0386 24.2267 26.1664 24.7864 26.2928L23.0204 24.529C21.6463 25.6008 19.9664 26.2126 18.1669 26.2126C18.1428 26.2126 18.1166 26.2126 18.0953 26.2126C15.8153 26.1922 13.6623 25.2627 12.0273 23.6005L10.1466 21.6971C9.91727 21.4592 9.82165 21.1316 9.89325 20.8094C9.95805 20.4881 10.1851 20.2239 10.4905 20.1042C10.5572 20.0743 17.3444 17.3467 18.2811 12.5131C18.3862 11.9765 18.9123 11.6398 19.4303 11.74C19.961 11.8451 20.3077 12.3567 20.2025 12.887C19.3374 17.3462 14.8111 20.165 12.5217 21.3183L13.4226 22.2337C14.6915 23.5257 16.3551 24.2449 18.1138 24.2617C19.6528 24.191 21.2394 23.6798 22.3578 22.5709C23.5216 21.4284 24.1429 19.874 24.1171 18.1977C24.0885 16.5024 23.4001 14.8796 22.1716 13.6347L17.2678 8.64706C16.288 7.65415 13.2726 8.43679 10.5096 11.1481C8.23689 13.3805 7.752 15.6831 8.39233 16.3338C8.81741 16.6352 11.4322 15.9695 13.3224 14.1114C14.89 12.5725 15.5978 11.1087 15.6427 10.9034C15.3894 10.7647 13.8431 10.8545 12.2303 12.5951C11.3321 13.5713 11.0402 14.4056 11.0692 14.8605C11.1073 15.4016 10.7013 15.8643 10.1584 15.9051C9.62045 15.8838 9.15231 15.5362 9.11424 14.9956C9.03766 13.85 9.63041 12.5285 10.7869 11.2737C12.1369 9.81444 13.8123 8.93392 15.282 8.90627C15.9966 8.91579 16.5962 9.09751 17.0004 9.50356C18.8067 11.358 15.117 15.0849 14.6915 15.5045C12.6553 17.5084 8.63841 19.3678 6.99883 17.7092C5.33295 16.0075 6.25063 12.5842 9.13283 9.74646C12.5978 6.33269 16.694 5.27045 18.6608 7.26442L23.5669 12.2539C25.1489 13.854 26.0376 15.9536 26.0711 18.1542C26.1047 20.0159 25.4974 21.7366 24.403 23.1432L26.2143 24.9546C26.073 24.375 25.9465 23.7845 25.9134 23.1872C25.753 20.3639 26.7926 17.6571 28.8527 15.5915C32.9435 11.474 37.9054 11.5959 42.5663 12.2756C42.8998 12.32 43.2546 12.3318 43.6095 12.291C43.3765 12.3318 43.1495 12.2661 42.9283 12.2054C42.2436 12.0164 41.6712 11.5687 41.3214 10.9474C40.9715 10.3261 40.8804 9.60915 41.074 8.92667C41.5317 7.29207 43.227 6.32771 44.8774 6.78542C46.788 7.33013 47.9115 9.32229 47.3763 11.2338C47.19 11.8968 46.8469 12.4152 46.4427 12.8779C47.1406 12.9876 47.8457 13.1181 48.53 13.1933C54.1712 13.8468 57.468 14.0593 59.694 11.0208C60.5904 9.80447 60.9452 8.2895 60.6905 6.76955C60.4291 5.18888 59.5232 3.76229 58.2135 2.84914C56.1701 1.43569 53.3491 1.93871 51.927 3.97709C51.6189 4.42755 51.0098 4.53857 50.5639 4.22679C50.1184 3.91591 50.0106 3.30413 50.3187 2.85956C52.3598 -0.0606989 56.4008 -0.782607 59.3297 1.24898C61.0717 2.45578 62.2712 4.35685 62.6215 6.44418C62.9632 8.49434 62.4819 10.5309 61.2724 12.1796C58.2624 16.2912 53.6477 15.7605 48.3053 15.1379C47.1161 14.9969 45.8975 14.7939 44.6667 14.5859C43.8972 14.4559 43.1336 14.3312 42.3759 14.2261C42.3315 14.2202 42.2948 14.2202 42.2508 14.2157C42.2363 14.2157 42.2241 14.2062 42.2087 14.2012C37.8115 13.5572 33.6954 13.4938 30.2336 16.9791C28.57 18.65 27.7316 20.8162 27.858 23.0866C27.9418 24.6219 28.5083 26.1034 29.3825 27.4502C29.4541 26.9435 29.5977 26.4274 29.8443 25.9112C30.3342 24.912 31.1898 24.1538 32.2461 23.794C33.302 23.4319 34.4349 23.5085 35.4351 23.9947C36.2943 24.4153 36.931 25.1431 37.2369 26.0354C37.5401 26.9268 37.4771 27.8866 37.0624 28.7277C36.7135 29.4519 36.1044 30.0002 35.3431 30.2617C34.5795 30.5282 33.7574 30.4815 33.0061 30.1217C32.2914 29.7646 31.8351 29.1265 31.6534 28.4073C31.5029 28.2505 31.3932 28.0665 31.3026 27.8662C31.1975 29.1433 32.0598 30.128 32.968 30.7783C34.2587 31.4123 35.7007 31.6792 37.1612 31.5369C39.1924 31.3099 41.0159 30.3134 42.293 28.7277C43.164 27.6414 43.566 26.3318 43.5678 25.0379C43.5356 24.9373 43.5093 24.8372 43.5093 24.7321C43.5093 24.6387 43.5379 24.5549 43.5605 24.4692C43.4441 22.9135 42.7067 21.4284 41.4125 20.3829ZM9.90231 43.1065C9.7922 43.0512 9.67255 43.0154 9.55291 43.0154C9.49581 43.0154 9.42421 43.0249 9.3644 43.0462C9.07481 43.1228 8.83101 43.314 8.68781 43.5819C8.53735 43.8397 8.50653 44.1411 8.58312 44.4352C8.71182 44.8943 9.0227 45.245 9.40971 45.4508C9.35986 45.3742 9.32406 45.2953 9.30004 45.197C9.15186 44.6808 9.45548 44.1338 9.97618 43.9929C10.1411 43.9403 10.2771 43.7083 10.2318 43.5338C10.1815 43.3526 10.0623 43.1994 9.90231 43.1065ZM27.1039 34.9579C27.0373 34.9579 26.7595 34.9271 26.6929 34.909C26.2388 34.8134 25.8781 34.5447 25.6225 34.1966C25.6583 34.3366 25.6633 34.474 25.7231 34.6076C26.1146 35.3912 27.0613 35.7261 27.8499 35.3377C28.2201 35.1537 28.4304 34.7771 28.4354 34.3783C28.0932 34.7336 27.6296 34.9579 27.1039 34.9579ZM43.9163 10.0492C44.0359 9.61323 44.4302 9.33226 44.858 9.33226C44.9441 9.33226 45.0347 9.34404 45.1199 9.36806C45.2128 9.3957 45.2966 9.43286 45.3746 9.48045C45.1716 9.09434 44.814 8.78845 44.3626 8.65612C43.7676 8.48754 43.1413 8.84011 42.9764 9.43966C42.9252 9.61776 42.9478 9.80401 43.0412 9.9726C43.1332 10.1339 43.2823 10.2522 43.4735 10.3084C43.5909 10.3419 43.6933 10.3034 43.74 10.274C43.7903 10.244 43.8791 10.1761 43.9163 10.0492ZM34.347 28.4508C34.4748 28.4544 34.6017 28.4413 34.7209 28.401C34.9865 28.3076 35.199 28.1164 35.3259 27.8499C35.5121 27.4783 35.542 27.0514 35.4047 26.6549C35.2647 26.2547 34.9815 25.928 34.5967 25.7417C34.4848 25.6883 34.3593 25.6833 34.2396 25.6475C34.5673 25.9089 34.8025 26.2806 34.8981 26.7061C35.0472 27.3695 34.8025 28.0085 34.347 28.4508Z"
  fill="#EF4646"
/>
</svg>

 ${/*<img src=${img} alt="oye" />*/
