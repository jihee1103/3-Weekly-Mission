import { INVALID_PASSWORD, CHECK_PASSWORD_FORMAT, CONFIRM_PASSWORD_ALPHABET, CONFIRM_PASSWORD_NUMBER } from "./constant.js";

const signPasswordHandler = function (event, elementShowingError) {
    const password = event.target.value;
    const confirmPasswordAlphabet = new RegExp(CONFIRM_PASSWORD_ALPHABET)
    const confirmPasswordNumber = new RegExp(CONFIRM_PASSWORD_NUMBER)
    if (!password) {
        elementShowingError.textContent = INVALID_PASSWORD;
    } else if (password.length < 8 || !confirmPasswordAlphabet.test(password) || !confirmPasswordNumber.test(password)) { // 비밀번호 유효성 검사
        elementShowingError.textContent = CHECK_PASSWORD_FORMAT;
    } else {
        elementShowingError.textContent = '';
    }
}

export { signPasswordHandler }