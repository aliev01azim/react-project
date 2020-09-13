import { usersApi } from "../Api/Api"

const FALLOW = 'FALLOW'
const UNFALLOW = 'UNFALLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PRELOADER = 'SET_PRELOADER'
const BTN_TOGGLE_IS_FETCHING = 'BTN_TOGGLE_IS_FETCHING'

let initialState = {
    UsersData: [],
    userTotalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    btnToggle: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FALLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFALLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                UsersData: action.user
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                userTotalCount: action.userCount
            };
        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.p
            };

        case BTN_TOGGLE_IS_FETCHING:
            return {
                ...state,
                btnToggle: action.fetching ? [...state.btnToggle, action.userId] : state.btnToggle.filter(id => id != action.userId)
            };
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FALLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFALLOW, userId })
export const setUsers = (user) => ({ type: SET_USERS, user })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsersTotalCount = (userCount) => ({ type: SET_USERS_TOTAL_COUNT, userCount })
export const setPreloader = (p) => ({ type: SET_PRELOADER, p })
export const setBtnToggleFetching = (fetching, userId) => ({ type: BTN_TOGGLE_IS_FETCHING, fetching, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setPreloader(false))
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setBtnToggleFetching(true, userId));
        usersApi.unfollow(userId).then((data) => {
            dispatch(setBtnToggleFetching(false, userId));
            if (data.resultCode === 0) {
                {
                    dispatch(unfollowSuccess(userId));
                }
            }
        });
    };
};


export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setBtnToggleFetching(true, userId));
        usersApi.follow(userId).then((data) => {
            dispatch(setBtnToggleFetching(false, userId));
            if (data.resultCode === 0) {
                {
                    dispatch(followSuccess(userId));
                }
            }
        });
    };
};



export default usersReducer;