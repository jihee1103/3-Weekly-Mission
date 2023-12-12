const inputEmail = document.querySelector("#email-input");
const inputPassword = document.querySelector("#password-input");
const emailAlert = document.querySelector("#email-alert");
const passwordAlert = document.querySelector("#password-alert");

const loginButton = document.querySelector("#login-button");
const inputSection = document.querySelector("section");

const eyeIcon = document.querySelector("#eye-icon");

function errorEmailAlert() {
  if (inputEmail.value.includes("@")) {
    emailAlert.style.display = "NONE";
    inputEmail.classList.remove("alert-input");
  } else {
    if (!inputEmail.value) {
      emailAlert.textContent = "이메일을 입력해 주세요.";
    } else if (!inputEmail.value.includes("@")) {
      emailAlert.textContent = "올바른 이메일 주소가 아닙니다.";
    }
    emailAlert.style.display = "INLINE";
    inputEmail.classList.add("alert-input");
  }
}

function errorPasswordAlert() {
  if (inputPassword.value) {
    passwordAlert.style.display = "NONE";
    inputPassword.classList.remove("alert-input");
  } else {
    passwordAlert.textContent = "비밀번호를 입력해 주세요.";
    passwordAlert.style.display = "INLINE";
    inputPassword.classList.add("alert-input");
  }
}

function checkLogin() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    location.href = "folder.html";
  } else {
    emailAlert.textContent = "이메일을 확인해 주세요.";
    passwordAlert.textContent = "비밀번호를 확인해 주세요.";
    emailAlert.style.display = "INLINE";
    passwordAlert.style.display = "INLINE";
    inputEmail.classList.add("alert-input");
    inputPassword.classList.add("alert-input");
  }
}

function pressEnter(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkLogin();
  }
}

function showAndHidePassword() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    eyeIcon.src = "images/eye-on.svg";
    eyeIcon.alt = "눈 아이콘";
  } else {
    inputPassword.type = "password";
    eyeIcon.src = "images/eye-off.svg";
    eyeIcon.alt = "눈에 빗금친 아이콘";
  }
}

inputEmail.addEventListener("focusout", errorEmailAlert);
inputPassword.addEventListener("focusout", errorPasswordAlert);

loginButton.addEventListener("click", checkLogin);
inputSection.addEventListener("keypress", pressEnter);

eyeIcon.addEventListener("click", showAndHidePassword);
