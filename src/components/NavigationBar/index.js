import React from "react";
import './style.css';
import Arena from '../Arena'

function NavigationBar() {
    return( 
        <div className='navbar'>
            <ul className='navList'>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li class="">Click an image to begin!</li>
                <li>Score: {this.props.score} | Top Score: 0</li>
            </ul>
        </div>
    );
}

export default NavigationBar;
