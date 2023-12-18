const TEST_EMAIL = "test@codeit.com";
const TEST_PWD = "codeit101";

const signinEmail = document.getElementById("signin-email");
const errEmail = document.getElementById("err-email");

signinEmail.addEventListener("focusout", function () {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (!signinEmail.value) {
    // 빈칸일 때
    errEmail.style.display = "block";
    errEmail.innerText = "이메일을 입력해주세요.";
    signinEmail.style.borderColor = "var(--linkbrary-red)";
  } else if (!emailRegex.test(signinEmail.value)) {
    // 이메일 형식 오류일 때
    errEmail.style.display = "block";
    errEmail.innerText = "올바른 이메일 주소가 아닙니다.";
    signinEmail.style.borderColor = "var(--linkbrary-red)";
  } else {
    errEmail.style.display = "none";
    signinEmail.style.borderColor = "var(--linkbrary-gray-20)";
  }
});

const signinPassword = document.getElementById("signin-password");
const errPassword = document.getElementById("err-password");

signinPassword.addEventListener("focusout", function () {
  if (!signinPassword.value) {
    // 빈칸일 때
    errPassword.style.display = "block";
    errPassword.innerText = "비밀번호를 입력해주세요.";
    signinPassword.style.borderColor = "var(--linkbrary-red)";
  } else {
    errPassword.style.display = "none";
    signinPassword.style.borderColor = "var(--linkbrary-gray-20)";
  }
});

function submit() {
  // e.preventDefault();
  if (signinEmail.value === TEST_EMAIL && signinPassword.value === TEST_PWD) {
    alert("로그인 성공");
    const link = "folder.html";
    window.location.href = link;
  } else {
    if (signinEmail.value !== TEST_EMAIL) {
      errEmail.style.display = "block";
      errEmail.innerText = "이메일을 확인해주세요.";
      signinEmail.style.borderColor = "var(--linkbrary-red)";
    }
    if (signinPassword.value !== TEST_PWD) {
      errPassword.style.display = "block";
      errPassword.innerText = "비밀번호를 확인해주세요.";
      signinPassword.style.borderColor = "var(--linkbrary-red)";
    }
  }
}

const button = document.getElementById("signin-btn");
button.addEventListener("click", submit);

//키보드 엔터로 제출
document
  .getElementById("signin-form")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submit();
    }
  });
