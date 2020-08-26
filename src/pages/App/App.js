import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

import userService from '../../utils/userService';
import postsService from '../../utils/postsService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  handleSignup = () => {
    
    this.setState({ user: userService.getUser() })
  }

    handleLogin = () => {
      this.setState({user: userService.getUser()})
    }

    handleUpdatePosts = (posts) => {
      this.setState({posts: postsService.index})
    }

    handleLogout = () => {
      userService.logout()
      this.setState({user: null})
    }

    render() {
      return (
        <Switch>
          <Route exact path="/" render={props => 
            <LandingPage />}>
          </Route>
          <Route 
            exact path="/main" render={props => (
              userService.getUser() ? 
                <MainPage 
                  {...props}
                  posts={this.state.posts} 
                  handleUpdatePosts={this.handleUpdatePosts}
                  handleLogout={this.handleLogout}
                    
                  /> 
                : <Redirect to='/login'/>
            )}
          ></Route>
          <Route 
            exact path="/signup" render={props => 
            <SignupPage handleSignup={this.handleSignup} {...props}/>
          }></Route>
        <Route exact path="/login" render={props =>
          <LoginPage handleLogin={this.handleLogin} {...props} />
        }>
        </Route>
      </Switch>
    )
  }

}


export default App;
