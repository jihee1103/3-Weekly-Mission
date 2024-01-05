import {
  validateInput,
  validateEmail,
  validatePasswordWithRegex,
  validatePasswordCheck,
} from "./validation.js";

const signinBox = document.querySelector(".signup-box");
const signinBtn = document.querySelector(".signup-btn");

const emailInput = document.querySelector(".sign-input-email");
const passwordInput = document.querySelector(".sign-input-password");
const passwordCheckInput = document.querySelector(".sign-input-passwordcheck");

const emailErrorMsg = document.querySelector(".email-error-msg");
const passwordErrorMsg = document.querySelector(".password-error-msg");
const passwordCheckErrorMsg = document.querySelector(
  ".passwordcheck-error-msg"
);

const ALREADY_EXIST_EMAIL = "이미 존재하는 이메일입니다.";

const URL_EMAIL_DUP_CHECK = "https://bootcamp-api.codeit.kr/api/check-email";
const URL_SIGNUP = "https://bootcamp-api.codeit.kr/api/sign-up";

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  window.location.href = "/forder.html";
}

async function checkEmailDuplicate() {
  const isValid = validateEmail(emailInput, emailErrorMsg);
  if (!isValid) return;

  const request = {
    email: emailInput.value,
  };
  try {
    const response = await fetch(URL_EMAIL_DUP_CHECK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (response.status !== 200) {
      validateInput(emailInput, emailErrorMsg, ALREADY_EXIST_EMAIL);
      return;
    }
  } catch (error) {
    console.log("error fetching data", error);
  }
}

async function signup() {
  const isValid =
    validateEmail(emailInput, emailErrorMsg) &&
    validatePasswordWithRegex(passwordInput, passwordErrorMsg) &&
    validatePasswordCheck(
      passwordInput,
      passwordCheckInput,
      passwordCheckErrorMsg
    );
  if (!isValid) return;

  const request = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch(URL_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (response.status !== 200) {
      validateInput(emailInput, emailErrorMsg, ALREADY_EXIST_EMAIL);
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

function signupByEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    signup();
  }
}

emailInput.addEventListener("focusout", () =>
  checkEmailDuplicate(emailInput, emailErrorMsg)
);
passwordInput.addEventListener("focusout", () =>
  validatePasswordWithRegex(passwordInput, passwordErrorMsg)
);
passwordCheckInput.addEventListener("focusout", () => {
  validatePasswordCheck(
    passwordInput,
    passwordCheckInput,
    passwordCheckErrorMsg
  );
});
signinBtn.addEventListener("click", signup);
signinBox.addEventListener("keydown", signupByEnter);
