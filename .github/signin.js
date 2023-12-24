import { testEmail, testPassword, emailInput, pwInput, isValidEmail, isValidPw } from "./validation.js";
import { errManager } from "./validation.js";

function emailErrorMessage() {
  const inputEmail = emailInput.value;

  if(inputEmail === '') {
    errManager.showEmail('이메일을 입력해주세요.');
  } else if(!isValidEmail(inputEmail)) {
    errManager.showEmail('올바른 이메일 주소가 아닙니다.')
  } else {
    errManager.hideEmail();
  }
}

function pwErrorMessage() {
  const inputPw = pwInput.value;

  if(inputPw === '') {
    errManager.showPassword('비밀번호를 입력해주세요.');
  } else {
    errManager.hidePassword();
  }
}

emailInput.addEventListener('focusout', emailErrorMessage);
pwInput.addEventListener('focusout', pwErrorMessage);

const loginForm = document.querySelector('#loginForm');

function loginCheck(e) {
  const inputEmail = emailInput.value;
  const inputPw = pwInput.value;

  if(inputEmail === testEmail && inputPw === testPassword) {
    e.preventDefault();
    location.href = "folder.html";
  } else {
    if(inputEmail !== testEmail) {
      errManager.showEmail('이메일을 확인해주세요.');
    } else {
      errManager.hideEmail();
    }

    if(inputPw !== testPassword) {
      errManager.showPassword('비밀번호를 확인해주세요.');
    } else {
      errManager.hidePassword();
    }
  
    e.preventDefault();
  }
}

loginForm.addEventListener('submit', loginCheck);