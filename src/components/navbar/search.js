import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import './search.css';
import TextField from '@material-ui/core/TextField';
import { List, ListItem } from '@material-ui/core';
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
    display: 'inline',
    marginLeft: '16vw',
    //float: 'right',
  },
  '@media (max-width: 1426px)': {
    setone: {
      display: 'inline',
      marginLeft: '12vw',
      //marginLeft: theme.spacing(8),
      //float: 'right',
    },
  },
  '@media (max-width: 1172px)': {
    setone: {
      display: 'inline',
      marginLeft: '9vw',
      //marginLeft: theme.spacing(8),
      //float: 'right',
    },
  },
  '@media (max-width: 860px)': {
    setone: {
      display: 'inline',
      //marginLeft: theme.spacing(8),
      //float: 'right',
    },
  },
}));

export default function Search() {
  const classes = useStyles();
  const [k, setk] = useState(true);
  const [search, setSearch] = useState('');
  const handle = () => {
    setk(!k);
  };
  const handlechange = (e) => {
    setSearch(e.target.value);
  };
  //console.log(search);
  /*const filterSearch = () => {
    const names = searchResults.map((a) => a.name.concat(a.bitsId));
    if (search) {
      const searchedName = names.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
      return searchResults.filter((result) =>
        searchedName.includes(result.name.concat(result.bitsId))
      );
    }
  };*/
  return (
    <div className="wrapper">
      <div className="setflex">
        <div>
          <IconButton onClick={handle} className={classes.menuButton}>
            {
              //<SearchIcon className="icons" />
            }
          </IconButton>
        </div>
        <div className={k ? classes.setnone : classes.setone} id="plus">
          <TextField
            // className={k ? classes.setnone : classes.setone}
            id="standard-basic"
            className="ps"
            label=" "
            onChange={handlechange}
          />
        </div>
      </div>
      <List>
        {/*
        data.map((result, index) => {
          return (
            <SingleListItem
              index={index}
              name={result.name}
              bitsId={result.bitsId}
              email={result.email}
              key={index}
              messageId={messageId}
              setSnackBarOpen={setSnackBarOpen}
              setOpen={setOpen}
            />
          );
        })
      */}
      </List>
    </div>
  );
}
