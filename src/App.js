import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import NavigationBar from './components/NavigationBar';
import Arena from './components/Arena';



class App extends Component {
  constructor(){
    super();
    this.state ={
      score: null
    };
  }

  getScore = (scoreFromArena) =>{
    this.setState({score : scoreFromArena});
    console.log("Score in App.js: ", this.state.score);
  }

  render() {
    return (
      <div>
        <NavigationBar score={this.state.score}/>
        <Title/>
        <Arena scoreCallBack = {this.getScore}/>
      </div>
    );
  }
}

export default App;
