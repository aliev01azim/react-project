import { headerApi } from "../Api/Api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state
    }
}

export const Auth = () => {
    return (dispatch) => {
        headerApi.getAuth(`auth/me`).then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setAuthData(id, email, login));
            }
        });
    }
}

export const setAuthData = (userId, email, login) => ({ type: SET_AUTH_DATA, data: { userId, email, login } })
export default authReducer;