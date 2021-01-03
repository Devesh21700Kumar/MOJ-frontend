import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Fade,
  Modal,
  Backdrop,
  InputBase,
  Paper,
  IconButton,
  List,
  ListItem,
  Typography,
  Snackbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import URL from '../util/url';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '3px',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#EF4646',
        borderRadius: '30px',
      },
    },
    button: {
      background: '#00CF53',
      color: 'white',
      borderRadius: '25px',
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      height: '3rem',
      textTransform: 'none',
      '&:hover': {
        background: '#00CF53',
        color: 'white',
      },
      fontFamily: 'Oxygen',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      color: '#ffffff',
      outline: 'none',
      width: '45vw',
    },
    heading: {
      width: '100%',
      display: 'flex',
      padding: '0rem 1rem 0rem 1rem',
      alignItems: 'center',
      background: '#EF4646',
      fontFamily: 'Oxygen',
      fontSize: '18px',
    },
    close: {
      color: '#000',
      fontSize: '32px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    modalBody: {
      width: '100%',
      height: '70vh',
      maxHeight: '80%',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.2rem 1rem 0.8rem 1rem',
      background: '#FFD94D',
    },
    search: {
      width: '100%',
      borderRadius: '10px',
      background: '#FFFDE8',
      margin: '0.2rem 0rem 0.2rem 0rem',
      transform: 'scaleX(0.98)',
    },
    searchResults: {
      width: '100%',
      borderRadius: '10px',
      background: '#FFFDE8',
      margin: '0.2rem 0rem 0.2rem 0rem',
      overflowY: 'scroll',
      maxHeight: '100%',
    },
    resultItemName: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '1rem',
    },
    name: {
      fontWeight: '800',
      fontFamily: 'Oxygen',
    },
    bitsId: {
      fontSize: '0.9rem',
    },
    noResults: {
      width: '100%',
      padding: '0.5rem 0rem',
      display: 'flex',
      justifyContent: 'center',
    },
    '@media(min-width: 320px)': {
      paper: {
        width: '90vw',
      },
      name: {
        fontSize: '12px',
      },
      bitsId: {
        fontSize: '10px',
      },
      heading: {
        padding: '0px 0px 0px 10px',
        fontSize: '16px',
      },
    },
    '@media(min-width: 360px)': {
      name: {
        fontSize: '14px',
      },
      bitsId: {
        fontSize: '12px',
      },
    },
    '@media(min-width: 540px)': {
      paper: {
        width: '60vw',
        height: '70vh',
      },
      heading: {
        fontSize: '16px',
      },
      name: {
        fontSize: '16px',
      },
      bitsId: {
        fontSize: '14px',
      },
    },
    '@media(min-width: 720px)': {
      paper: {
        width: '60vw',
        height: '70vh',
      },
    },
    '@media(min-width: 1024px)': {
      paper: {
        width: '45vw',
        height: '80vh',
      },
    },
  })
);

