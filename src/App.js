import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import CoreDashboard from './components/core/CoreDashboard';
import Personal from './components/personal/personal';
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Personal} />
        <Route exact path="/core" component={CoreDashboard} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
