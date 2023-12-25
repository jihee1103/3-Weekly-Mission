import {ERRORS, END_POINTS, REGEX} from '../utils/constants.js';

const defaultSignModule = {
  submitButton: document.querySelector('#submit'),
  emailInput: document.querySelector('#email'),
  passwordInput: document.querySelector('#password'),
  eyeIcons: document.querySelectorAll('img[alt=icon-eyes]'),
  alertFunction: {
    init: function (target) {
      const initTargetString = target + " .alert"
      const alertMessage = document.querySelectorAll(initTargetString);
      if (alertMessage) {
        alertMessage.forEach((item) => {
          item.remove();
        });
      }
    },
    create: function (target, message, selectedInput) {
      this.init(target);
      const alertMessage = document.createElement('div');
      alertMessage.classList.add('alert');
      alertMessage.textContent = message;
      selectedInput.parentElement.append(alertMessage);
    }
  },
  //이메일 유효성 검사
  emailValidation: (email) => {
    return REGEX.EMAIL.test(email);
  },

//이메일 focusin 핸들러
  emailFocusin: function () {
    this.alertFunction.init(".email-box");
  },

//이메일 Focusout 핸들러
  emailFocusout: function () {
    const value = this.emailInput.value;
    if (value === "") {
      this.alertFunction.create(".email-box", ERRORS.MAPPER.EMAIL_VOID,
          this.emailInput);
      return;
    }
    if (!this.emailValidation(value)) {
      this.alertFunction.create(".email-box",
          ERRORS.MAPPER.EMAIL_INVALID,
          this.emailInput);
    }
  },

//password Focusin 핸들러
  passwordFocusin: function () {
    this.alertFunction.init(".password-box");
  },

//password Focusout 핸들러
  passwordFocusout: function () {
    if (this.passwordInput.value === "") {
      this.alertFunction.create(".password-box",
          ERRORS.MAPPER.PASSWORD_VOID,
          this.passwordInput);
    }
  },

//submit 핸들러
  submit: async function (e) {
    e.preventDefault();
    const emailValue = this.emailInput.value;
    const passwordValue = this.passwordInput.value;

    try {
      const response = await fetch(END_POINTS.SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailValue,
          passwordValue,
        }),
      });

      if (response.status === 200) {
        window.location.href = "../folder.html";
        return;
      }

      alert(ERRORS.MAPPER.SIGN_IN_FAILED);
    } catch (e) {
      alert("로그인 요청중 에러 발생.", e.message);
    }
  },

// Password Icon 이벤트 핸들러
  toggleEyeIcons: function () {
    if (this.passwordInput.type === 'password') {
      this.passwordInput.type = 'text';
      defaultSignModule.eyeIcons.forEach(
          (icon) => icon.src = "./images/signin-eye-on.svg");
      return;
    }
    this.passwordInput.type = 'password';
    defaultSignModule.eyeIcons.forEach(
        (icon) => icon.src = "./images/signin-eye-off.svg");
  },
  checkToken: async function () {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      location.href = '../temp-success.html';
    }
  }
}

const signUpModule = {
  passwordConfirmInput: document.querySelector('#password-confirmation'),
  passwordConfirmFocusout: function () {
    if (this.passwordConfirmInput.value
        !== defaultSignModule.passwordInput.value) {
      defaultSignModule.alertFunction.create(".password-box",
          ERRORS.MAPPER.PASSWORD_NOT_MATCH,
          this.passwordConfirmInput);
    }
  }
}

export default defaultSignModule;
export {signUpModule};