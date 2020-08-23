import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { fallowAC, unfallowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps=(state)=>{
    return{
        UsersData:state.UsersPage.UsersData
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        fallow:(userId)=>{
            dispatch(fallowAC(userId))
        },
        unfallow:(userId)=>{
            dispatch(unfallowAC(userId))
        },
        setUsers:(user)=>{
            dispatch(setUsersAC(user))
        }
    }
}
const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer