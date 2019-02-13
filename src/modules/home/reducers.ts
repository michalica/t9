import * as types from './types';
const defaultState = {
    letters: [],
    pagination: 0,
    isLoading: false,
    hasError: false,
    form: {
        validationError: false,
        value: '',
    }
};

interface HomeReducerInterface {
    type: string,
    payload?: any
}

export default function HomeReducer (state:any = defaultState, action:HomeReducerInterface) {
    switch(action.type) {
        case types.SET_LETTERS:
            return {...state,
                letters: action.payload.letters
            };
        case types.UPDATE_LETTERS:
            return {...state,
                letters: state.letters.slice().concat(...action.payload.letters),
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
        case types.SET_FORM_VALUE:
            return {...state,
                form: {...state.form,
                    value: action.payload,
                }
            }
        case types.INCREMENT_PAGE:
            return {
                ...state,
                pagination: state.pagination + 1,
            };
        case types.RESET_PAGE:
            return {
                ...state,
                pagination: 0,
            };

        default:
            return state;
    }
};
