import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import CoreDashboard from './components/core/CoreDashboard';
import Personal from './personal/personal';
import SendMessagePopup from './components/letterpopup/SendMessagePopup';
import ReadMessagePopup from './components/letterpopup/ReadMessagePopup';
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Personal} />
        <Route exact path="/core" component={CoreDashboard} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
