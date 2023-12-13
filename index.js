const emailInp = document.querySelector("#signup-email");

emailInp.addEventListener("focusout", inpWarning);

function inpWarning(e) {
  const existingWarning = document.querySelector(".warningText");
  if (existingWarning) {
    existingWarning.remove();
  }
  if (!e.target.value) {
    const addSpan = document.createElement("span");
    addSpan.textContent = "이메일을 입력해주세요";
    emailInp.after(addSpan);
    addSpan.classList.add("warningText");
    addSpan.classList.add("styleWarningText");
  }
}

emailInp.addEventListener("focusout", validateEmail);

function validateEmail(e) {
  const emailValue = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const existingError = document.querySelector(".errorText");
  if (existingError) {
    existingError.remove();
  }

  if (!emailRegex.test(emailValue)) {
    const errorSpan = document.createElement("span");
    errorSpan.textContent = "올바른 이메일 주소가 아닙니다.";
    errorSpan.classList.add("errorText");
    errorSpan.classList.add("styleWarningText");
    emailInp.after(errorSpan);
  }
}

function performLogin() {
  if (
    emailInp.value === "test@codeit.com" &&
    passwordInp.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    const existingWarning = document.querySelectorAll(".warningText");
    existingWarning.forEach((existingWarning) => {
      existingWarning.remove();
    });

    const addSpan = document.createElement("span");
    addSpan.textContent = "이메일을 확인해주세요";
    emailInp.after(addSpan);
    addSpan.classList.add("warningText");
    addSpan.classList.add("styleWarningText");
    const addSpan2 = document.createElement("span");
    addSpan2.textContent = "비밀번호를 확인해주세요";
    passwordInp.after(addSpan2);
    addSpan2.classList.add("warningText");
    addSpan2.classList.add("styleWarningText");
  }
}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  performLogin();
});
loginForm.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performLogin();
  }
});

const passwordInp = document.querySelector("#signup-password");
passwordInp.addEventListener("focusout", inpWarning);

function inpWarning(e) {
  const existingWarning = document.querySelector(".warningText");
  if (existingWarning) {
    existingWarning.remove();
  }
  if (!e.target.value) {
    const addSpan = document.createElement("span");
    addSpan.textContent = "비밀번호를 입력해주세요";
    passwordInp.after(addSpan);
    addSpan.classList.add("warningText");
    addSpan.classList.add("styleWarningText");
  }
}

const passwordEye = document.querySelector("#passwordEye");
passwordEye.addEventListener("click", togglePasswordView);

function togglePasswordView() {
  if (passwordInp.type === "password") {
    passwordInp.type = "text";
    passwordEye.src = "source/eye-on.png";
  } else {
    passwordInp.type = "password";
    passwordEye.src = "source/eye-off.png";
  }
}
