const signupEmail = document.getElementById("signup-email");
const noEmail = document.getElementById("no-email");
const wrongEmail = document.getElementById("wrong-email");

function checkEmailValidation() {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (!signupEmail.value) {
    // 빈칸일 때
    noEmail.style.display = "block";
    noEmail.style.color = "var(--linkbrary-red)";
    wrongEmail.style.display = "none";
    signupEmail.style.borderColor = "var(--linkbrary-red)";
  } else if (!emailRegex.test(signupEmail.value)) {
    // 이메일 형식 오류일 때
    noEmail.style.display = "none";
    wrongEmail.style.display = "block";
    signupEmail.style.borderColor = "var(--linkbrary-red)";
  } else {
    noEmail.style.display = "none";
    wrongEmail.style.display = "none";
    signupEmail.style.borderColor = "var(--linkbrary-gray-20)";
  }
}

signupEmail.addEventListener("focusout", checkEmailValidation);

const signupPassword = document.getElementById("signup-password");
const signupRepassword = document.getElementById("signup-repassword");
const noPassword = document.getElementById("no-password");
const noRepassword = document.getElementById("no-repassword");

function checkPasswordValidation() {
  if (!signupPassword.value) {
    // 빈칸일 때
    noPassword.style.display = "block";
    signupPassword.style.borderColor = "var(--linkbrary-red)";
  } else {
    noPassword.style.display = "none";
    signupPassword.style.borderColor = "var(--linkbrary-gray-20)";
  }
}
signupPassword.addEventListener("focusout", checkPasswordValidation);

function checkRePasswordValidation() {
  if (!signupRepassword.value) {
    // 빈칸일 때
    noRepassword.style.display = "block";
    signupRepassword.style.borderColor = "var(--linkbrary-red)";
  } else {
    noRepassword.style.display = "none";
    signupRepassword.style.borderColor = "var(--linkbrary-gray-20)";
  }
}
signupRepassword.addEventListener("focusout", checkRePasswordValidation);

//같은 비밀번호인지 체크
