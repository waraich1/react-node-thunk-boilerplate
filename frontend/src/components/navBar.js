import React from 'react';
import './style/navBar.css'
import {NavLink} from 'react-router-dom'

const navBar = () => {
        return (
            <div className='nav'>
              <ul id="nav">
                <li> <NavLink to="/">Simple</NavLink></li>
                <li> <NavLink to="/redux">Redux</NavLink></li>
                <li> <NavLink to="/async">Async</NavLink></li>
              </ul>
            </div>
        );
}

export default navBar;