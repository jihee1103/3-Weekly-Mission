import { eyeHandler } from './eyeHandler.js';
import { signPageEnterKey } from './signPageEnterKey.js';
import { signPasswordHandler } from './signPasswordHandler.js';
import { signPageHavingToken } from './signPageHavingToken.js';

// 데이터를 다루는 곳
const signupEmailInput = document.querySelector('#signup_email_input');
const signupPasswordInput = document.querySelector('#signup_password_input');
const signupPasswordConfirmInput = document.querySelector('#signup_password_input_confirm');
const signupRegisterBtn = document.querySelector('#signup_register_btn');
// css를 다루는 곳
const signupPasswordEyeOff = document.querySelector('.password__btn-eye');
const signupPasswordConfirmEyeOff = document.querySelector('.password__btn-eye.confirm');
const signupEmailError = document.querySelector('.form-sign__input-error.email');
const signupPasswordError = document.querySelector('.form-sign__input-error.password');
const signupPasswordConfirmError = document.querySelector('.form-sign__input-error.password.confirm');

const signupEmailHandler = function (event) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!emailAddress) {
        signupEmailError.textContent = '이메일을 입력해주세요';
    } else if (!confirmEmail.test(emailAddress)) {
        signupEmailError.textContent = '올바른 이메일 주소가 아닙니다';
    } else {
        signupEmailError.textContent = '';
    }
}

const signupPasswordConfirmHandler = function (event) {
    const password = event.target.value;
    if (!password) {
        signupPasswordConfirmError.textContent = '비밀번호를 입력해주세요';
    } else if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        signupPasswordConfirmError.textContent = '비밀번호가 일치하지 않아요'
    } else {
        signupPasswordConfirmError.textContent = '';
    }
}

const signupRegisterBtnHandler = function (event) {
    if (!signupEmailInput.value) {
        return signupEmailError.textContent = '이메일을 입력해주세요';
    }
    if (!signupPasswordInput.value) {
        return signupPasswordError.textContent = '비밀번호를 입력해주세요';
    }
    if (!signupPasswordConfirmInput.value) {
        return signupPasswordConfirmError.textContent = '비밀번호를 입력해주세요';
    }
    if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        return signupPasswordConfirmError.textContent = '비밀번호가 일치하지 않아요'
    }

    // async, await로 구현해보기
    let signUpData = {
        "email": signupEmailInput.value,
        "password": signupPasswordInput.value
    }
    // 회원가입시 이메일 중복 확인 함수
    const checkEmailduplication = async function () {
        try {
            const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "email": signUpData["email"] }),
            })
            if (response.status === 409) signupEmailError.textContent = '이미 사용중인 이메일입니다.';
            // 중복되지 않은경우 signUpSuccess함수 실행
            else signUpSuccess();
        }
        catch (error) {
            console.log(error);
        }
    }
    const signUpSuccess = async function () {
        try {
            const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            })
            // 요청이 성공한 경우
            if (response.status === 200) {
                let result = await response.json();
                let accessToken = await result.data.accessToken;
                let refreshToken = await result.data.refreshToken;
                localStorage.setItem("accessToken", await accessToken);
                localStorage.setItem("refreshToken", await refreshToken);
                location.href = '/folder.html';
            }
        } catch (error) {
            console.log(error);
        }
    }
    checkEmailduplication();
}

signupEmailInput.addEventListener('focusout', signupEmailHandler);
signupPasswordInput.addEventListener('focusout', (event) => { signPasswordHandler(event, signupPasswordError) });
signupPasswordConfirmInput.addEventListener('focusout', signupPasswordConfirmHandler);
signupRegisterBtn.addEventListener('click', signupRegisterBtnHandler);
signPageEnterKey(signupRegisterBtnHandler);
signupPasswordEyeOff.addEventListener('click', () => { eyeHandler(signupPasswordInput, signupPasswordEyeOff) });
signupPasswordConfirmEyeOff.addEventListener('click', () => { eyeHandler(signupPasswordConfirmInput, signupPasswordConfirmEyeOff) });
signPageHavingToken();