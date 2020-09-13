import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUser, Profiling} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId=this.props.match.params.userId
        if(!userId){
            userId=2
        }
        this.props.Profiling(userId)
    }
    render() {
        return (
            <Profile
                {...this.props}
                profil={this.props.profil}
                />
        )
    }
}

let mapStateToProps=(state)=>{
    return{
        profil: state.ProfilePage.profil,
    }
}

export default compose(
    connect(mapStateToProps,{setUser,Profiling}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)