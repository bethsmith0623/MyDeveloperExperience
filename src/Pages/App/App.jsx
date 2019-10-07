import React, {Component} from 'react';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import MainPage from '../MainPage/MainPage';
import {Route} from 'react-router-dom';
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = { user: userService.getUser() }
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong>My Developer Experience</strong>
        </header>
          <NavBar 
            className="NavBar"
            // {...props}
            />
        <div className="Body">
          <MainPage 
            className="MainPage"      
            />
          <SideBar className="SideBar" />
        </div>
        <footer className="App-footer">(C) 2019 Beth Smith </footer>
      </div>
    )
  };
};

export default App;
