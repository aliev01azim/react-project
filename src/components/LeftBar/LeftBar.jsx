import React from 'react';
import s from './LeftBar.module.css';
import { NavLink } from 'react-router-dom';

let LeftBar = () => {
    return(
        <div className = {s.LeftBar}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
            <NavLink to='/News' activeClassName={s.active}>News</NavLink>
            <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
            <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
        </div>
    )
}



export default LeftBar;
