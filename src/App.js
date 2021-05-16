import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Store';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import HomeComponent from './components/HomeComponent';
Amplify.configure(aws_exports);

function App() {

  
    return (
      <div className="App">
        <Provider store ={store}>
          <Router>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                {/* <NavbarComponent /> */}
              </Typography>
            </Toolbar>
          </AppBar>

          </Router>
        </Provider>
      </div>
    );

}

export default withAuthenticator(App, true);
