import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import MainPage from '../MainPage/MainPage';
import {withRouter} from 'react-router-dom';
import userService from '../../utils/userService';
import * as postAPI from '../../services/posts-api';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      user: userService.getUser(),
      posts: [{
        title: '',
        date: Date,
        content: '',
        tags: ''
      }]
     }
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(state => ({
      posts: [...state.posts, newPost]
    }), () => {
      return this.props.history.push('/')
    });
  }

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postAPI.update(updatedPostData);
    const newPostsArray = this.state.posts.map(p =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState(
      {posts: newPostsArray},
      () => this.props.history.push('/')
    );
  }

  handleDeletePost = async id => {
    await postAPI.deleteOne(id);
    this.setState(state => ({
      posts: state.posts.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const posts = await postAPI.getAll();
    this.setState({posts});
  }


  render() {
    return (
      <div className="App" id="container">
        <header className="App-header">
          <strong>My Developer Experience</strong>
        </header>
          <NavBar 
            className="NavBar"
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
        <div className="Body">
          <MainPage 
            className="MainPage" 
            user={this.state.user}
            posts={this.state.posts}
            history={this.props.history}
            handleDeletePost={this.handleDeletePost}
            handleAddPost={this.handleAddPost}
            handleUpdatePost={this.handleUpdatePost}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          <SideBar className="SideBar" />
        </div>
        {/* <footer className="App-footer">(C) 2019 Beth Smith </footer> */}
      </div>
    )
  };
};

export default withRouter(App);
