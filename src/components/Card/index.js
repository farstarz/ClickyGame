import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div onClick={()=>props.clickCard(props.id)}>
            <img className='click-item' src={props.link}/>
        </div> 
    );
}

export default Card;