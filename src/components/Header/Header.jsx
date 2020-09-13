
import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className={s.Header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU' />
            <div className={s.dataBlock}>
                {props.isAuth? props.login : 
            <NavLink to ={'/login'}>
                Login
            </NavLink>}

            </div>
        </div>
        
    )
}

export default Header;
