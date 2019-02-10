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
