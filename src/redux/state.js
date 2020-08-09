import rerenderEntireTree from '../render'

export let state = {
    ProfilePage: {
        PostData: [
            { id: 1, text: "Hello,my name is Azim?", count: 2 },
            { id: 2, text: "it is my first post?", count: 25 },
            { id: 3, text: "my second?", count: 23 },
            { id: 4, text: "Hello,my dfgd is Azim?", count: 21 },
            { id: 5, text: "saf,my name is Azim", count: 12 },
            { id: 6, text: "asdis Azim", count: 0 },
        ]
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
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 1,
        text: postMessage,
        count: 2
    };
    state.ProfilePage.PostData.push(newPost);
    rerenderEntireTree(state);
}

export let addMessage = (textMessage) => {
    let newMessage = {
        id: 1,
        text: textMessage
    }
    state.MessagePage.MessagesData.push(newMessage);
    rerenderEntireTree(state);
}