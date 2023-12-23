const defaultSignModule = {
  submitButton: document.querySelector('#submit'),
  emailInput: document.querySelector('#email'),
  passwordInput: document.querySelector('#password'),
  eyeIcons: document.querySelectorAll('img[alt=icon-eyes]'),
  errorMapper: {
    emailVoidError: "이메일을 입력해주세요.",
    emailInvalidError: "올바른 이메일 주소가 아닙니다.",
    passwordVoidError: "비밀번호를 입력해주세요.",
    emailWrongError: "이메일을 확인해주세요.",
    passwordWrongError: "비밀번호를 확인해주세요.",
    passwordNotMatchError: "비밀번호가 일치하지 않습니다.",
    passwordLengthError: "비밀번호는 8자 이상 20자 이하여야 합니다."
  },
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
      this.alertFunction.create(".email-box", this.errorMapper.emailVoidError,
          this.emailInput);
    } else if (!this.emailValidation(value)) {
      this.alertFunction.create(".email-box",
          this.errorMapper.emailInvalidError,
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
          this.errorMapper.passwordVoidError,
          this.passwordInput);
    }
  },

//submit 핸들러
  submit: function (e) {
    e.preventDefault();
    const emailValue = this.emailInput.value;
    const passwordValue = this.passwordInput.value;

    if (emailValue === signInModule.TEST_EMAIL && passwordValue
        === signInModule.TEST_PASSWORD) {
      window.location.href = "./folder.html";
    } else if (emailValue !== signInModule.TEST_EMAIL) {
      this.alertFunction.create(".email-box", this.errorMapper.emailWrongError,
          this.emailInput)
    } else if (passwordValue !== signInModule.TEST_PASSWORD) {
      this.alertFunction.create(".password-box",
          this.errorMapper.passwordWrongError,
          this.passwordInput)
    }
  },

// Password Icon 이벤트 핸들러
  toggleEyeIcons: function () {
    if (this.passwordInput.type === 'password') {
      this.passwordInput.type = 'text';
      defaultSignModule.eyeIcons.forEach((icon) => icon.src = "./images/signin-eye-on.svg");
    } else {
      this.passwordInput.type = 'password';
      defaultSignModule.eyeIcons.forEach((icon) => icon.src = "./images/signin-eye-off.svg");
    }
  },
}

const signInModule = {
  TEST_EMAIL: "test@codeit.com",
  TEST_PASSWORD: "codeit101",
}
const signUpModule = {
  passwordConfirmInput: document.querySelector('#password-confirmation'),
  passwordConfirmFocusout: function () {
    if (this.passwordConfirmInput.value
        !== defaultSignModule.passwordInput.value) {
      defaultSignModule.alertFunction.create(".password-box",
          defaultSignModule.errorMapper.passwordNotMatchError,
          this.passwordConfirmInput);
    }
  }
}

export default defaultSignModule;
export {signInModule, signUpModule};