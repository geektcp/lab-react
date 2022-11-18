import React from 'react';
import ReactDomClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const title =(
    <h1>4444</h1>
)

const songs = [
    {id:1, name:'dsdf上帝发誓地方'},
    {id:2, name:'说的方法是'},
    {id:3, name:'很反感和法规和'},

]

const list = (
    <ul>
        {songs.map(i => (
            <li className="title">{i.name}</li>
            )
        )}
    </ul>
)

const root = ReactDomClient.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(list, document.getElementById('root'));


