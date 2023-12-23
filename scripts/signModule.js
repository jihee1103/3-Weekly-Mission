import {CONSTANTS, ERRORS} from '../utils/constants.js';

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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  },

//이메일 focusin 핸들러
  emailFocusin: function () {
    this.alertFunction.init(".email-box");
  },

//이메일 Focusout 핸들러
  emailFocusout: function () {
    const value = this.emailInput.value;
    if (value === "") {
      this.alertFunction.create(".email-box", ERRORS.MAPPER.emailVoidError,
          this.emailInput);
      return;
    }
    if (!this.emailValidation(value)) {
      this.alertFunction.create(".email-box",
          ERRORS.MAPPER.emailInvalidError,
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
          ERRORS.MAPPER.passwordVoidError,
          this.passwordInput);
    }
  },

//submit 핸들러
  submit: function (e) {
    e.preventDefault();
    const emailValue = this.emailInput.value;
    const passwordValue = this.passwordInput.value;

    if (emailValue === CONSTANTS.DEV.TEST_EMAIL && passwordValue
        === CONSTANTS.DEV.TEST_PASSWORD) {
      window.location.href = "../folder.html";
      return;
    }
    if (emailValue !== CONSTANTS.DEV.TEST_EMAIL) {
      this.alertFunction.create(".email-box", ERRORS.MAPPER.emailWrongError,
          this.emailInput)
      return;
    }
    if (passwordValue !== CONSTANTS.DEV.TEST_EMAIL) {
      this.alertFunction.create(".password-box",
          ERRORS.MAPPER.passwordWrongError,
          this.passwordInput)
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
  }
}

const signUpModule = {
  passwordConfirmInput: document.querySelector('#password-confirmation'),
  passwordConfirmFocusout: function () {
    if (this.passwordConfirmInput.value
        !== defaultSignModule.passwordInput.value) {
      defaultSignModule.alertFunction.create(".password-box",
          ERRORS.MAPPER.passwordNotMatchError,
          this.passwordConfirmInput);
    }
  }
}

export default defaultSignModule;
export {signUpModule};