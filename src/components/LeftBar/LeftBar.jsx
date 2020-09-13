import React from 'react';
import s from './LeftBar.module.css';
import { NavLink } from 'react-router-dom';

let LeftBar = () => {
    return(
        <div className = {s.LeftBar}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/Dialogs' >Messages</NavLink>
            <NavLink to='/News' >News</NavLink>
            <NavLink to='/Music' >Music</NavLink>
            <NavLink to='/Settings' >Settings</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </div>
    )
}



export default LeftBar;
