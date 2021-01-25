import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';

export default createStore(AppReducer, applyMiddleware(thunk));
