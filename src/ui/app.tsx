import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navigation from './navigation/navigation';
import Page1 from './page1/page1';
import Page2 from './page2/page2';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/p1" component={Page1} />
          <Route exact path="/p2" component={Page2} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
