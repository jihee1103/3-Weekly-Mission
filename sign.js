const button = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const eyeIcon = document.querySelector('.password-box img');

const TEST_EMAIL = "test@codeit.com";
const TEST_PASSWORD = "codeit101";

const errorMapper = {
  emailVoidError: "이메일을 입력해주세요.",
  emailInvalidError: "올바른 이메일 주소가 아닙니다.",
  passwordVoidError: "비밀번호를 입력해주세요.",
  emailWrongError: "이메일을 확인해주세요.",
  passwordWrongError: "비밀번호를 확인해주세요."
}

const alertFunction = {
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
}

//이메일 유효성 검사
function emailValidation(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

//이메일 focusin 핸들러
function emailFocusin() {
  alertFunction.init(".email-box");
}

//이메일 Focusout 핸들러
function emailFocusout() {
  const value = emailInput.value;
  if (value === "") {
    alertFunction.create(".email-box", errorMapper.emailVoidError, emailInput);
  } else if (!emailValidation(value)) {
    alertFunction.create(".email-box", errorMapper.emailInvalidError,
        emailInput);
  }
}

//password Focusin 핸들러
function passwordFocusin() {
  alertFunction.init(".password-box");
}

//password Focusout 핸들러
function passwordFocusout() {
  if (passwordInput.value === "") {
    alertFunction.create(".password-box", errorMapper.passwordVoidError,
        passwordInput);
  }
}

//submit 핸들러
function submit(e) {
  e.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === TEST_EMAIL && passwordValue === TEST_PASSWORD) {
    window.location.href = "./folder.html";
  } else if (emailValue !== TEST_EMAIL) {
    alertFunction.create(".email-box", errorMapper.emailWrongError, emailInput)
  } else if (passwordValue !== TEST_PASSWORD) {
    alertFunction.create(".password-box", errorMapper.passwordWrongError,
        passwordInput)
  }
}

// Password Icon 이벤트 핸들러
function toggleEyeIcon() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = "./images/signin-eye-on.svg";
  } else {
    passwordInput.type = 'password';
    eyeIcon.src = "./images/signin-eye-off.svg";
  }
}

//addEventListeners
emailInput.addEventListener('focusout', emailFocusout);
emailInput.addEventListener('focusin', emailFocusin);
passwordInput.addEventListener('focusout', passwordFocusout);
passwordInput.addEventListener('focusin', passwordFocusin);
button.addEventListener('click', submit);
eyeIcon.addEventListener('click', toggleEyeIcon);






