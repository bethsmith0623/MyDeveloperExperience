import React, {Component} from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import MainPage from '../MainPage/MainPage';
import {Route} from 'react-router-dom';


  class App extends Component {
    render() {
      <div className="App">
        <header className="App-header">
          <strong>My Developer Experience</strong>
        </header>
        <NavBar className="NavBar"/>
        <div className="Body">
          <Main className="MainPage" />
          <SideBar className="SideBar" />
        </div>
        <footer className="App-footer">(C) 2019 Beth Smith </footer>
      </div>
    };
};

export default App;
