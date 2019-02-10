import * as types from './types';
const defaultState = {
    letters: [],
    isLoading: false
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
        case types.IS_LOADING:
            return {...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};
