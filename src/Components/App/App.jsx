import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>My Developer Experience</strong>
      </header>
      <NavBar className="NavBar"/>
      <SideBar className="SideBar" />
    </div>
  );
}

export default App;
