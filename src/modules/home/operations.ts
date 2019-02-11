import {
    setLetters,
    setIsLoading, setHasError
} from "./actionCreators";

import {endpoints} from "../../services/endpoints";

export function fetchT9api(data: string) {
    const thunk = async (dispatch: any) => {

        try {
            dispatch(setIsLoading(true));
            const response = await fetch(endpoints.getWords({num: data}), {
                method: 'GET',
            });
            console.log("req");
            const result = await response.json();
            console.log(result);
            dispatch(setLetters(result));
            dispatch(setIsLoading(false));


        } catch (e) {
            dispatch(setHasError(true)); // we should save content of exception into Raven TODO

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
