const signinEmailInput = document.querySelector('#signin_email_input');
const signinPasswordInput = document.querySelector('#signin_password_input');
const signinLoginBtn = document.querySelector('#signin_login_btn');
const signinEyeOff = document.querySelector('#signin_eye-off');
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
    if (!password) { // 비밀번호를 입력 안한 경우
        signinPasswordError.textContent = '비밀번호를 확인해주세요';
    } else { // 비밀번호를 입력한 경우
        signinPasswordError.textContent = '';
    }
}

const signinLoginBtnHandler = function (event) { // 로그인 버튼을 눌렀을 때 함수
    if (signinEmailInput.value !== 'test@codeit.com' && signinPasswordInput.value !== 'codeit101') {
        event.preventDefault();
        signinEmailError.textContent = '이메일을 확인해주세요';
        signinPasswordError.textContent = '비밀번호를 확인해주세요';
    } else if (!signinEmailInput.value) {
        event.preventDefault();
        signinEmailError.textContent = '이메일을 입력해주세요';
    } else if (!signinPasswordInput.value) {
        event.preventDefault();
        signinPasswordError.textContent = '비밀번호를 입력해주세요';
    }
}

const signinEyeOffHandler = function (event) { // eye-on,off 함수
    if (signinPasswordInput.getAttribute('type') === 'text') {// eye-off
        signinPasswordInput.setAttribute('type', 'password');
        signinEyeOff.innerHTML = '<img src="img/eye-off.svg" alt="eye-off" name="password">';
    } else {// eye-on
        signinPasswordInput.setAttribute('type', 'text');
        signinEyeOff.innerHTML = '<img src="img/eye-on.svg" alt="eye-on" name="password">';
    }
}

signinEmailInput.addEventListener('focusout', signinEmailHandler);
signinPasswordInput.addEventListener('focusout', signinPasswordHandler);
signinLoginBtn.addEventListener('click', signinLoginBtnHandler);
// Enter 키를 누를시 로그인 버튼 핸들러가 작동하도록 한다.
window.addEventListener('keyup', (event) => { if (event.key === 'Enter') return signinLoginBtnHandler() });
signinEyeOff.addEventListener('click', signinEyeOffHandler);



