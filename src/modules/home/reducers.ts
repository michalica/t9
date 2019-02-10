import * as types from './types';
const defaultState = {
    letters: []
};

interface HomeReducerInterface {
    type: string,
    payload: any
}

export default function HomeReducer (state = defaultState, action:HomeReducerInterface) {
    switch(action.type) {
        case types.SET_LETTERS:
            return {...state,
                letters: action.payload.letters
            };
        default:
            return state;
    }
};
