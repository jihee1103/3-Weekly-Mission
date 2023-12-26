const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const signinButton = document.querySelector("#signin-button");
const inputError = document.querySelector(".inputbox-error");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");
const passwordOnOff = document.querySelector("#password-show-hide");

if (localStorage.accessToken) {
  location.href = "./folder.html";
}

function addErrorStyle(element) {
  element.classList.add("inputbox-error");
}

function removeErrorStyle(element) {
  element.classList.remove("inputbox-error");
}

function showErrorMessage(element, message) {
  element.textContent = message;
}

function checkEmail() {
  const regEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!inputEmail.value) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "이메일을 입력해주세요");
  } else if (!regEmail.test(inputEmail.value)) {
    addErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
  } else {
    removeErrorStyle(inputEmail);
    showErrorMessage(emailErrorMessage, "");
  }
}

function checkPassword() {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  if (!inputPassword.value) {
    addErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "비밀번호를 입력해주세요.");
  } else if (!regPassword.test(inputPassword.value)) {
    addErrorStyle(inputPassword);
    showErrorMessage(
      passwordErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
    );
  } else {
    removeErrorStyle(inputPassword);
    showErrorMessage(passwordErrorMessage, "");
  }
}

async function signIn() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/docs/api/sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail.value,
        password: inputPassword.value,
      }),
    }
  );

  if (response.status === 200) {
    location.href = "./folder.html";

    const result = await response.json();
    const { accessToken } = result.data;
    localStorage.setItem("accessToken", accessToken);
  } else {
    showErrorMessage(emailErrorMessage, "이메일을 확인해주세요.");
    showErrorMessage(passwordErrorMessage, "비밀번호를 확인해주세요.");
  }
}

function showOrHidePassword(passwordToggleButton, passwordInputField) {
  if (passwordInputField.type == "password") {
    passwordInputField.type = "text";
    passwordToggleButton.src = "./image/eye-on.svg";
  } else if (passwordInputField.type == "text") {
    passwordInputField.type = "password";
    passwordToggleButton.src = "./image/eye-off.svg";
  }
}

passwordOnOff.addEventListener("click", () => {
  showOrHidePassword(passwordOnOff, inputPassword);
});

document.addEventListener("keypress", (event) => {
  if (
    (event.target === inputEmail || event.target === inputPassword) &&
    event.key === "Enter"
  ) {
    signIn();
  }
});

document.addEventListener("focusout", (event) => {
  if (event.target === inputEmail) {
    checkEmail();
  } else if (event.target === inputPassword) {
    checkPassword();
  }
});

signinButton.addEventListener("click", signIn);
