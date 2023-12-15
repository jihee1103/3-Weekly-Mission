import { eyeOffHandler } from './eye-off.js';
// css를 다루는 곳과 데이터를 다루는 곳을 분리
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
    } else if (emailAddress === 'test@codeit.com') {
        signupEmailError.textContent = '이미 사용 중인 이메일입니다';
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
    // if 문이 else if 형태로 나열돼있으면 여러개가 해당되는 상황일때 첫상황만 적용이 되버림 따라서 if문을 여러번 주는 것이 옳다
    if (!signupEmailInput.value) {
        event.preventDefault();
        signupEmailError.textContent = '이메일을 입력해주세요';
    }
    if (!signupPasswordInput.value) {
        event.preventDefault();
        signupPasswordError.textContent = '비밀번호를 입력해주세요';
    }
    if (!signupPasswordConfirmInput.value) {
        event.preventDefault();
        signupPasswordConfirmError.textContent = '비밀번호를 입력해주세요';
    }
    if (signupPasswordConfirmInput.value !== signupPasswordInput.value) {
        event.preventDefault();
        signupPasswordConfirmError.textContent = '비밀번호가 일치하지 않아요'
    }
}

signupEmailInput.addEventListener('focusout', signupEmailHandler);
signupPasswordInput.addEventListener('focusout', signupPasswordHandler);
signupPasswordConfirmInput.addEventListener('focusout', signupPasswordConfirmHandler);
signupRegisterBtn.addEventListener('click', signupRegisterBtnHandler);
// Enter 키를 누를시 로그인 버튼 핸들러가 작동하도록 한다.
window.addEventListener('keyup', (event) => { if (event.key === 'Enter') signupRegisterBtnHandler() });
signupPasswordEyeOff.addEventListener('click', () => { eyeOffHandler(signupPasswordInput, signupPasswordEyeOff) });
signupPasswordConfirmEyeOff.addEventListener('click', () => { eyeOffHandler(signupPasswordConfirmInput, signupPasswordConfirmEyeOff) });