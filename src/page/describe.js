import React from 'react';
import places from './places';
import './style.css';


class Describe extends React.Component {
    constructor(props){
        super(props);
        this.state={
            place : this.props.location.pathname.replace('/describe/',''),
        }
    }

    desc = ()=>{
        // let place = props.location.pathname.replace('/describe/','');
        const myPlace = places.map(i =>{
            if (i.idName == this.state.place){
                return(
                    <div className='full-description' dir='rtl' key={i.id}>
                        <p>{i.name}</p>
                        {i.description}
                        {console.log(this.state.place)}
                    </div>
                )
            }
        });
    
        return myPlace ;
    
    }

    loadImg =()=>{
        const imgSrc = places.filter(i =>{
            if (i.idName === this.state.place)
                return i.srcs
        })
        return imgSrc[0].srcs;
    }

    render(){
        return(
            <div className='describe'>
                <div className='describtion'>
                    <img className='my-img' src={this.loadImg()}/>
                    <p className='des'> {this.desc(this.props)} </p>
                </div>
            </div>
        )
    }
}

export default Describe ;