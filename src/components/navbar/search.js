import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import './search.css';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    paddingRight: '3px',
  },
  wrapper: {
    height: '2rem',
    width: '30px',
    border: 'sol',
  },
  margin: {
    margin: theme.spacing(1),
  },
  search: {
    width: '17rem',
    height: '1rem',
  },
  textField: {
    width: '25ch',
  },
  setnone: {
    display: 'none',
  },
  setone: {
    display: 'flex',
  },
}));

export default function Search() {
  const classes = useStyles();
  const [k, setk] = useState(true);
  return (
    <div className="wrapper">
      <div className="setflex">
        <div>
          <IconButton className={classes.menuButton} onClick={() => setk(!k)}>
            <SearchIcon className="icons" />
          </IconButton>
        </div>
        <div className={k ? classes.setnone : classes.setone}>
          <TextField
            className={k ? classes.setnone : classes.setone}
            id="standard-basic"
            label=" "
          />
        </div>
      </div>
    </div>
  );
}
