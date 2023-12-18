const signinBox = document.querySelector(".signin-box");
const signinBtn = document.querySelector(".signin-btn");

// 이 메시지 태그 부분은 로직 다듬으면 좀 더 깔끔하게 정리 가능할듯
const emptyEmail = document.querySelector(".email-empty");
const wrongEmail = document.querySelector(".email-wrong");
const emptyPassword = document.querySelector(".password-empty");
const notValidEmail = document.querySelector(".not-valid-email");
const notValidPassword = document.querySelector(".not-valid-password");

const emailInput = document.querySelector(".sign-input-email");
const passwordInput = document.querySelector(".sign-input-password");

const TEST_EMAIL = "test@codeit.com";
const TEST_PW = "codeit101";

function inputCheck(e) {
  const type = e.target.type;
  const value = e.target.value;
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (type == "email") {
    if (Number(value) == 0) {
      emptyEmail.classList.remove("hidden");
      emailInput.classList.add("error");
    } else if (!regex.test(value)) {
      wrongEmail.classList.remove("hidden");
      emailInput.classList.add("error");
    }
  } else if (type == "password") {
    if (Number(value) == 0) {
      emptyPassword.classList.remove("hidden");
      passwordInput.classList.add("error");
    }
  }
}

function reset(e) {
  const type = e.target.type;

  if (type == "email") {
    emptyEmail.classList.add("hidden");
    wrongEmail.classList.add("hidden");
    notValidEmail.classList.add("hidden");

    emailInput.classList.remove("error");
  } else if (type == "password") {
    emptyPassword.classList.add("hidden");
    notValidPassword.classList.add("hidden");

    passwordInput.classList.remove("error");
  }
}

function validation() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email == TEST_EMAIL && password == TEST_PW) {
    window.location.href = "/forder.html";
  } else {
    notValidEmail.classList.remove("hidden");
    notValidPassword.classList.remove("hidden");
    emailInput.classList.add("error");
    passwordInput.classList.add("error");
  }
}

function validationByEnter(e) {
  if (e.key === "Enter") {
    console.log("동작은함");
    validation();
  }
}

signinBox.addEventListener("focusin", reset);
signinBox.addEventListener("focusout", inputCheck);
signinBox.addEventListener("keydown", validationByEnter);
signinBtn.addEventListener("click", validation);
