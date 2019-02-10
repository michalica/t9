import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducer';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';


let middlewares = applyMiddleware(createDebounce(), thunk);


export function configureStore() {
    return createStore(
        rootReducer,
        compose(
            middlewares,
            DevTools.instrument(),
        )
    );
}
