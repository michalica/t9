export const endpoints = {
    getWords: (params: {num: string}) =>  'http://localhost:3001/num?num=' + params.num
};
