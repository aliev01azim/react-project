const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    DialogsData: [
        { id: 1, name: "Azim" },
        { id: 2, name: "Eldar" },
        { id: 3, name: "Aluun" },
        { id: 4, name: "Osmo" },
        { id: 5, name: "Chika" },
        { id: 6, name: "Nursalim" },
    ],
    MessagesData: [
        { id: 1, text: "Hello?" },
        { id: 2, text: "How aye you Bro" },
        { id: 3, text: "Are you ok?" },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = {
                id: 1,
                text: state.newMessageText
            }
            return {
                ...state,
                MessagesData: [...state.MessagesData, text],
                newMessageText: ''
            }

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }

        default:
            return state
    }
}
export default dialogsReducer;
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: text
})