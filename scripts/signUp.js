import {default as common, signUpModule as signUp} from "./signModule.js";
import {ERRORS} from "../utils/constants.js";

const {passwordConfirmInput, passwordConfirmFocusout} = signUp;
const IMAGE_EYE_ON = "./images/signin-eye-on.svg";
const IMAGE_EYE_OFF = "./images/signin-eye-off.svg";

const {
  submitButton,
  emailInput,
  passwordInput,
  eyeIcons,
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
const submit = function (e) {
  e.preventDefault();
  if (!emailValidation(emailInput.value)) {
    alert(ERRORS.MAPPER.emailInvalidError);
    return
  }
  if (!passwordValidation(passwordInput.value)) {
    alert(ERRORS.MAPPER.passwordLengthError)
    return;
  }
  if (!checkSamePassword()) {
    alert(ERRORS.MAPPER.passwordNotMatchError);
    return;
  }
  window.location.href = "../temp-success.html";
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
emailInput.addEventListener('focusout', emailFocusout.bind(common));
emailInput.addEventListener('focusin', emailFocusin.bind(common));
passwordInput.addEventListener('focusout', passwordFocusout.bind(common));
passwordInput.addEventListener('focusin', passwordFocusin.bind(common));
submitButton.addEventListener('click', submit);
eyeIcons.forEach((icon) => icon.addEventListener('click', toggleEyeIcons));
passwordConfirmInput.addEventListener('focusout',
    passwordConfirmFocusout.bind(signUp));

