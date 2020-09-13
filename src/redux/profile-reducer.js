import { profileApi } from "../Api/Api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER = "SET_USER";

let initialState = {
    PostData: [
        { id: 1, text: "Hello,my name is Azim?", count: 2 },
        { id: 2, text: "it is my first post?", count: 25 },
        { id: 3, text: "my second?", count: 23 },
        { id: 4, text: "Hello,my dfgd is Azim?", count: 21 },
        { id: 5, text: "saf,my name is Azim", count: 12 },
        { id: 6, text: "asdis Azim", count: 0 },
    ],
    newPostText: "",
    profil: null,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = {
                id: 6,
                text: state.newPostText,
                count: 0,
            };
            return {
                ...state,
                PostData: [...state.PostData, text],
                newPostText: "",
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };
        case SET_USER:
            return {
                ...state,
                profil: action.profile,
            };
        default:
            return state;
    }
};
export const Profiling = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUser(data));
        });
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });
export const setUser = (profile) => ({ type: SET_USER, profile });