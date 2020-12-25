import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/*<Route exact path="/" component={Welcome1} />
          <Route exact path="/home" component={Personal} />
          <Route exact path="/admin" component={AdminCards} />
          <Route exact path="/core" component={CoreDashboard} />
          <Route exact path="/personal" component={Personal} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
