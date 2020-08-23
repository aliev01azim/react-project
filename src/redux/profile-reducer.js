const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    PostData: [
        { id: 1, text: "Hello,my name is Azim?", count: 2 },
        { id: 2, text: "it is my first post?", count: 25 },
        { id: 3, text: "my second?", count: 23 },
        { id: 4, text: "Hello,my dfgd is Azim?", count: 21 },
        { id: 5, text: "saf,my name is Azim", count: 12 },
        { id: 6, text: "asdis Azim", count: 0 },
    ],
    newPostText: ''
}
debugger
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = {
                id: 6,
                text: state.newPostText,
                count: 0
            }
            return {
                ...state,
                PostData: [...state.PostData, text],
                newPostText: ''
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }

        default:
            return state
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    text: text
})