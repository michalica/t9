export function getLetters(state:any) {
    return state.modules.home.letters;
}
export function geIsLoading(state:any) {
    return state.modules.home.isLoading;
}
export function getValidationError(state:any) {
    return state.modules.home.form.validationError;
}

export function getFormValue(state:any) {
    return state.modules.home.form.value;
}
