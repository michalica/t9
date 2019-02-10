import {
    setLetters,
    setIsLoading
} from "./actionCreators";

export function fetchT9api(data: string) {
    const thunk = async (dispatch: any) => {

        try {
            dispatch(setIsLoading(true));
            const response = await fetch('http://localhost:3001/numbers?num=' + data, {
                method: 'GET',
            });
            console.log("req");
            const result = await response.json();
            console.log(result);
            dispatch(setLetters(result));
            dispatch(setIsLoading(false));


        } catch (e) {
            console.log('error ' + e)
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
