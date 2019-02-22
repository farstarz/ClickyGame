import React from "react";
import './style.css';

var highestScore = 0;
function NavigationBar(props) {
    console.log("Score at Navigation: "+props.score);
    if(props.score>highestScore){
        highestScore = props.score;
    }
    return( 
        <div className='navbar'>
            <ul className='navList'>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li className="">Click an image to begin!</li>
                <li>Score: {props.score} | Top Score: {highestScore}</li>
            </ul>
        </div>
    );
}

export default NavigationBar;
