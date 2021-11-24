// MODULES
import { Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';

// PAGES
import Landing from './pages/Landing';

// COMPONENTS
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// ASSETS
// @{sass-implementation ?} import '../assets/styles/Custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
   return (
      <Fragment>
         <Route path='/' component={Navigation}></Route>
         <Switch>
            <Route exact path='/' component={Landing}></Route>
         </Switch>
         <Route path='/' component={Footer}></Route>
      </Fragment>
   );
};

export default App;
