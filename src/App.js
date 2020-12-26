import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import CoreDashboard from './components/core/CoreDashboard';
import Personal from './personal/personal';
import SendMessagePopup from './components/letterpopup/SendMessagePopup';
import ReadMessagePopup from './components/letterpopup/ReadMessagePopup';
import './App.css';

function App() {
  return (
    <div>
      {/* <SendMessagePopup
        submitFunction={(a, b) => {
          console.log(a, b);
        }}
      /> */}
      <ReadMessagePopup messageArray={['This is a message.']} />
    </div>
  );
}

export default App;
