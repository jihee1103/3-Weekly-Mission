const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputConfirmPassword = document.querySelector("#confirm-password");
const signupButton = document.querySelector("#signup-button");
const inputError = document.querySelector(".inputbox-error");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");
const confirmPasswordErrorMessage = document.querySelector(
  "#confirm-password-error-message"
);

let verifyEmail = false;
let verifyPassword = false;
let verifyConfirmPassword = false;

function checkEmail() {
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!inputEmail.value) {
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    inputEmail.classList.add("inputbox-error");
  } else if (!regEmail.test(inputEmail.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.classList.add("inputbox-error");
  } else if (inputEmail.value === "test@codeit.com") {
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다";
    inputEmail.classList.add("inputbox-error");
  } else {
    emailErrorMessage.textContent = "";
    inputEmail.classList.remove("inputbox-error");
    verifyEmail = true;
  }
}

function checkPassword() {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (!inputPassword.value) {
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    inputPassword.classList.add("inputbox-error");
  } else if (!regPassword.test(inputPassword.value)) {
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.";
    inputPassword.classList.add("inputbox-error");
  } else {
    passwordErrorMessage.textContent = "";
    inputPassword.classList.remove("inputbox-error");
    verifyPassword = true;
  }
}

function checkConfirmPassword() {
  if (!inputConfirmPassword.value) {
    confirmPasswordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    inputConfirmPassword.classList.add("inputbox-error");
  } else if (inputConfirmPassword.value !== inputPassword.value) {
    confirmPasswordErrorMessage.textContent = "비밀번호가 다릅니다";
    inputConfirmPassword.classList.add("inputbox-error");
  } else {
    confirmPasswordErrorMessage.textContent = "";
    inputConfirmPassword.classList.remove("inputbox-error");
    verifyConfirmPassword = true;
  }
}

function signUp() {
  if (verifyEmail && verifyPassword && verifyConfirmPassword) {
    location.href = "../folder.html";
  } else if (verifyEmail === false) {
    emailErrorMessage.textContent = "이메일을 확인해주세요.";
    inputEmail.classList.add("inputbox-error");
  } else if (verifyPassword === false) {
    passwordErrorMessage.textContent = "비밀번호를 확인해주세요.";
    inputPassword.classList.add("inputbox-error");
  } else if (verifyConfirmPassword === false) {
    confirmPasswordErrorMessage.textContent = "비밀번호를 확인해주세요";
    inputConfirmPassword.classList.add("inputbox-error");
  }
}

function pressEnterToSignIn(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    signIn();
  }
}

inputEmail.addEventListener("focusout", checkEmail);
inputPassword.addEventListener("focusout", checkPassword);
inputConfirmPassword.addEventListener("focusout", checkConfirmPassword);
signupButton.addEventListener("click", signUp);
