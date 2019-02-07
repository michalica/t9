import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducer';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';


let middlewares = applyMiddleware(thunk);


export function configureStore() {
    return createStore(
        rootReducer,
        compose(
            middlewares,
            DevTools.instrument(),
        )
    );
}
