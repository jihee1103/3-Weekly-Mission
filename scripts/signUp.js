import {default as common, signUpModule as signUp} from "./signModule.js";
import {ERRORS, END_POINTS} from '../utils/constants.js';

const {passwordConfirmInput, passwordConfirmFocusout} = signUp;
const IMAGE_EYE_ON = "./images/signin-eye-on.svg";
const IMAGE_EYE_OFF = "./images/signin-eye-off.svg";

const {
  submitButton,
  emailInput,
  passwordInput,
  eyeIcons,
  checkToken,
  emailValidation,
  emailFocusin,
  emailFocusout,
  passwordFocusin,
  passwordFocusout,
} = common;

// 패스워드, 패스워드 확인 일치 검사.
const checkSamePassword = function () {
  return passwordInput.value === passwordConfirmInput.value;
}

// 패스워드 유효성 검사(임의로 정한 조건)
const passwordValidation = function (value) {
  //길이만 검사
  return !(value.length < 8 || value.length > 20);
}
//submit 이벤트 핸들러
const submit = async function (e) {
  e.preventDefault();
  if (!emailValidation(emailInput.value)) {
    alert(ERRORS.MAPPER.EMAIL_INVALID);
    return
  }
  if (!passwordValidation(passwordInput.value)) {
    alert(ERRORS.MAPPER.PASSWORD_LENGTH)
    return;
  }
  if (!checkSamePassword()) {
    alert(ERRORS.MAPPER.PASSWORD_NOT_MATCH);
    return;
  }
  if (!await checkEmailDuplication()) {
    alert(ERRORS.MAPPER.EMAIL_DUPLICATED);
    return;
  }

  const result = await trySignUp()

  //페이지 이동
  if (result) {
    localStorage.setItem('accessToken', result.accessToken);
    localStorage.setItem('refreshToken', result.refreshToken);
    location.href = '../temp-success.html';
    return;
  }

  alert(ERRORS.MAPPER.SIGN_UP_FAILED);
}

async function trySignUp() {
  try {
    const response = await fetch(END_POINTS.SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    const result = await response.json();

    if (response.status !== 200) {
      alert(result.error.message);
      return
    }

    const accessToken = await result.data.accessToken;
    const refreshToken = await result.data.refreshToken;
    return {accessToken, refreshToken};
  } catch (err) {
    alert(err.message);
  }
}

//이메일 중복 체크
async function checkEmailDuplication() {
  try {
    const response = await fetch(END_POINTS.CHECK_EMAIL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    });
    return response.status === 200;

  } catch (err) {
  }
}

function toggleEyeIcons() {
  if (passwordInput.type === 'password') {
    passwordConfirmInput.type = 'text';
    passwordInput.type = 'text';
    common.eyeIcons.forEach((icon) => icon.src = IMAGE_EYE_ON);
    return;
  }

  passwordInput.type = 'password';
  passwordConfirmInput.type = 'password';
  common.eyeIcons.forEach((icon) => icon.src = IMAGE_EYE_OFF);
}

//addEventListeners
document.addEventListener('DOMContentLoaded', checkToken);
emailInput.addEventListener('focusout', emailFocusout.bind(common));
emailInput.addEventListener('focusin', emailFocusin.bind(common));
passwordInput.addEventListener('focusout', passwordFocusout.bind(common));
passwordInput.addEventListener('focusin', passwordFocusin.bind(common));
submitButton.addEventListener('click', submit);
eyeIcons.forEach((icon) => icon.addEventListener('click', toggleEyeIcons));
passwordConfirmInput.addEventListener('focusout',
    passwordConfirmFocusout.bind(signUp));

