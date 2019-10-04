import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>My Developer Experience</strong>
      </header>
      <NavBar className="NavBar"/>
      <div className="Body">
        <Main className="Main" />
        <SideBar className="SideBar" />
      </div>
      <footer className="App-footer">(C) 2019 Beth Smith </footer>
    </div>
  );
}

export default App;
