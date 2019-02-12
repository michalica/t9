import {
    setLetters,
    setIsLoading,
    setHasError,
    setValidationError,
    removeLetters,
    setFormValue,
    cancelFetching,
    incrementPage,
    resetPage, updateLetters,
} from "./actionCreators";

import {
    validateInput,
} from "./utils";

import {endpoints} from "../../services/endpoints";

export function fetchT9api(data: string) {
    return (dispatch: any) => {
        dispatch(resetPage());
        dispatch(setFormValue(data));
        if (data == '') {
            dispatch(setValidationError(false));
            dispatch(cancelFetching);
            return dispatch(removeLetters());
        }
        if (validateInput(data)) {
            dispatch(setValidationError(false));
            return dispatch(doRequest(data));
        }
        return dispatch(setValidationError(true));
    }
}

export function doRequest(data: string, isUpdating = false) {
    const thunk = async (dispatch: any, getState: Function) => {

        try {
            dispatch(setIsLoading(true));
            const response = await fetch(endpoints.getWords(data, getState().modules.home.pagination), {
                method: 'GET',
            });
            console.log("req");
            const result = await response.json();
            console.log(result);
            if(isUpdating) {
                dispatch(updateLetters(result));
            } else {
                dispatch(setLetters(result));
            }
            dispatch(incrementPage());
            dispatch(setIsLoading(false));


        } catch (e) {
            dispatch(setHasError(true)); // we should save content of exception into Raven

        }
    }
    thunk.meta = {
        debounce: {
            time: 500,
            leading: false,
            trailing: true,
            key: 'FETCHING_API',
        }
    };
    return thunk;
}


