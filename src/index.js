import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from "redux";
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
