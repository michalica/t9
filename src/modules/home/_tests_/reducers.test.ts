import HomeReducer from '../reducers';
import {
    setLetters,
    updateLetters,
    removeLetters,
    setIsLoading,
    setValidationError,
    setFormValue,
    incrementPage,
    resetPage,
} from '../actionCreators';

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

it('should return the initial state', () => {
    expect(HomeReducer(undefined, {type: 'RANDOM_TEST', payload: 'test'})).toEqual(defaultState);
});

testModifyLetters(setLetters, setLetters.toString());
testModifyLetters(updateLetters, updateLetters.toString());

function testModifyLetters(actionCreator: Function, name: string) {

    it('should return ' + name, () => {
        expect(HomeReducer(defaultState, actionCreator({letters: ['abc', 'def']}))).toEqual({
            letters: ['abc', 'def'],
            pagination: 0,
            isLoading: false,
            hasError: false,
            form: {
                validationError: false,
                value: '',
            }
        });
    });
}

it('should return remove letters', () => {
    expect(HomeReducer({
        letters: ['abc', 'def', 'kij'],
        pagination: 0,
        isLoading: false,
        hasError: false,
        form: {
            validationError: false,
            value: '',
        }
    }, removeLetters())).toEqual({
        letters: [],
        pagination: 0,
        isLoading: false,
        hasError: false,
        form: {
            validationError: false,
            value: '',
        }
    })
});

it('should return set is Loading', () => {
    expect(HomeReducer(defaultState, setIsLoading(true))).toEqual({
        letters: [],
        pagination: 0,
        isLoading: true,
        hasError: false,
        form: {
            validationError: false,
            value: '',
        }
    })
});

it('should return set validation error', () => {
    expect(HomeReducer(defaultState, setValidationError(true))).toEqual({
        letters: [],
        pagination: 0,
        isLoading: false,
        hasError: false,
        form: {
            validationError: true,
            value: '',
        }
    })
});

it('should return set form value', () => {
    expect(HomeReducer(defaultState, setFormValue('form value'))).toEqual({
        letters: [],
        pagination: 0,
        isLoading: false,
        hasError: false,
        form: {
            validationError: false,
            value: 'form value',
        }
    })
});

it('should return increment page', () => {
    expect(HomeReducer(defaultState, incrementPage())).toEqual({
        letters: [],
        pagination: 1,
        isLoading: false,
        hasError: false,
        form: {
            validationError: false,
            value: '',
        }
    })
});

it('should return reset page', () => {
    expect(HomeReducer({
        letters: [],
        pagination: 3,
        isLoading: false,
        hasError: false,
        form: {
            validationError: false,
            value: '',
        }
    }, resetPage())).toEqual({
        letters: [],
        pagination: 0,
        isLoading: false,
        hasError: false,
        form: {
            validationError: false,
            value: '',
        }
    })
});

