import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import HomeComponent from './components/HomeComponent';
Amplify.configure(aws_exports);

function App() {

  // @ts-ignore
  const [username, setUsername] = useState('test');

  async function getUserInfo() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('attributes:', user.attributes);
  }
  
    return (
      <div className="App">
        <button onClick="getUserInfo()">Click Me</button>
        <Router>
          <Switch>
            <Route path="/home" render={() => <HomeComponent username={this.username}/>} />
          </Switch>
        </Router>
      </div>
    );

}

export default withAuthenticator(App, true);
