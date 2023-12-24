import { eyeHandler } from './eyeHandler.js';
import { signPasswordHandler } from './signPasswordHandler.js';
import { signEmailHandler } from './signEmailHandler.js';
import { EMPTY_EMAIL, EMPTY_PASSWORD, NOT_MATCH_PASSWORD, DUPLICATED_EMAIL } from './constant.js';
import { URL_CHECK_EMAIL, URL_SIGN_UP } from './apiUrl.js';
import { checkAccessToken } from './checkAccessToken.js';

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

const signupPasswordConfirmHandler = function (event) {
    const ConfirmingPassword = event.target.value;
    if (ConfirmingPassword.trim() === '') {
        signupPasswordConfirmError.textContent = EMPTY_PASSWORD;
    } else if (ConfirmingPassword !== signupPasswordInput.value) {
        signupPasswordConfirmError.textContent = NOT_MATCH_PASSWORD;
    } else {
        signupPasswordConfirmError.textContent = '';
    }
};

const signupRegisterBtnHandler = function (event) {
    if (signupEmailInput.value.trim() === '') {
        return (signupEmailError.textContent = EMPTY_EMAIL);
    }
    if (signupPasswordInput.value.trim() === '') {
        return (signupPasswordError.textContent = EMPTY_PASSWORD);
    }
    if (signupPasswordConfirmInput.value.trim() === '') {
        return (signupPasswordConfirmError.textContent = EMPTY_PASSWORD);
    }
    if (signupPasswordConfirmInput.value.trim() !== signupPasswordInput.value.trim()) {
        return (signupPasswordConfirmError.textContent = NOT_MATCH_PASSWORD);
    }
    let signUpData = {
        email: signupEmailInput.value.trim(),
        password: signupPasswordInput.value.trim(),
    };
    const checkEmailduplication = async function () {
        try {
            const response = await fetch(URL_CHECK_EMAIL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: signUpData['email'] }),
            });
            if (response.status === 200) signUpSuccess();
            else {
                throw new Error(`회원가입에 실패했습니다! : ${response.status}`);
            }
        } catch (error) {
            return (signupEmailError.textContent = DUPLICATED_EMAIL);
        }
    };
    const signUpSuccess = async function () {
        try {
            const response = await fetch(URL_SIGN_UP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signUpData),
            });
            if (response.status === 200) {
                const result = await response.json();
                const accessToken = result.data.accessToken;
                const refreshToken = result.data.refreshToken;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                location.href = '/folder.html';
            } else {
                throw new Error('회원가입에 실패했습니다');
            }
        } catch (error) {
            return alert(error);
        }
    };
    checkEmailduplication();
};

signupEmailInput.addEventListener('focusout', event => {
    signEmailHandler(event, signupPasswordError);
});
signupPasswordInput.addEventListener('focusout', event => {
    signPasswordHandler(event, signupPasswordError);
});
signupPasswordConfirmInput.addEventListener('focusout', event => {
    signupPasswordConfirmHandler(event);
});
signupRegisterBtn.addEventListener('click', event => {
    signupRegisterBtnHandler(event);
});
signupEmailInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') signupRegisterBtnHandler(event);
});
signupPasswordInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') signupRegisterBtnHandler(event);
});
signupPasswordConfirmInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') signupRegisterBtnHandler(event);
});

signupPasswordEye.addEventListener('click', () => {
    eyeHandler(signupPasswordInput, signupPasswordEye);
});
signupPasswordConfirmEye.addEventListener('click', () => {
    eyeHandler(signupPasswordConfirmInput, signupPasswordConfirmEye);
});

window.addEventListener('DOMContentLoaded', () => {
    checkAccessToken();
});
