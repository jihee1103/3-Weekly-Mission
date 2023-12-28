import { emailInput, emailResult, passwordInput, passwordResult } from "./tags.js";

const passwordRepeatInput = document.querySelector('.password-repeat-input');
const passwordRepeatResult = document.querySelector('.password-repeat-result');
const signupForm = document.querySelector('.signup-form');
const signupButton = document.querySelector('.signup-button');

// 이메일 유효성 검사
const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function makeFormError() {
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

const icon = document.querySelector(".eye-icon");
const repeatIcon = document.querySelector(".repeat-eye-icon");

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
    makeFormError();
    signupData();
  }
}

async function signupData() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    });

    if (response.status === 409) {
      emailInput.style.border = "1px solid var(--linkbrary-red)";
      emailResult.innerHTML = "이미 사용중인 이메일입니다.";
    } else if (response.status === 200) {
      location.href = 'folder.html';
    }
  } catch (error) {
    console.error('오류 발생', error);
  }
}

document.addEventListener("click", makeFormError);
signupButton.addEventListener("click", signupData);
signupForm.addEventListener("keypress", enterSignup);