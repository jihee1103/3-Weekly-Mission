const TEST_EMAIL = "test@codeit.com";
const TEST_PWD = "codeit101";

const signinEmail = document.getElementById("signin-email");
const noEmail = document.getElementById("no-email");
const wrongEmail = document.getElementById("wrong-email");

function checkEmailValidation() {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (!signinEmail.value) {
    // 빈칸일 때
    noEmail.style.display = "block";
    noEmail.style.color = "var(--linkbrary-red)";
    wrongEmail.style.display = "none";
    signinEmail.style.borderColor = "var(--linkbrary-red)";
  } else if (!emailRegex.test(signinEmail.value)) {
    // 이메일 형식 오류일 때
    noEmail.style.display = "none";
    wrongEmail.style.display = "block";
    signinEmail.style.borderColor = "var(--linkbrary-red)";
  } else {
    noEmail.style.display = "none";
    wrongEmail.style.display = "none";
    signinEmail.style.borderColor = "var(--linkbrary-gray-20)";
  }
}

signinEmail.addEventListener("focusout", checkEmailValidation);

const signinPassword = document.getElementById("signin-password");
const noPassword = document.getElementById("no-password");

function checkPasswordValidation() {
  if (!signinPassword.value) {
    // 빈칸일 때
    noPassword.style.display = "block";
    signinPassword.style.borderColor = "var(--linkbrary-red)";
  } else {
    noPassword.style.display = "none";
    signinPassword.style.borderColor = "var(--linkbrary-gray-20)";
  }
}
signinPassword.addEventListener("focusout", checkPasswordValidation);

const checkEmail = document.getElementById("check-email");
const checkPassword = document.getElementById("check-password");
const button = document.getElementById("login-btn");

function submit(e) {
  e.preventDefault();
  if (signinEmail.value === TEST_EMAIL && signinPassword.value === TEST_PWD) {
    alert("로그인 성공");
    const link = "folder.html";
    window.location.href = link;
  } else {
    if (signinEmail.value !== TEST_EMAIL) {
      checkEmail.style.display = "block";
      signinEmail.style.borderColor = "var(--linkbrary-red)";
    }
    if (signinPassword.value !== TEST_PWD) {
      checkPassword.style.display = "block";
      signinPassword.style.borderColor = "var(--linkbrary-red)";
    }
  }
}

button.addEventListener("click", submit);

//키보드 엔터로 제출-적용이 안됨..
document.querySelector("#input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    submit();
  }
});
