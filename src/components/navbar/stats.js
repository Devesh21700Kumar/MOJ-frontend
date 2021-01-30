import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  createMuiTheme,
  MuiThemeProvider,
  Button,
} from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import './search.css';
import { useHistory, Redirect } from 'react-router-dom';

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '2px',
    '&:hover': {
      backgroundColor: 'unset !important',
      color: 'unset !important',
    },
    '&:click': {
      backgroundColor: 'unset !important',
      color: 'unset !important',
    },
    disableRipple: true,
    disableFocusRipple: true,
  },
  menu: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    marginTop: '2.7vh',
    paddingRight: '22.5px',
    '&:hover': {
      backgroundColor: 'unset !important',
      color: 'unset !important',
    },
    disableRipple: true,
    disableFocusRipple: true,
  },
  '@media(min-width: 1100px)': {
    menu: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(0.5),
      float: 'right',
      width: '2rem',
      height: '2rem',
      marginTop: '2.7vh',
      paddingRight: '45.5px',
      '&:hover': {
        backgroundColor: 'unset !important',
        color: 'unset !important',
      },
      '&:click': {
        backgroundColor: 'unset !important',
        color: 'unset !important',
      },
      disableRipple: true,
      disableFocusRipple: true,
    },
  },
}));

const Stats = () => {
  const classes = useStyles();
  const history = useHistory();

  const token = localStorage.getItem('token');
  if (token === null) return <Redirect to="/" />;

  const { permissionLevel, name, bitsId } = JSON.parse(
    atob(token.split('.')[1])
  );

  if (permissionLevel !== 2) return <Redirect to="/home" />;

  return (
    <MuiThemeProvider theme={theme}>
      <IconButton
        disableRipple
        className={permissionLevel != 0 ? classes.menuButton : classes.menu}
        style={{ display: permissionLevel === 2 ? 'inline' : 'none' }}
        onClick={() => history.push('/stats')}
      >
        <BarChartIcon className="icons" />
      </IconButton>
    </MuiThemeProvider>
  );
};

export default Stats;
