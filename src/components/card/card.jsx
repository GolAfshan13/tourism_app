import React from 'react';
// import {Card, Image} from 'semantic-ui-react';
import './card.style.css'
import {Route, BrowserRouter, } from 'react-router-dom';

import Routes from '../../routes';
import Discribe from '../../page/describe';

const PlaceCard = (props) =>{

    const clickHandler =(event)=>(
        <Discribe myFunc={event}/>

    )

    return(
        <div key={props.id} className='cards'>
            <p> {props.name} </p>
            <div className='imgHolder'>
                <a href={`/describe${props.url}`} onClick={event=>clickHandler(props.id)}> <img className='card-img' src={props.srcs} alt={props.name}/> </a>
            </div>
            <footer dir='rtl'>{props.price} </footer>
            {console.log(props.id)}
        </div>
    )
};

export default PlaceCard;