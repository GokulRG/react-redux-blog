//This is the main index.js file which is the first file to render on the screen

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

//Provider component is the enclosing component of app and it takes a prop of store
//this store is created by calling the createStore named import from redux and passing
//it the argument of reducers

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);