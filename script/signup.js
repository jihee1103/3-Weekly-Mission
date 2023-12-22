import { eyeOffHandler } from './eye-off.js';
import { checkSignInHandler } from './checkSignInHandler.js';

// 데이터를 다루는 곳
const signupEmailInput = document.querySelector('#signup_email_input');
const signupPasswordInput = document.querySelector('#signup_password_input');
const signupPasswordConfirmInput = document.querySelector('#signup_password_input_confirm');
const signupRegisterBtn = document.querySelector('#signup_register_btn');
// css를 다루는 곳
const signupPasswordEyeOff = document.querySelector('.password__btn-eye-off');
const signupPasswordConfirmEyeOff = document.querySelector('.password__btn-eye-off.confirm');
const signupEmailError = document.querySelector('.form-sign__input-error.email');
const signupPasswordError = document.querySelector('.form-sign__input-error.password');
const signupPasswordConfirmError = document.querySelector('.form-sign__input-error.password.confirm');

const signupEmailHandler = function (event) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!emailAddress) { // 이메일 주소가 없는 경우
        signupEmailError.textContent = '이메일을 입력해주세요';
    } else if (!confirmEmail.test(emailAddress)) { // 이메일 형식이 아닌경우
        signupEmailError.textContent = '올바른 이메일 주소가 아닙니다';
    } else { // 이메일 형식인 경우 경고창을 띄우지 않는다
        signupEmailError.textContent = '';
    }
}

const signupPasswordHandler = function (event) { // 패스워드 인풋 관련 함수
    const password = event.target.value;
    const confirmPasswordAlphabet = new RegExp("[A-Za-z]");
    const confirmPasswordNumber = new RegExp("[0-9]");
    if (!password) { // 비밀번호를 입력 안한 경우
        signupPasswordError.textContent = '비밀번호를 입력해주세요';
    } else if (password.length < 8 || !confirmPasswordAlphabet.test(password) || !confirmPasswordNumber.test(password)) { // 비밀번호 유효성 검사
        signupPasswordError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    } else { // 비밀번호를 입력한 경우
        signupPasswordError.textContent = '';
    }
}

const signupPasswordConfirmHandler = function (event) { // 패스워드 인풋 확인 관련 함수
    const password = event.target.value;
    if (!password) { // 비밀번호를 입력 안한 경우
        signupPasswordConfirmError.textContent = '비밀번호를 입력해주세요';
    } else if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        signupPasswordConfirmError.textContent = '비밀번호가 일치하지 않아요'
    } else { // 비밀번호를 입력한 경우
        signupPasswordConfirmError.textContent = '';
    }
}

// 수정
const signupRegisterBtnHandler = function (event) { // 회원가임 버튼을 눌렀을 때 함수
    event.preventDefault();
    if (!signupEmailInput.value) {
        signupEmailError.textContent = '이메일을 입력해주세요';
    }
    if (!signupPasswordInput.value) {
        signupPasswordError.textContent = '비밀번호를 입력해주세요';
    }
    if (!signupPasswordConfirmInput.value) {
        signupPasswordConfirmError.textContent = '비밀번호를 입력해주세요';
    }
    if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        signupPasswordConfirmError.textContent = '비밀번호가 일치하지 않아요'
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
signupPasswordInput.addEventListener('focusout', signupPasswordHandler);
signupPasswordConfirmInput.addEventListener('focusout', signupPasswordConfirmHandler);
signupRegisterBtn.addEventListener('click', signupRegisterBtnHandler);
// Enter 키를 누를시 로그인 버튼 핸들러가 작동하도록 한다.
window.addEventListener('keyup', (event) => { if (event.key === 'Enter') signupRegisterBtnHandler() });
signupPasswordEyeOff.addEventListener('click', () => { eyeOffHandler(signupPasswordInput, signupPasswordEyeOff) });
signupPasswordConfirmEyeOff.addEventListener('click', () => { eyeOffHandler(signupPasswordConfirmInput, signupPasswordConfirmEyeOff) });
// defer 속성을 사용 + DOMContentLoaded를 사용하는 것이 페이지 로드시 가장빠르게 토큰을 확인하는 방법일듯?...
window.addEventListener('DOMContentLoaded', checkSignInHandler);