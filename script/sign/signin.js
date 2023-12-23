import { eyeHandler } from './eyeHandler.js';
import { signPasswordHandler } from './signPasswordHandler.js';
import { EMPTY_EMAIL, INVALID_EMAIL, EMPTY_PASSWORD, CONFIRM_EMAIL } from './constant.js';
import { URL_SIGN_IN } from './apiUrl.js';

// 데이터를 다루는 곳
const signinEmailInput = document.querySelector('#signin_email_input');
const signinPasswordInput = document.querySelector('#signin_password_input');
const signinLoginBtn = document.querySelector('#signin_login_btn');
// css를 다루는 곳
const signinEye = document.querySelector('.password__btn-eye');
const signinEmailError = document.querySelector('.form-sign__input-error.email');
const signinPasswordError = document.querySelector('.form-sign__input-error.password');

const signinEmailHandler = function (event) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp(CONFIRM_EMAIL);
    if (!emailAddress) {
        signinEmailError.textContent = EMPTY_EMAIL;
    } else if (!confirmEmail.test(emailAddress)) {
        signinEmailError.textContent = INVALID_EMAIL;
    } else {
        signinEmailError.textContent = '';
    }
}

const signinLoginBtnHandler = function () {
    if (!signinEmailInput.value) {
        return signinEmailError.textContent = EMPTY_EMAIL;
    }
    if (!signinPasswordInput.value) {
        return signinPasswordError.textContent = EMPTY_PASSWORD;
    }

    // promise로만 구현해보기
    // POST요청 보낼 데이터
    let signinData = {
        "email": signinEmailInput.value,
        "password": signinPasswordInput.value
    };

    fetch(URL_SIGN_IN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signinData),
    })
        .then((response) => {
            // 응답이 성공한경우 데이터를 가공하고 다음 then 메서드에 보내준다
            if (response.status === 200) {
                return response.json()
            }
        })
        .then((result) => {
            let accessToken = result.data.accessToken;
            let refreshToken = result.data.refreshToken;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
        })
        .then(() => location.href = '/folder.html')
        .catch((error) => { console.log(error) })
}

signinEmailInput.addEventListener('focusout', signinEmailHandler);
signinPasswordInput.addEventListener('focusout', (event) => { signPasswordHandler(event, signinPasswordError) });
signinLoginBtn.addEventListener('click', signinLoginBtnHandler);

signinEmailInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') signinLoginBtnHandler() });
signinPasswordInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') signinLoginBtnHandler() });

signinEye.addEventListener('click', () => { eyeHandler(signinPasswordInput, signinEye) });

window.addEventListener('DOMContentLoaded', (e) => { if (localStorage.getItem("accessToken")) location.href = './folder.html' });
