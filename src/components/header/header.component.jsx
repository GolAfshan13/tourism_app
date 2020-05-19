import React from 'react'
import { Button, Dropdown, Menu, Input, Icon, Select } from 'semantic-ui-react';

import {faBars, faHome, faInfoCircle, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './header.style.css'
import places from '../../page/places';
import HomePage from '../../page/homepage';
import Route from '../../routes';

const Header =(props)=>{

  const clickHandler=(event)=>{
    console.log(event)
    console.log(props)
  }

  const myFunc =(props)=>(
    console.log(props)
  )

  const opt=[
    {name:'همه', id:'all'},
    {name:'باغ وحش', id:'zoo'},
    {name:'موزه ها', id:'museum'},
    {name:'گردشگری', id:'tourism'}   
  ]

  const searching =(event)=>{
    // console.log(event.target.value)
    const ans = places.filter(s =>{
      return s.name.includes(event.target.value)
    })
    console.log(ans)
  }

  const optionMaker =()=>{
    return opt.map(i =>(
      <option key={i.id}>{i.name}</option>
    ))
  }

  const selectOpt =(event)=>{
    console.log(event)
  }

    return (

      <nav>
        <input type="checkbox" id='check'/>
          <label htmlFor="check" className="checkbtn">
             <FontAwesomeIcon icon={faBars}/>
          </label>
          <label className="logo"> سایت گردشگری </label>
          <ul>
              <li> <select onClick={selectOpt}> {optionMaker()} </select> </li>
              <li><input type='search' placeholder='جست و جو' dir='rtl' place={searching} onChange={event => searching(event)}/> </li>
              <li><a href="/info">در باره ما <FontAwesomeIcon icon={faInfoCircle}/> </a></li>
              <li> <a className='active' href="/">خانه <FontAwesomeIcon icon={faHome}/></a> </li>
          </ul>
      </nav>

    )
}

export default Header ;
