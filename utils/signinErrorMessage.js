export const $inputEmailBox = document.querySelector(".login-input-email");
export const $inputEmail = document.querySelector(".email-inputbox");
export const $inputPasswordBox = document.querySelector(".login-input-password");
export const $inputPassword = document.querySelector(".password-inputbox");

// 로그인 에러 메세지 생성
export function displayLoginError(input, inputBox, message) {
  const $loginErrorMessage = document.createElement("p");
  if (input === $inputEmail) {
    $loginErrorMessage.classList.add("error-message-email");
    input.classList.add("error-box-email");
  } else {
    $loginErrorMessage.classList.add("error-message-password");
    input.classList.add("error-box-password");
  }
  $loginErrorMessage.textContent = message;
  inputBox.append($loginErrorMessage);
}

// 로그인 에러 메세지 삭제
export function removeLoginError(input, className) {
  const $existErrorMessage = document.querySelector(className);
  if ($existErrorMessage) {
    $existErrorMessage.remove();
    if (input === $inputEmail) input.classList.remove("error-box-email");
    else input.classList.remove("error-box-password");
  }
}

// 이메일 값 유무 확인
function checkInputEmail(e) {
  const regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const isValidEmail = regEmail.test(e.target.value);

  // 에러 메세지가 존재하면 삭제
  removeLoginError($inputEmail, ".error-message-email");

  // 이메일 값이 없을 경우 에러 메세지 생성
  if (!e.target.value) {
    displayLoginError($inputEmail, $inputEmailBox, "이메일을 입력해주세요.");
  } else if (!isValidEmail) {
    // 이메일 형식 검사
    displayLoginError($inputEmail, $inputEmailBox, "올바른 이메일 주소가 아닙니다.");
  }
}

// 비밀번호 값 유무 확인
function checkInputPassword(e) {
  // 에러 메세지가 존재하면 삭제
  removeLoginError($inputPassword, ".error-message-password");

  if (!e.target.value) {
    displayLoginError($inputPassword, $inputPasswordBox, "비밀번호를 입력해주세요.");
  }
}

// 로그인 이벤트 리스너 추가
$inputEmail.addEventListener("focusout", checkInputEmail);
$inputPassword.addEventListener("focusout", checkInputPassword);
