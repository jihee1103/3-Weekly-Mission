import {
  emailInputElement,
  passwdInputElement,
  emailErrorMentionElement,
  checkEmailValidity,
  checkPasswdValidity,
  loginElement,
  formElement,
  users,
  setErrorMentionElement,
} from "./signcommon.js";

const passwdCheckInputElement = document.querySelector("#passwd-check");
const passwdCheckErrorMentionElement = document.createElement("div");

// 에러 메시지 요소 추가
passwdCheckErrorMentionElement.classList.add("error-mention");
passwdCheckInputElement.parentElement.append(passwdCheckErrorMentionElement);

// password 두개 같은지 검사 후 같다면 true return
function checkPasswdIsEqual() {
  if (passwdInputElement.value !== passwdCheckInputElement.value) {
    setErrorMentionElement(
      true,
      passwdCheckInputElement,
      passwdCheckErrorMentionElement,
      "비밀번호가 일치하지 않아요."
    );
  } else {
    setErrorMentionElement(
      false,
      passwdCheckInputElement,
      passwdCheckErrorMentionElement
    );
    return true;
  }
}

// password input 이벤트 추가
passwdCheckInputElement.addEventListener("blur", checkPasswdIsEqual);

// 이미 계정이 존재하는지 검사후 존재하지 않는다면 email 검사 후 return
function checkEmail() {
  if (emailInputElement.value === users.email) {
    setErrorMentionElement(
      true,
      emailInputElement,
      emailErrorMentionElement,
      "이미 사용중인 이메일입니다."
    );
  } else return checkEmailValidity();
}

// email input 이벤트 추가
emailInputElement.addEventListener("blur", checkEmail);

// 계정 존재 유무, input 유효성 검사, password 값은지 검사 후 모두 true라면 사이트 연결
function signup() {
  const emailDuplicationOk = checkEmail();
  const passwdInputOk = checkPasswdValidity();
  const equalOk = checkPasswdIsEqual();
  if (equalOk && passwdInputOk && emailDuplicationOk) location.href = "/folder";
}

// 클릭 및 엔터시 signup
loginElement.addEventListener("click", signup);
formElement.addEventListener("keypress", ({ key }) =>
  key === "Enter" ? signup(key) : ""
);
