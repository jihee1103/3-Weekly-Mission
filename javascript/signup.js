import { emailInput, emailResult, passwordInput, passwordResult } from "./tags.js";

let passwordRepeatInput = document.querySelector('.password-repeat-input');
let passwordRepeatResult = document.querySelector('.password-repeat-result');
let signupForm = document.querySelector('.signup-form');

// 이메일 유효성 검사
let emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function formError() {
  if (emailInput.value === "") {
    emailInput.style.border = "1px solid var(--linkbrary-red)";
    emailResult.innerHTML = "이메일을 입력해주세요.";
  } else if (emailCheck.test(emailInput.value) == false) {
    emailInput.style.border = "1px solid var(--linkbrary-red)";
    emailResult.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailInput.style.border = "1px solid var(--linkbrary-gray-20)";
    emailResult.innerHTML = "";
  }

  if (passwordInput.value === "") {
    passwordInput.style.border = "1px solid var(--linkbrary-red)";
    passwordResult.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    passwordInput.style.border = "1px solid var(--linkbrary-gray-20)";
    passwordResult.innerHTML = "";
  }

  if (passwordInput.value !== passwordRepeatInput.value) {
    passwordRepeatInput.style.border = "1px solid var(--linkbrary-red)";
    passwordRepeatResult.innerHTML = "비밀번호가 다릅니다.";
  } else {
    passwordRepeatInput.style.border = "1px solid var(--linkbrary-gray-20)";
    passwordRepeatResult.innerHTML = "";
  }
};

let icon = document.querySelector(".eye-icon");
let repeatIcon = document.querySelector(".repeat-eye-icon");

icon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.src = '../svg/eye_on.svg'
  } else {
    passwordInput.type = "password";
    icon.src = '../svg/eye_off.svg'
  }
});

repeatIcon.addEventListener("click", function () {
  if (passwordRepeatInput.type === "password") {
    passwordRepeatInput.type = "text";
    repeatIcon.src = '../svg/eye_on.svg'
  } else {
    passwordRepeatInput.type = "password";
    repeatIcon.src = '../svg/eye_off.svg'
  }
});

function enterSignup(e) {
  if (e.key === "Enter") {
    formError();
  }
}

document.addEventListener("click", formError);
signupForm.addEventListener("keypress", enterSignup);