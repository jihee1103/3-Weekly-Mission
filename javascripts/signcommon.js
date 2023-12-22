const emailInputElement = document.querySelector("#email-input");
const passwdInputElement = document.querySelector("#passwd-input");
const formElement = document.querySelector(".email-passwd-wrapper");
const loginElement = document.querySelector(".login");

// 유효성 검사
const EMAILPATTERN = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWDPATTERN = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

// 에러 메시지 요소 추가
const emailErrorMentionElement = document.createElement("div");
const passwdErrorMentionElement = document.createElement("div");

function setErrorMentionElement(
  visibility,
  inputType,
  errorType,
  errorMention
) {
  if (visibility) {
    inputType.classList.add("error-border");
    errorType.innerText = errorMention;
    errorType.style.display = "block";
  } else {
    inputType.classList.remove("error-border");
    errorType.style.display = "none";
  }
}

emailErrorMentionElement.classList.add("error-mention");
passwdErrorMentionElement.classList.add("error-mention");
emailInputElement.parentElement.append(emailErrorMentionElement);
passwdInputElement.parentElement.append(passwdErrorMentionElement);

// 저장된 유저 정보
const users = {
  email: "test@codeit.com",
  password: "codeit101",
};

// email input값 검사
function checkEmailValidity() {
  if (emailInputElement.value.trim() === "") {
    setErrorMentionElement(
      true,
      emailInputElement,
      emailErrorMentionElement,
      "이메일을 입력해주세요."
    );
  } else if (!EMAILPATTERN.test(emailInputElement.value)) {
    setErrorMentionElement(
      true,
      emailInputElement,
      emailErrorMentionElement,
      "올바른 이메일 주소가 아닙니다."
    );
  } else {
    setErrorMentionElement(false, emailInputElement, emailErrorMentionElement);
    return true;
  }
}

// password input값 검사
function checkPasswdValidity() {
  if (passwdInputElement.value === "") {
    setErrorMentionElement(
      true,
      passwdInputElement,
      passwdErrorMentionElement,
      "비밀번호를 입력해주세요."
    );
  } else if (!PASSWDPATTERN.test(passwdInputElement.value)) {
    setErrorMentionElement(
      true,
      passwdInputElement,
      passwdErrorMentionElement,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  } else {
    setErrorMentionElement(
      false,
      passwdInputElement,
      passwdErrorMentionElement
    );
    return true;
  }
}

// email, password input창 유효성 검사 이벤트 추가
emailInputElement.addEventListener("blur", checkEmailValidity);
passwdInputElement.addEventListener("blur", checkPasswdValidity);

// eye-image toggle
const eyeOffElements = document.querySelectorAll(".eye-off");

function changePasswdVisiblity({ target }) {
  const targetInput = target.previousElementSibling;
  if (targetInput.type === "password") {
    targetInput.type = "text";
    target.src = "../images/eye-on.svg";
  } else {
    targetInput.type = "password";
    target.src = "../images/eye-off.svg";
  }
}

eyeOffElements.forEach((el) =>
  el.addEventListener("click", changePasswdVisiblity)
);

export {
  loginElement,
  emailInputElement,
  passwdInputElement,
  users,
  emailErrorMentionElement,
  passwdErrorMentionElement,
  formElement,
  checkEmailValidity,
  checkPasswdValidity,
  setErrorMentionElement,
};
