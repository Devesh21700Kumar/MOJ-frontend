import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import CoreDashboard from './components/core/CoreDashboard';
import './App.css';

function App() {
  return (
    <div>
      <CoreDashboard />
    </div>
  );
}

export default App;
