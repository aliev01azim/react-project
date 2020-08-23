import navbarReducer from './navbar-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import { combineReducers, createStore } from 'redux'
import usersReducer from './users-reducer';

let reducers = combineReducers({
    NavBarPage: navbarReducer,
    ProfilePage: profileReducer,
    MessagePage: dialogsReducer,
    UsersPage: usersReducer
});
let store = createStore(reducers);


export default store