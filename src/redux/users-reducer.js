const FALLOW = 'FALLOW'
const UNFALLOW = 'UNFALLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    UsersData: [
        // {
        //     id: 1,
        //     imgUrl: 'https://lh3.googleusercontent.com/z-VxKf3G9fJxlJblDgr23eOL-CAYzZz2dYGngUQH07z7BChKBExKbbF4QLWNHP7gL4Q',
        //     followed: true,
        //     name: 'Dmitriy',
        //     status: "Hello,my name is Azim?",
        //     location: { country: 'russian', city: 'moskva' }
        // },
        // {
        //     id: 2,
        //     imgUrl: 'https://lh3.googleusercontent.com/z-VxKf3G9fJxlJblDgr23eOL-CAYzZz2dYGngUQH07z7BChKBExKbbF4QLWNHP7gL4Q',
        //     followed: false,
        //     name: 'Azim',
        //     status: "WTF!my name is Azim?",
        //     location: { country: 'kg', city: 'bishkek' }
        // },
        // {
        //     id: 3,
        //     imgUrl: 'https://lh3.googleusercontent.com/z-VxKf3G9fJxlJblDgr23eOL-CAYzZz2dYGngUQH07z7BChKBExKbbF4QLWNHP7gL4Q',
        //     followed: false,
        //     name: 'Aliev',
        //     status: "my surname is Aliev?",
        //     location: { country: 'kz', city: 'astana' }
        // },
        // {
        //     id: 4,
        //     imgUrl: 'https://lh3.googleusercontent.com/z-VxKf3G9fJxlJblDgr23eOL-CAYzZz2dYGngUQH07z7BChKBExKbbF4QLWNHP7gL4Q',
        //     followed: true,
        //     name: 'Akyl',
        //     status: "Hello,my name is Azim?",
        //     location: { country: 'tadj', city: 'dushanbe' }
        // }
    ],
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
            }
        case SET_USERS:
            return {
                ...state,
                UsersData: [...state.UsersData, ...action.user]
            }
        default:
            return state
    }
}

export const fallowAC = (userId) => ({ type: FALLOW, userId })
export const unfallowAC = (userId) => ({ type: UNFALLOW, userId })
export const setUsersAC = (user) => ({ type: SET_USERS, user })
export default usersReducer;