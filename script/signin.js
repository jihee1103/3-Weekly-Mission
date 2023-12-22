import { eyeOffHandler } from './eye-off.js';
import { checkSignInHandler } from './checkSignInHandler.js';
// css를 다루는 곳과 데이터를 다루는 곳을 분리
// 데이터를 다루는 곳
const signinEmailInput = document.querySelector('#signin_email_input');
const signinPasswordInput = document.querySelector('#signin_password_input');
const signinLoginBtn = document.querySelector('#signin_login_btn');
// css를 다루는 곳
const signinEyeOff = document.querySelector('.password__btn-eye-off');
const signinEmailError = document.querySelector('.form-sign__input-error.email');
const signinPasswordError = document.querySelector('.form-sign__input-error.password');

const signinEmailHandler = function (event) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!emailAddress) { // 이메일 주소가 없는 경우
        signinEmailError.textContent = '이메일을 입력해주세요';
    } else if (!confirmEmail.test(emailAddress)) { // 이메일 형식이 아닌경우
        signinEmailError.textContent = '올바른 이메일 주소가 아닙니다';
    } else { // 이메일 형식인 경우 경고창을 띄우지 않는다
        signinEmailError.textContent = '';
    }
}

const signinPasswordHandler = function (event) { // 패스워드 인풋 관련 함수
    const password = event.target.value;
    const confirmPasswordAlphabet = new RegExp("[A-Za-z]")
    const confirmPasswordNumber = new RegExp("[0-9]")
    if (!password) { // 비밀번호를 입력 안한 경우
        signinPasswordError.textContent = '비밀번호를 확인해주세요';
    } else if (password.length < 8 || !confirmPasswordAlphabet.test(password) || !confirmPasswordNumber.test(password)) { // 비밀번호 유효성 검사
        signinPasswordError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    } else { // 비밀번호를 입력한 경우
        signinPasswordError.textContent = '';
    }
}

const signinLoginBtnHandler = function (event) { // 로그인 버튼을 눌렀을 때 함수
    event.preventDefault();
    // 이메일과 비밀번호를 입력하지 않은 경우
    if (!signinEmailInput.value) {
        return signinEmailError.textContent = '이메일을 입력해주세요';
    }
    if (!signinPasswordInput.value) {
        return signinPasswordError.textContent = '비밀번호를 입력해주세요';
    }

    // promise로만 구현해보기
    // POST요청 보낼 데이터
    let signInData = {
        "email": signinEmailInput.value,
        "password": signinPasswordInput.value
    };
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
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
            location.href = '/folder.html';
        })
        .catch((error) => { console.log(error) })
}

signinEmailInput.addEventListener('focusout', signinEmailHandler);
signinPasswordInput.addEventListener('focusout', signinPasswordHandler);
signinLoginBtn.addEventListener('click', signinLoginBtnHandler);
// Enter 키를 누를시 로그인 버튼 핸들러가 작동하도록 한다.
window.addEventListener('keyup', (event) => { if (event.key === 'Enter') signinLoginBtnHandler() });
signinEyeOff.addEventListener('click', () => { eyeOffHandler(signinPasswordInput, signinEyeOff) });
window.addEventListener('DOMContentLoaded', checkSignInHandler);