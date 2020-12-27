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
import Personal from './components/personal/personal';
import SendMessagePopup from './components/letterpopup/SendMessagePopup';
import ReadMessagePopup from './components/letterpopup/ReadMessagePopup';
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Welcome} />
    //     <Route exact path="/home" component={Personal} />
    //     <Route exact path="/core" component={CoreDashboard} />
    //     <Route exact path="/admin" component={AdminDashboard} />
    //   </Switch>
    // </Router>
    <div>
      <SendMessagePopup
        submitFunction={(a, b) => {
          console.log(a, b);
        }}
        enabled={true}
      />
      {/* <ReadMessagePopup
        messageArray={[
          [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa ipsum, ullamcorper quis turpis ut, sodales congue metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at eros lacus. In hac habitasse platea dictumst. Donec aliquet sem eget urna ullamcorper scelerisque. Nulla nec luctus nunc. Nam sit amet condimentum nisl. Phasellus bibendum ac turpis facilisis aliquam. Proin dapibus auctor ante a mollis. Pellentesque blandit lorem non sem aliquet venenatis.',
            '29th Feb 2020 6:30 pm',
          ],
          [
            'Nullam rutrum elit libero, non mattis metus fringilla at. Sed a porttitor eros, ut porttitor magna. Etiam ultricies viverra pharetra. Nulla euismod aliquet augue, id dapibus lorem porttitor sit amet. Quisque scelerisque ante sit amet finibus fringilla. Etiam elit tellus, maximus vitae euismod in, fringilla at neque. Aliquam nec enim interdum, ultricies ipsum quis, pretium erat. Morbi gravida id elit vel commodo. Sed augue neque, convallis vitae urna vitae, sodales pharetra est. Donec eleifend nibh erat, vitae viverra eros ultrices at. Sed elementum nulla vitae rhoncus efficitur. Nullam varius non libero a vulputate.',
            '5th May 2001 6:30 pm',
          ],
          [
            'Vestibulum eget consectetur velit, quis lobortis quam. Phasellus lobortis at nisi sit amet porttitor. Quisque vitae erat ac ipsum condimentum semper vitae eu orci. Vivamus interdum augue est. Etiam orci ante, dictum eget elementum ac, finibus vitae eros. Praesent lacinia odio risus, vitae rhoncus turpis varius ut. Curabitur aliquam felis lectus, at aliquam urna condimentum auctor.',
            '16th Dec 2000 6:30 pm',
          ],
        ]}
        startFrom={0}
        enabled={true}
      /> */}
    </div>
  );
}

export default App;
