import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers,setCurrentPage, setBtnToggleFetching,getUsers } from '../../redux/users-reducer';
import {Preloader} from '../../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged=(pageNumber)=>{
        this.props.getUsers(pageNumber,this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ?
                < Preloader />
                : null}
            <Users userTotalCount={this.props.userTotalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                UsersData={this.props.UsersData}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setBtnToggleFetching={this.props.setBtnToggleFetching}
                btnToggle={this.props.btnToggle} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        UsersData: state.UsersPage.UsersData,
        userTotalCount: state.UsersPage.userTotalCount,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching,
        btnToggle:state.UsersPage.btnToggle
    }
}

export default compose(
    connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setBtnToggleFetching,getUsers}),
    withAuthRedirect
)(UsersContainer)