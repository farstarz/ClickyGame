import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import NavigationBar from './components/NavigationBar';
import Arena from './components/Arena';



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      score: 0
    };
  }

  getScore = (scoreFromArena) =>{
    this.setState({score : scoreFromArena});
  }

  render() {
    return (
      <div>
        <NavigationBar score={this.score}/>
        <Title/>
        <Arena scoreCallBack = {this.getScore}/>
      </div>
    );
  }
}

export default App;
