import {
  validateInput,
  validateEmail,
  validatePassword,
} from "./validation.js";

const signinBox = document.querySelector(".signin-box");
const signinBtn = document.querySelector(".signin-btn");

const emailInput = document.querySelector(".sign-input-email");
const passwordInput = document.querySelector(".sign-input-password");

const emailErrorMsg = document.querySelector(".email-error-msg");
const passwordErrorMsg = document.querySelector(".password-error-msg");

const LOGIN_FAIL_MESSAGE_EMAIL = "이메일을 확인해주세요.";
const LOGIN_FAIL_MESSAGE_PASSWORD = "비밀번호를 확인해주세요.";

const URL_SIGNIN = "https://bootcamp-api.codeit.kr/api/sign-in";

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  window.location.href = "/forder.html";
}

async function signin() {
  const request = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch(URL_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (response.status !== 200) {
      validateInput(emailInput, emailErrorMsg, LOGIN_FAIL_MESSAGE_EMAIL);
      validateInput(
        passwordInput,
        passwordErrorMsg,
        LOGIN_FAIL_MESSAGE_PASSWORD
      );
      return;
    }
    const data = await response.json();
    const accessToken = data.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    window.location.href = "/forder.html";
  } catch (error) {
    console.log("error fetching data", error);
  }
}

function signinByEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    signin();
  }
}

emailInput.addEventListener("focusout", () =>
  validateEmail(emailInput, emailErrorMsg)
);
passwordInput.addEventListener("focusout", () =>
  validatePassword(passwordInput, passwordErrorMsg)
);
signinBtn.addEventListener("click", signin);
signinBox.addEventListener("keydown", signinByEnter);
