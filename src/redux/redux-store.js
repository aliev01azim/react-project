import navbarReducer from './navbar-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    NavBarPage: navbarReducer,
    ProfilePage: profileReducer,
    MessagePage: dialogsReducer,
    UsersPage: usersReducer,
    Auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store