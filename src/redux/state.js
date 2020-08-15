let store = {
    _state: {
        ProfilePage: {
            PostData: [
                { id: 1, text: "Hello,my name is Azim?", count: 2 },
                { id: 2, text: "it is my first post?", count: 25 },
                { id: 3, text: "my second?", count: 23 },
                { id: 4, text: "Hello,my dfgd is Azim?", count: 21 },
                { id: 5, text: "saf,my name is Azim", count: 12 },
                { id: 6, text: "asdis Azim", count: 0 },
            ],
            newPostText: ''
        },
        MessagePage: {
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

    },
    getState() {
        return this._state
    },

    _rerenderEntireTree() {
        console.log('a')
    },

    addPost() {
        let text = {
            id: 6,
            text: this._state.ProfilePage.newPostText,
            count: 0
        }
        this._state.ProfilePage.PostData.push(text);
        this._state.ProfilePage.newPostText = ''
        this._rerenderEntireTree(this._state);
    },
    updatePostText(text) {
        this._state.ProfilePage.newPostText = text
        this._rerenderEntireTree(this._state)
    },
    subscribe(asd) {
        this._rerenderEntireTree = asd
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let text = {
                id: 6,
                text: this._state.ProfilePage.newPostText,
                count: 0
            }
            this._state.ProfilePage.PostData.push(text);
            this._state.ProfilePage.newPostText = ''
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.text
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let text = {
                id: 1,
                text: this._state.MessagePage.newMessageText
            }
            this._state.MessagePage.MessagesData.push(text);
            this._state.MessagePage.newMessageText = ''
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.MessagePage.newMessageText = action.newText
            this._rerenderEntireTree(this._state)
        }
    }
}
export default store