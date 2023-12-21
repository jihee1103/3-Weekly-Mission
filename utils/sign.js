export const $inputEmailBox = document.querySelector(".login-input-email");
export const $inputEmail = document.querySelector(".email-inputbox");
export const $inputPasswordBox = document.querySelector(".login-input-password");
export const $inputPassword = document.querySelector(".password-inputbox");
export const $loginButton = document.querySelector(".login-btn");
export const $eyeIcon = document.querySelectorAll(".eye");
export const $inputPasswordRepeat = document.querySelector(".password-repeat-inputbox");
export const $inputPasswordRepeatBox = document.querySelector(".login-input-password-repeat");
export const $signupButton = document.querySelector(".sign-up-btn");
export const users = [
  {
    id: "test@codeit.com",
    password: "codeit101",
  },
];

// 에러 메세지 생성
export function displayLoginError(input, inputBox, message) {
  const $loginErrorMessage = document.createElement("p");
  if (input === $inputEmail) {
    $loginErrorMessage.classList.add("error-message-email");
    input.classList.add("error-box-email");
  } else if (input === $inputPassword) {
    $loginErrorMessage.classList.add("error-message-password");
    input.classList.add("error-box-password");
  } else {
    $loginErrorMessage.classList.add("error-message-password-repeat");
    input.classList.add("error-box-password-repeat");
  }
  $loginErrorMessage.textContent = message;
  inputBox.append($loginErrorMessage);
}

// 에러 메세지 삭제
export function removeLoginError(input, className) {
  const $existErrorMessage = document.querySelector(className);
  if ($existErrorMessage) {
    $existErrorMessage.remove();
    if (input === $inputEmail) input.classList.remove("error-box-email");
    else if (input === $inputPassword) input.classList.remove("error-box-password");
    else input.classList.remove("error-box-password-repeat");
  }
}

// 이메일 값 유무 확인, 형식 검사
export function checkInputEmail() {
  const regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const isValidEmail = regEmail.test($inputEmail.value);

  // 에러 메세지가 존재하면 삭제
  removeLoginError($inputEmail, ".error-message-email");
  // 이메일 값이 없을 경우 에러 메세지 생성
  if (!$inputEmail.value) {
    displayLoginError($inputEmail, $inputEmailBox, "이메일을 입력해주세요.");
    return false;
  } else if (!isValidEmail) {
    // 이메일 형식 검사
    displayLoginError($inputEmail, $inputEmailBox, "올바른 이메일 주소가 아닙니다.");
    return false;
  }
  return true;
}

// 비밀번호 값 유무 확인
export function checkInputPassword() {
  // 에러 메세지가 존재하면 삭제
  removeLoginError($inputPassword, ".error-message-password");

  if (!$inputPassword.value) {
    displayLoginError($inputPassword, $inputPasswordBox, "비밀번호를 입력해주세요.");
    return false;
  }
  return true;
}

// 눈 모양 아이콘
export function toggleDisplayPassword(e) {
  const parentEle = e.target.parentElement;
  const passwordInputBox = parentEle.children[0];
  const currentType = passwordInputBox.type;
  passwordInputBox.type = currentType === "password" ? "text" : "password";
  e.target.style.backgroundImage =
    currentType === "password" ? "url(/asset/eye-on.svg)" : "url(/asset/eye-off.svg)";
}

// 로그인 실패시 에러 메세지
export function displayCheckEmailPassword() {
  removeLoginError($inputEmail, ".error-message-email");
  removeLoginError($inputPassword, ".error-message-password");
  displayLoginError($inputEmail, $inputEmailBox, "이메일을 확인해주세요.");
  displayLoginError($inputPassword, $inputPasswordBox, "비밀번호를 확인해주세요.");
}
