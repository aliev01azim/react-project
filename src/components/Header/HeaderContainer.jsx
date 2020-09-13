import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {Auth} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.Auth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return{
        login:state.Auth.login,
        isAuth:state.Auth.isAuth,
    }
}
export default connect(mapStateToProps,{Auth})(HeaderContainer);
