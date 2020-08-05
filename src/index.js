import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostData = [
    { id: 1, text: 'Hello,my name is Azim?', count: 2 },
    { id: 2, text: 'it is my first post?', count: 25 },
    { id: 3, text: 'my second?', count: 23 },
    { id: 4, text: 'Hello,my dfgd is Azim?', count: 21 },
    { id: 5, text: 'saf,my name is Azim', count: 12 },
    { id: 6, text: 'asdis Azim', count: 0 }
]

let DialogsData = [
    { id: 1, name: 'Azim' },
    { id: 2, name: 'Eldar' },
    { id: 3, name: 'Aluun' },
    { id: 4, name: 'Osmo' },
    { id: 5, name: 'Chika' },
    { id: 6, name: 'Nursalim' }
]

let MessagesData = [
    { id: 1, text: 'Hello?' },
    { id: 2, text: 'How aye you Bro' },
    { id: 3, text: 'Are you ok?' }
]

ReactDOM.render( <
    React.StrictMode >
    <
    App posts = { posts }
    Dialogs = { Dialogs }
    /> <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();