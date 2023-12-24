import { emailInput, emailResult, passwordInput, passwordResult } from "./tags.js";

const loginButton = document.querySelector('.login-button');
const signinForm = document.querySelector('.signin-form');

// 이메일 유효성 검사
const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function makeFormError() {
  if (emailInput.value === "") {
    emailInput.style.border = "1px solid var(--linkbrary-red)";
    emailResult.innerHTML = "이메일을 입력해주세요.";
  } else if (emailCheck.test(emailInput.value) === false) {
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

async function signinData() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (response.status === 200) {
      location.href = 'folder.html';
    } else if (response.status === 400) {
      emailInput.style.border = "1px solid var(--linkbrary-red)";
      emailResult.innerHTML = "이메일을 확인해주세요.";
      passwordInput.style.border = "1px solid var(--linkbrary-red)";
      passwordResult.innerHTML = "비밀번호를 확인해주세요.";
    }
  } catch (error) {
    console.error('오류 발생', error);
  }
}

const icon = document.querySelector(".eye-icon");

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
    signinData();
  }
}

document.addEventListener("click", makeFormError);
loginButton.addEventListener("click", signinData);
signinForm.addEventListener("keypress", enterSignin);