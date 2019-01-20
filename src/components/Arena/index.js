import React, {Component} from 'react';
import './style.css';
import Card from '../Card';
import pics from '../pics.json';

class Arena extends Component{
    state = {
        pics
    };
    selectedPic=[];
    score = 0;
    highestScore=0;
// create function to randomly choose n pics from pics array
    updateArena = (pics,n)=>{
        return pics.sort(()=> 0.5 - Math.random()).slice(0,n);
    }
    clickCard = (id) =>{
        if(this.selectedPic.find(pic => pic.id !==id)){
            this.selectedPic.push(this.state.pics.filter(pic => pic.id === id));
            this.score++;
        } else{
            if(this.score>this.highestScore){
                this.highestScore = this.score;
            }
            this.selectedPic = [];
            this.score = 0;
        }
        this.setState({pics});
        // this.updateArena(this.state.pics,12);
    }
    render() {
        return(
                <div className='container'>
                    {this.updateArena(this.state.pics,12).map(pic => {
                       return <Card link={pic.link} id={pic.id} key={pic.id} clickCard={this.clickCard} />
                    })}
                </div>       
            );
        
    }
}

export default Arena;
