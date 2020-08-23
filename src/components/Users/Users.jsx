import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import UserPhoto from '../../assets/img/UserPhoto.png'

class Users extends React.Component {
    
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.UsersData.map((u) => <div>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfallow(u.id) }}>Unfallow</button>
                                : <button onClick={() => { this.props.fallow(u.id) }}>Fallow</button>}
                        </div>
                    </span>
                    <span>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users