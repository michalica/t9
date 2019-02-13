import {validateInput} from "../utils";

it('validate inut test', () => {
    expect(validateInput('')).toBe(false);
    expect(validateInput('0')).toBe(true);
    expect(validateInput('12334')).toBe(true);
    expect(validateInput('advs')).toBe(false);
    expect(validateInput('1213asq')).toBe(false);
});