const searchResultsData = [
  {
    id: 0,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
  {
    id: 1,
    name: 'Nipun Gupta ',
    bitsId: '2019B4PS1111G',
  },
  {
    id: 2,
    name: 'Rohit Mundada',
    bitsId: '2019A3PS0343G',
  },
  {
    id: 3,
    name: 'Vedant Bang',
    bitsId: '2019AAPS0251G',
  },
  {
    id: 4,
    name: 'Taarush Bhatia',
    bitsId: '2019A7PS0159G',
  },
  {
    id: 5,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
  {
    id: 6,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
  {
    id: 7,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
  {
    id: 8,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
  {
    id: 8,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
];

const SingleListItem = ({
  index,
  name,
  bitsId,
  email,
  messageId,
  fetchMessages,
  setSnackBarOpen,
  setOpen,
  checked25,
  setChecked25,
  checked50,
  setChecked50,
  value,
  setValue,
}) => {
  const classes = useStyles();

  const [c1, setc1] = useState(false);

  const click1 = () => {
    setc1(!c1);

    async function assignMessages() {
      if (!c1 && messageId.length) {
        const response = await (
          await fetch(`${URL}/api/level2/assignMessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ email, messageId }),
          })
        ).json();
        if (response.ok) {
          setSnackBarOpen(true);
          setOpen(false);
          fetchMessages();
          if (checked25) setChecked25(false);
          if (checked50) setChecked50(false);
          if (value) setValue('');
        }
      } else {
        email = '';
      }
    }

    assignMessages();
  };

  return (
    <ListItem button onClick={click1}>
      <svg
        display={!c1 ? 'block' : 'none'}
        val={index}
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.44 2H12C6.47715 2 2 6.47715 2 12V25C2 30.5228 6.47715 35 12 35H25C30.5228 35 35 30.5228 35 25V11.9"
          stroke="#EF4646"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <svg
        display={c1 ? 'block' : 'none'}
        val={index}
        width="42"
        height="38"
        viewBox="0 0 42 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7491 3H12C6.47715 3 2 7.47715 2 13V26C2 31.5228 6.47715 36 12 36H25.4545C30.9774 36 35.4545 31.5228 35.4545 26V12.9"
          stroke="#EF4646"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M7.35266 20.4977L13.679 25.2532C15.7919 26.8415 18.776 26.5108 20.4899 24.4985L38.7999 3"
          stroke="#EF4646"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <div className={classes.resultItemName}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.bitsId}>{bitsId}</Typography>
      </div>
    </ListItem>
  );
};

const NamesList = ({
  searchedData,
  data,
  messageId,
  setSnackBarOpen,
  setOpen,
  fetchMessages,
  checked25,
  setChecked25,
  checked50,
  setChecked50,
  value,
  setValue,
}) => {
  const classes = useStyles();

  return (
    <List>
      {!searchedData ? (
        data.map((result, index) => {
          return (
            <SingleListItem
              index={index}
              name={result.name}
              bitsId={result.bitsId}
              email={result.email}
              key={index}
              messageId={messageId}
              fetchMessages={fetchMessages}
              setSnackBarOpen={setSnackBarOpen}
              setOpen={setOpen}
              checked25={checked25}
              setChecked25={setChecked25}
              checked50={checked50}
              setChecked50={setChecked50}
              value={value}
              setValue={setValue}
            />
          );
        })
      ) : searchedData.length ? (
        searchedData.map((result, index) => {
          return (
            <SingleListItem
              index={index}
              name={result.name}
              bitsId={result.bitsId}
              email={result.email}
              key={index}
              messageId={messageId}
              fetchMessages={fetchMessages}
              setSnackBarOpen={setSnackBarOpen}
              setOpen={setOpen}
              checked25={checked25}
              setChecked25={setChecked25}
              checked50={checked50}
              setChecked50={setChecked50}
              value={value}
              setValue={setValue}
            />
          );
        })
      ) : (
        <Typography className={classes.noResults}>No results found!</Typography>
      )}
    </List>
  );
};

const AssignCoreMembersPopup = ({
  messageId,
  fetchMessages,
  checked25,
  setChecked25,
  checked50,
  setChecked50,
  value,
  setValue,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    async function fetchCoreMembers() {
      const { members } = await (
        await fetch(`${URL}/api/level2/coreMembers`, {
          method: 'GET',
          headers: { token: `${localStorage.getItem('token')}` },
        })
      ).json();

      setSearchResults(members);
    }

    fetchCoreMembers();
  }, [setSearchResults]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarOpen(false);
  };

  const filterSearch = () => {
    const names = searchResults.map((a) => a.name.concat(a.bitsId));
    if (searchTerm) {
      const searchedName = names.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return searchResults.filter((result) =>
        searchedName.includes(result.name.concat(result.bitsId))
      );
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        size="large"
        onClick={handleOpen}
      >
        Assign
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.heading}>
              <CloseIcon onClick={handleClose} className={classes.close} />
              <h3 style={{ paddingLeft: '2rem' }}>Assign Core Members</h3>
            </div>
            <div className={classes.modalBody}>
              <Paper component="form" className={classes.search}>
                <IconButton className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search for Core Member"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Paper>
              <Paper className={classes.searchResults}>
                <NamesList
                  searchedData={filterSearch()}
                  data={searchResults}
                  messageId={messageId}
                  fetchMessages={fetchMessages}
                  setSnackBarOpen={setSnackBarOpen}
                  setOpen={setOpen}
                  checked25={checked25}
                  setChecked25={setChecked25}
                  checked50={checked50}
                  setChecked50={setChecked50}
                  value={value}
                  setValue={setValue}
                />
              </Paper>
            </div>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={`Assigned messages successfully!`}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};

export default AssignCoreMembersPopup;
