import { emailInput, emailResult, passwordInput, passwordResult } from "./tags.js";

let loginButton = document.querySelector('.login-button');
let signinForm = document.querySelector('.signin-form');

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
};

function checkSignin() {
  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    location.href = "folder.html";
  } else {
    emailInput.style.border = "1px solid var(--linkbrary-red)";
    emailResult.innerHTML = "이메일을 확인해주세요.";
    passwordInput.style.border = "1px solid var(--linkbrary-red)";
    passwordResult.innerHTML = "비밀번호를 확인해주세요.";
  }
}

let icon = document.querySelector(".eye-icon");

icon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.src = '../svg/eye_on.svg'
  } else {
    passwordInput.type = "password";
    icon.src = '../svg/eye_off.svg'
  }
});

function enterSignin(e) {
  if (e.key === "Enter") {
    checkSignin();
  }
}

document.addEventListener("click", formError);
loginButton.addEventListener("click", checkSignin);
signinForm.addEventListener("keypress", enterSignin);