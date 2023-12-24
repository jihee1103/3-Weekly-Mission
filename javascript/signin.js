const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const signinButton = document.querySelector("#signin-button");
const inputError = document.querySelector(".inputbox-error");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");
const passwordOnOff = document.querySelector("#password-show-hide");

function checkEmail() {
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!inputEmail.value) {
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    inputEmail.classList.add("inputbox-error");
  } else if (!regEmail.test(inputEmail.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.classList.add("inputbox-error");
  } else {
    emailErrorMessage.textContent = "";
    inputEmail.classList.remove("inputbox-error");
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
  }
}

function signIn() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    location.href = "./folder.html";
  } else {
    emailErrorMessage.textContent = "이메일을 확인해주세요.";
    passwordErrorMessage.textContent = "비밀번호를 확인해주세요.";
    inputEmail.classList.add("inputbox-error");
    inputPassword.classList.add("inputbox-error");
  }
}

function showOrHidePassword(passwordToggleButton, passwordInputField) {
  if (passwordInputField.type == "password") {
    passwordInputField.type = "text";
    passwordToggleButton.src = "./image/eye-on.svg";
  } else if (passwordInputField.type == "text") {
    passwordInputField.type = "password";
    passwordToggleButton.src = "./image/eye-off.svg";
  }
}

passwordOnOff.addEventListener("click", () => {
  showOrHidePassword(passwordOnOff, inputPassword);
});

document.addEventListener("keypress", (event) => {
  if (
    (event.target === inputEmail || event.target === inputPassword) &&
    event.key === "Enter"
  ) {
    signIn();
  }
});

document.addEventListener("focusout", (event) => {
  if (event.target === inputEmail) {
    checkEmail();
  } else if (event.target === inputPassword) {
    checkPassword();
  }
});

signinButton.addEventListener("click", signIn);
