const emailInputElement = document.querySelector("#email-input");
const passwdInputElement = document.querySelector("#passwd-input");
const loginElement = document.querySelector(".login");

// 유효성 검사
const EMAILPATTERN = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWDPATTERN = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

// 에러 메시지 요소 추가
const emailErrorMentionElement = document.createElement("div");
const passwdErrorMentionElement = document.createElement("div");

emailErrorMentionElement.classList.add("error-mention");
passwdErrorMentionElement.classList.add("error-mention");
emailInputElement.parentElement.append(emailErrorMentionElement);
passwdInputElement.parentElement.append(passwdErrorMentionElement);

// 저장된 유저 정보
const users = { email: "test@codeit.com", passwd: "codeit101" };

// email input값 검사
function emailInputValid() {
  if (emailInputElement.value.trim() === "") {
    emailInputElement.classList.add("error-border");
    emailErrorMentionElement.innerText = "이메일을 입력해주세요";
    emailErrorMentionElement.style.display = "block";
  } else if (!EMAILPATTERN.test(emailInputElement.value)) {
    emailInputElement.classList.add("error-border");
    emailErrorMentionElement.innerText = "올바른 이메일 주소가 아닙니다.";
    emailErrorMentionElement.style.display = "block";
  } else {
    emailInputElement.classList.remove("error-border");
    emailErrorMentionElement.style.display = "none";
    return true;
  }
}

// password input값 검사
function passwdInputValid() {
  if (passwdInputElement.value === "") {
    passwdInputElement.classList.add("error-border");
    passwdErrorMentionElement.innerText = "비밀번호를 입력해주세요.";
    passwdErrorMentionElement.style.display = "block";
  } else if (!PASSWDPATTERN.test(passwdInputElement.value)) {
    passwdInputElement.classList.add("error-border");
    passwdErrorMentionElement.innerText =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwdErrorMentionElement.style.display = "block";
  } else {
    passwdInputElement.classList.remove("error-border");
    passwdErrorMentionElement.style.display = "none";
    return true;
  }
}

// email, password input창 유효성 검사 이벤트 추가
emailInputElement.addEventListener("blur", emailInputValid);
passwdInputElement.addEventListener("blur", passwdInputValid);

// eye-image toggle
const eyeOffElements = document.querySelectorAll(".eye-off");

function passwdVisible({ target }) {
  const targetInput = target.previousElementSibling;
  if (targetInput.type === "password") {
    targetInput.type = "text";
    target.src = "../images/eye-on.svg";
  } else {
    targetInput.type = "password";
    target.src = "../images/eye-off.svg";
  }
}

eyeOffElements.forEach((el) => el.addEventListener("click", passwdVisible));