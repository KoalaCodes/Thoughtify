import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

import userService from '../../utils/userService';
import postsService from '../../utils/postsService';
import ShowPage from '../ShowPage/ShowPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      post: {}
    }
  }
  handleSignup = () => {
    this.setState({ user: userService.getUser() })
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }
  handleLogin = () => {
    this.setState({ user: userService.getUser() })
  }
  handleUpdatePosts = (posts) => {
    this.setState({ posts })
  }
  handlePost = (post) => {
    console.log("APP HANDLEPOST: ", post)
    this.setState({
      post: post,
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props =>
          <LandingPage />}>
        </Route>
        <Route
          exact path="/main" render={props => (
            userService.getUser()
              ? <MainPage
                posts={this.state.posts}
                handleLogout={this.handleLogout}
                handleUpdatePosts={this.handleUpdatePosts}
                handlePost={this.handlePost}
              />
              : <Redirect to='/login' />

          )}
        ></Route>

        <Route
          exact path="/posts/:id" render={props => (
            userService.getUser()
              ? <ShowPage
                posts={this.state.posts}
                handlePost={this.handlePost}
                {...props}
              />
              : <Redirect to='/login' />
          )}> </Route>

        <Route
          exact path="/signup" render={props =>
            <SignupPage handleSignup={this.handleSignup} {...props} />
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
