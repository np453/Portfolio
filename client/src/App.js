import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//scss file
import "./sass/main.scss";

//component
import Homepage from './views/home';

//This component helps in scrolling to top, when a new page loads
import ScrollToTop from './common/ScrollToTop';

function App() {
  return (
    <div>
       <Router>
        {/* <ScrollToTop> */}
        <switch>
          <Route path="/" exact component={Homepage} />
          {/* <Route path="/test" exact component={Colaborate} />
          <Route path="/dashboard" exact component={Dashboard} /> */}
        </switch>
        {/* </ScrollToTop> */}
      </Router>
    </div>
  );
}

export default App;

