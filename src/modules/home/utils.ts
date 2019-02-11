export function validateInput(data: string) {
    const regex = /^[0-9]+$/;


    if(data == '') {
        return false;
    }

    if (regex.test(data)) {
        return true;
    }

    return false
}
