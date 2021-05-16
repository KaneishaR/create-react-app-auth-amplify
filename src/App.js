import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import HomeComponent from './components/HomeComponent';
Amplify.configure(aws_exports);

function App() {

  // @ts-ignore
  const [username, setUsername] = useState('');

  let   getUserInfo = async () => {
    const user1 = await Auth.currentAuthenticatedUser();
    setUsername(user1.username)
    console.log(user1.username)
    console.log(username)
  }

  
  
    return (
      <div className="App">
        <button onClick={getUserInfo}>Click Me</button>
        <Router>
          {username ? 
          <Redirect />
          : 
          <Switch>
            <Route path="/home" render={() => <HomeComponent username={username} />} />
          </Switch>
          }
        </Router>
      </div> 
      
    );

}

export default withAuthenticator(App, true);
