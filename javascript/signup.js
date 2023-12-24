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
const passwordOnOff = document.querySelector("#password-show-hide");
const confirmPasswordOnOff = document.querySelector(
  "#confirm-password-show-hide"
);

let verifyEmail = false;
let verifyPassword = false;
let verifyConfirmPassword = false;

function addErrorStyle(element) {
  element.classList.add("inputbox-error");
}

function removeErrorStyle(element) {
  element.classList.remove("inputbox-error");
}

function showErrorMessage(element, message) {
  element.textContent = message;
}

function checkEmail() {
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!inputEmail.value) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "이메일을 입력해주세요.");
  } else if (!regEmail.test(inputEmail.value)) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
  } else if (inputEmail.value === "test@codeit.com") {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "이미 사용 중인 이메일입니다.");
  } else {
    removeErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "");

    verifyEmail = true;
  }
}

function checkPassword() {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (!inputPassword.value) {
    addErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "비밀번호를 입력해주세요.");
  } else if (!regPassword.test(inputPassword.value)) {
    addErrorStyle(inputPassword);
    showErrorMessage(
      passwordErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
    );
  } else {
    removeErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "");

    verifyPassword = true;
  }
}

function checkConfirmPassword() {
  if (!inputConfirmPassword.value) {
    addErrorStyle(inputConfirmPassword);
    showErrorMessage(confirmPasswordErrorMessage, "비밀번호를 입력해주세요.");
  } else if (inputConfirmPassword.value !== inputPassword.value) {
    addErrorStyle(inputConfirmPassword);
    showErrorMessage(confirmPasswordErrorMessage, "비밀번호가 다릅니다.");
  } else {
    removeErrorStyle(inputConfirmPassword);
    showErrorMessage(confirmPasswordErrorMessage, "");

    verifyConfirmPassword = true;
  }
}

function signUp() {
  if (verifyEmail && verifyPassword && verifyConfirmPassword) {
    location.href = "./folder.html";
  } else if (verifyEmail === false) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "이메일을 확인해주세요.");
  } else if (verifyPassword === false) {
    addErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "비밀번호를 확인해주세요.");
  } else if (verifyConfirmPassword === false) {
    addErrorStyle(inputConfirmPassword);
    showErrorMessage(confirmPasswordErrorMessage, "비밀번호를 확인해주세요.");
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

confirmPasswordOnOff.addEventListener("click", () => {
  showOrHidePassword(confirmPasswordOnOff, inputConfirmPassword);
});

document.addEventListener("keypress", (event) => {
  if (
    (event.target === inputEmail ||
      event.target === inputPassword ||
      event.target === inputConfirmPassword) &&
    event.key === "Enter"
  ) {
    signUp();
  }
});

document.addEventListener("focusout", (event) => {
  if (event.target === inputEmail) {
    checkEmail();
  } else if (event.target === inputPassword) {
    checkPassword();
  } else if (event.target === inputConfirmPassword) {
    checkConfirmPassword();
  }
});

signupButton.addEventListener("click", signUp);
