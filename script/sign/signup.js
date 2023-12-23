import { eyeHandler } from './eyeHandler.js';
import { signPasswordHandler } from './signPasswordHandler.js';
import { EMPTY_EMAIL, INVALID_EMAIL, EMPTY_PASSWORD, NOT_MATCH_PASSWORD, CONFIRM_EMAIL, DUPLICATED_EMAIL } from './constant.js';
import { URL_CHECK_EMAIL, URL_SIGN_UP } from './apiUrl.js';

// 데이터를 다루는 곳
const signupEmailInput = document.querySelector('#signup_email_input');
const signupPasswordInput = document.querySelector('#signup_password_input');
const signupPasswordConfirmInput = document.querySelector('#signup_password_input_confirm');
const signupRegisterBtn = document.querySelector('#signup_register_btn');
// css를 다루는 곳
const signupPasswordEye = document.querySelector('.password__btn-eye');
const signupPasswordConfirmEye = document.querySelector('.password__btn-eye.confirm');
const signupEmailError = document.querySelector('.form-sign__input-error.email');
const signupPasswordError = document.querySelector('.form-sign__input-error.password');
const signupPasswordConfirmError = document.querySelector('.form-sign__input-error.password.confirm');

const signupEmailHandler = function (event) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp(CONFIRM_EMAIL);
    if (!emailAddress) {
        signupEmailError.textContent = EMPTY_EMAIL;
    } else if (!confirmEmail.test(emailAddress)) {
        signupEmailError.textContent = INVALID_EMAIL;
    } else {
        signupEmailError.textContent = '';
    }
}

const signupPasswordConfirmHandler = function (event) {
    const password = event.target.value;
    if (!password) {
        signupPasswordConfirmError.textContent = EMPTY_PASSWORD;
    } else if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        signupPasswordConfirmError.textContent = NOT_MATCH_PASSWORD;
    } else {
        signupPasswordConfirmError.textContent = '';
    }
}

const signupRegisterBtnHandler = function (event) {
    if (!signupEmailInput.value) {
        return signupEmailError.textContent = EMPTY_EMAIL;
    }
    if (!signupPasswordInput.value) {
        return signupPasswordError.textContent = EMPTY_PASSWORD;
    }
    if (!signupPasswordConfirmInput.value) {
        return signupPasswordConfirmError.textContent = EMPTY_PASSWORD;
    }
    if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        return signupPasswordConfirmError.textContent = NOT_MATCH_PASSWORD;
    }
    let signUpData = {
        "email": signupEmailInput.value,
        "password": signupPasswordInput.value
    }
    const checkEmailduplication = async function () {
        try {
            const response = await fetch(URL_CHECK_EMAIL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "email": signUpData["email"] }),
            })
            if (response.status === 200) { return signUpSuccess() }
            else { throw new Error(`회원가입에 실패했습니다! : ${response.status}`) }
        } catch (error) {
            return signupEmailError.textContent = DUPLICATED_EMAIL;
        }
    }
    const signUpSuccess = async function () {
        try {
            const response = await fetch(URL_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            })
            if (response.status === 200) {
                const result = await response.json();
                const accessToken = await result.data.accessToken;
                const refreshToken = await result.data.refreshToken;
                localStorage.setItem("accessToken", await accessToken);
                localStorage.setItem("refreshToken", await refreshToken);
                location.href = '/folder.html';
            } else { throw new Error('회원가입에 실패했습니다') }
        } catch (error) {
            return alert(error);
        }
    }
    checkEmailduplication();
}

signupEmailInput.addEventListener('focusout', signupEmailHandler);
signupPasswordInput.addEventListener('focusout', (event) => { signPasswordHandler(event, signupPasswordError) });
signupPasswordConfirmInput.addEventListener('focusout', signupPasswordConfirmHandler);
signupRegisterBtn.addEventListener('click', signupRegisterBtnHandler);

signupEmailInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') signupRegisterBtnHandler() });
signupPasswordInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') signupRegisterBtnHandler() });
signupPasswordConfirmInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') signupRegisterBtnHandler() });

signupPasswordEye.addEventListener('click', () => { eyeHandler(signupPasswordInput, signupPasswordEye) });
signupPasswordConfirmEye.addEventListener('click', () => { eyeHandler(signupPasswordConfirmInput, signupPasswordConfirmEye) });

window.addEventListener('DOMContentLoaded', (e) => { if (localStorage.getItem("accessToken")) location.href = './folder.html' });
