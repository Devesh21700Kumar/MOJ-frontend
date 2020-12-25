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
import './App.css';

function App() {
  return (
    <div>
      <Personal />
    </div>
  );
}

export default App;
