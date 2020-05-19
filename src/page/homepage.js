import React from 'react';

import './style.css'

import PlaceCard from '../components/card/card';
import places from './places';

class HomePage extends React.Component{

    // const search =(event)=>{
    //     const ans = places.filter(s =>{
    //       return s.name.includes(event.target.value)
    //     })
    //   }

    myFunc =(event)=>{
        console.log('hi')
        console.log(event)
    }

    render(){
        return(
            <div className='all-cards'>
                {
                    places.map((place)=>(
                        <div key={place.id} className='one-card'>
                            <PlaceCard {...place}/>
                        </div>
                ))}
            </div>
        );
    };
};

export default HomePage;