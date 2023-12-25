const EMPTY_EMAIL_MSG = "이메일을 입력해주세요.";
const EMPTY_PASSWORD_MSG = "비밀번호를 입력해주세요.";
const INVALID_EMAIL_MSG = "올바른 이메일 주소가 아닙니다.";
const INVALID_PASSWORD_MSG =
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
const MISMATCHED_PASSWORD_MSG = "비밀번호가 일치하지 않아요.";

function validateInput(inputEl, errorMsgEl, message) {
  errorMsgEl.textContent = message;
  if (message) {
    inputEl.classList.add("error");
    return false;
  }
  inputEl.classList.remove("error");
  return true;
}

function validateEmail(emailInput, emailErrorMsg) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (emailInput.value === "") {
    return validateInput(emailInput, emailErrorMsg, EMPTY_EMAIL_MSG);
  }
  if (!email_regex.test(emailInput.value)) {
    return validateInput(emailInput, emailErrorMsg, INVALID_EMAIL_MSG);
  }
  return validateInput(emailInput, emailErrorMsg, "");
}

function validatePassword(passwordInput, passwordErrorMsg) {
  if (passwordInput.value === "") {
    return validateInput(passwordInput, passwordErrorMsg, EMPTY_PASSWORD_MSG);
  }
  return validateInput(passwordInput, passwordErrorMsg, "");
}

function validatePasswordWithRegex(passwordInput, passwordErrorMsg) {
  const password_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  if (passwordInput.value === "") {
    return validateInput(passwordInput, passwordErrorMsg, EMPTY_PASSWORD_MSG);
  }
  if (!password_regex.test(passwordInput.value)) {
    return validateInput(passwordInput, passwordErrorMsg, INVALID_PASSWORD_MSG);
  }
  return validateInput(passwordInput, passwordErrorMsg, "");
}

function validatePasswordCheck(
  passwordInput,
  passwordCheckInput,
  passwordCheckErrorMsg
) {
  const isMatched = passwordInput.value === passwordCheckInput.value;
  if (!isMatched) {
    return validateInput(
      passwordCheckInput,
      passwordCheckErrorMsg,
      MISMATCHED_PASSWORD_MSG
    );
  }
  return validateInput(passwordCheckInput, passwordCheckErrorMsg, "");
}

export {
  validateInput,
  validateEmail,
  validatePassword,
  validatePasswordWithRegex,
  validatePasswordCheck,
};
