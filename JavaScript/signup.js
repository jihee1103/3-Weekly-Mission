import {
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
  inputSection,
} from "./ingredient/tags.js";

import emailError from "./ingredient/error_message.js";

import showHidePassword from "./ingredient/show_hide.js";

const signupButton = document.querySelector("#signup-button");
const passwordCheckError = document.querySelector("#password-check-error");
const inputPasswordCheck = document.querySelector("#password-check-input");

const CHECK_PASSWORD = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$/;

const localStorage = window.localStorage;

if (localStorage.getItem("signup")) location.href = "folder.html";

async function checkEmailError() {
  const userEmail = {
    email: inputEmail.value,
  };

  if (emailError()) {
    try {
      const post = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userEmail),
        }
      );

      if (post.status === 409) {
        inputEmail.classList.add("error-input");
        emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
        emailErrorMessage.style.display = "INLINE";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function checkPasswordError() {
  const value = inputPassword.value;
  if (!CHECK_PASSWORD.test(value)) {
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordErrorMessage.style.display = "INLINE";
    inputPassword.classList.add("error-input");
  } else {
    passwordErrorMessage.style.display = "NONE";
    inputPassword.classList.remove("error-input");
    return "pass";
  }
}

function checkPasswordSameError() {
  const value = inputPasswordCheck.value;
  if (inputPassword.value !== value) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
    passwordCheckError.style.display = "INLINE";
    inputPasswordCheck.classList.add("error-input");
  } else {
    passwordCheckError.style.display = "NONE";
    inputPasswordCheck.classList.remove("error-input");
    return "pass";
  }
}

async function checkSignup() {
  if (checkEmailError() && checkPasswordError() && checkPasswordSameError()) {
    const user = {
      email: inputEmail.value,
      password: inputPassword.value,
    };

    try {
      const post = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (post.status === 200) {
        localStorage.setItem("signup", post);
        location.href = "folder.html";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function pressEnterSignup(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkSignup();
  }
}

inputEmail.addEventListener("focusout", checkEmailError);
inputPassword.addEventListener("focusout", checkPasswordError);
inputPassword.addEventListener("focusout", checkPasswordSameError);
inputPasswordCheck.addEventListener("input", checkPasswordSameError);

signupButton.addEventListener("click", checkSignup);
inputSection.addEventListener("keypress", pressEnterSignup);

inputSection.addEventListener("click", showHidePassword);
