export function validateInput(data: string) {
    const regex = /^[0-9]+$/;

    if (regex.test(data)) {
        return true;
    }

    return false
}
