import {setLetters} from "./actionCreators";

export function fetchT9api(data:string) {
    return async (dispatch: any) => {

        try {
            const response = await fetch('http://localhost:3001/numbers?num=' + data, {
                method: 'GET',
            });

            const result = await response.json();
            console.log(result);
            return dispatch(setLetters(result));

        }catch (e) {
            console.log('error ' + e)
        }
    }
}
