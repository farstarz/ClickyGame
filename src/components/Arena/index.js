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
        console.log("pic id:"+id);
        // console.log(this.selectedPic);
        // if(this.selectedPic.find(pic => pic.id !==id)){
        if((this.selectedPic.filter(pic => pic[0].id ===id)).length===0){
            // console.log(this.selectedPic);
            // console.log((this.selectedPic.filter(pic => pic[0].id ===id)).length);
            this.selectedPic.push(this.state.pics.filter(pic => pic.id === id));
            this.score++;
        } else{
            if(this.score>this.highestScore){
                this.highestScore = this.score;
            }
            this.selectedPic = [];
            this.score = 0;
        }
        this.props.scoreCallBack(this.score);
        console.log("Score at Arena: "+this.score);
        // console.log(this.selectedPic);
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
