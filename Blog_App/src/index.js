import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import allReducer from './Reducers/blogs';
import thunk from 'redux-thunk';

const store = createStore(allReducer,compose( applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,document.getElementById('root')
    )
