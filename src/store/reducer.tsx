import { combineReducers } from 'redux';


import * as reducers from '../modules/index';

const modules = combineReducers(reducers);

const rootReducer = combineReducers({
    modules,
});

export default rootReducer;
