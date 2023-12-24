import { eyeHandler } from './eyeHandler.js';
import { signPasswordHandler } from './signPasswordHandler.js';
import { signEmailHandler } from './signEmailHandler.js';
import { EMPTY_EMAIL, REQUIRE_CONFIRM_PASSWORD, EMPTY_PASSWORD, REQUIRE_CONFIRM_EMAIL } from './constant.js';
import { URL_SIGN_IN } from './apiUrl.js';
import { checkAccessToken } from './checkAccessToken.js';

// 데이터를 다루는 곳
const signinEmailInput = document.querySelector('#signin_email_input');
const signinPasswordInput = document.querySelector('#signin_password_input');
const signinLoginBtn = document.querySelector('#signin_login_btn');
// css를 다루는 곳
const signinEye = document.querySelector('.password__btn-eye');
const signinEmailError = document.querySelector('.form-sign__input-error.email');
const signinPasswordError = document.querySelector('.form-sign__input-error.password');

const signinLoginBtnHandler = function () {
    if (signinEmailInput.value.trim() === '') {
        return (signinEmailError.textContent = EMPTY_EMAIL);
    }
    if (signinPasswordInput.value.trim() === '') {
        return (signinPasswordError.textContent = EMPTY_PASSWORD);
    }

    let signinData = {
        email: signinEmailInput.value.trim(),
        password: signinPasswordInput.value.trim(),
    };
    const signinSuccess = async function () {
        try {
            const response = await fetch(URL_SIGN_IN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signinData),
            });
            if (response.status === 200) {
                const data = await response.json();
                let accessToken = data.data.accessToken;
                let refreshToken = data.data.refreshToken;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                location.href = '/folder.html';
            } else {
                throw new Error('로그인에 실패했습니다.');
            }
        } catch (error) {
            signinEmailError.textContent = REQUIRE_CONFIRM_EMAIL;
            signinPasswordError.textContent = REQUIRE_CONFIRM_PASSWORD;
            return console.log(error);
        }
    };
    signinSuccess();
};

signinEmailInput.addEventListener('focusout', event => {
    signEmailHandler(event, signinEmailError);
});
signinPasswordInput.addEventListener('focusout', event => {
    signPasswordHandler(event, signinPasswordError);
});
signinLoginBtn.addEventListener('click', event => {
    signinLoginBtnHandler();
});
signinEmailInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') signinLoginBtnHandler();
});
signinPasswordInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') signinLoginBtnHandler();
});
signinEye.addEventListener('click', () => {
    eyeHandler(signinPasswordInput, signinEye);
});
window.addEventListener('DOMContentLoaded', () => {
    checkAccessToken();
});
