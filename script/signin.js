import { eyeHandler } from './eyeHandler.js';
import { signPageEnterKey } from './signPageEnterKey.js';
import { signPasswordHandler } from './signPasswordHandler.js';
import { signPageHavingToken } from './signPageHavingToken.js';

// 데이터를 다루는 곳
const signinEmailInput = document.querySelector('#signin_email_input');
const signinPasswordInput = document.querySelector('#signin_password_input');
const signinLoginBtn = document.querySelector('#signin_login_btn');
// css를 다루는 곳
const signinEyeOff = document.querySelector('.password__btn-eye');
const signinEmailError = document.querySelector('.form-sign__input-error.email');
const signinPasswordError = document.querySelector('.form-sign__input-error.password');

const signinEmailHandler = function (event) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!emailAddress) {
        signinEmailError.textContent = '이메일을 입력해주세요';
    } else if (!confirmEmail.test(emailAddress)) {
        signinEmailError.textContent = '올바른 이메일 주소가 아닙니다';
    } else {
        signinEmailError.textContent = '';
    }
}

const signinLoginBtnHandler = function (event) {
    if (!signinEmailInput.value) {
        return signinEmailError.textContent = '이메일을 입력해주세요';
    }
    if (!signinPasswordInput.value) {
        return signinPasswordError.textContent = '비밀번호를 입력해주세요';
    }

    // promise로만 구현해보기
    // POST요청 보낼 데이터
    let signinData = {
        "email": signinEmailInput.value,
        "password": signinPasswordInput.value
    };
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
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
signPageEnterKey(signinLoginBtnHandler);
signinEyeOff.addEventListener('click', () => { eyeHandler(signinPasswordInput, signinEyeOff) });
signPageHavingToken();