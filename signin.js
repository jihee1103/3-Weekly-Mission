const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".login-btn");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

const testEmail = "test@codeit.com";
const testPassword = "codeit101";

function validateEmail() {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (email.value === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    email.classList.add("input-error");
  } else if (!email_regex.test(email.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.classList.add("input-error");
  } else {
    emailError.textContent = "";
    email.className = "sign-input";
  }
}

function validatePassword() {
  const password_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (password.value === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    password.classList.add("input-error");
  } else if (!password_regex.test(password.value)) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.";
    password.classList.add("input-error");
  } else {
    passwordError.textContent = "";
    password.classList = "sign-input";
  }
}

function signIn() {
  if (email.value === testEmail && password.value === testPassword) {
    window.location.href = "/folder";
  } else {
    if (email.value !== testEmail) {
      emailError.textContent = "이메일을 확인해주세요.";
    }
    if (password.value !== testPassword) {
      passwordError.textContent = "비밀번호를 확인해주세요.";
    }
  }
}

email.addEventListener("focusout", validateEmail);
password.addEventListener("focusout", validatePassword);
loginBtn.addEventListener("click", signIn);
