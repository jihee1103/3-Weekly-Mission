const passwdCheckInputElement = document.querySelector("#passwd-check");
const passwdCheckErrorMentionElement = document.createElement("div");

// 에러 메시지 요소 추가
passwdCheckErrorMentionElement.classList.add("error-mention");
passwdCheckInputElement.parentElement.append(passwdCheckErrorMentionElement);

// password 두개 같은지 검사 후 같다면 true return
function checkPasswdEqual() {
  if (passwdInputElement.value !== passwdCheckInputElement.value) {
    passwdCheckErrorMentionElement.innerText = "비밀번호가 일치하지 않아요.";
    passwdCheckErrorMentionElement.style.display = "block";
    passwdCheckInputElement.classList.add("error-border");
  } else {
    passwdCheckErrorMentionElement.style.display = "none";
    passwdCheckInputElement.classList.remove("error-border");
    return true;
  }
}

// password input 이벤트 추가
passwdCheckInputElement.addEventListener("blur", checkPasswdEqual);

// 이미 계정이 존재하는지 검사후 존재하지 않는다면 email 검사 후 return
function checkEmail() {
  if (emailInputElement.value === users.email) {
    emailInputElement.classList.add("error-border");
    emailErrorMentionElement.innerText = "이미 사용중인 이메일입니다.";
    emailErrorMentionElement.style.display = "block";
  } else return emailInputValid();
}

// email input 이벤트 추가
emailInputElement.addEventListener("blur", checkEmail);

// 계정 존재 유무, input 유효성 검사, password 값은지 검사 후 모두 true라면 사이트 연결
function signup(e) {
  const emailDuplicationOk = checkEmail();
  const passwdInputOk = passwdInputValid(e);
  const equalOk = checkPasswdEqual();
  if (equalOk && passwdInputOk && emailDuplicationOk) location.href = "/folder";
}

// 클릭 및 엔터시 signup
loginElement.addEventListener("click", signup);
addEventListener("keypress", ({ key }) => (key === "Enter" ? signup(key) : ""));
