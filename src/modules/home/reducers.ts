import * as types from './types';
const defaultState = {
    letters: [],
    isLoading: false,
    hasError: false,
    form: {
        validationError: false,
    }
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
        case types.REMOVE_LETTERS:
            return {...state,
                letters: [],
            };
        case types.IS_LOADING:
            return {...state,
                isLoading: action.payload
            };
        case types.VALIDATION_ERROR:
            return {...state,
                form: {...state.form,
                    validationError: action.payload,
                }
            };

        default:
            return state;
    }
};
