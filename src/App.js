import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import NavigationBar from './components/NavigationBar';
import Arena from './components/Arena';



class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Title/>
        <Arena/>
      </div>
    );
  }
}

export default App;
