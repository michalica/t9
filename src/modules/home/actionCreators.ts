import * as types from './types';

export function setLetters(data: any) {
    return {
        type: types.SET_LETTERS,
        payload: data,
    };
}

export function setIsLoading(isLoading: boolean) {
    return {
        type: types.IS_LOADING,
        payload: isLoading,
    };
}

export function setHasError(hasError: boolean) {
    return {
        type: types.HAS_ERROR,
        payload: hasError,
    };
}

export function setValidationError(validationError:boolean) {
    return {
        type: types.VALIDATION_ERROR,
        payload: validationError,
    };
}

export function removeLetters() {
    return {
        type: types.REMOVE_LETTERS,
    };
}
