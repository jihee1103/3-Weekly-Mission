const INPUT_ERROR_STYLE = "sign-input-error";
const INPUT_ERROR_MSG_STYLE = "sign-input-errMsg";

// 스타일 바꾸는 클래스 추가하는 함수
export function addStyles(signInput, errMsgObj, errMsgText) {
  signInput.classList.add(INPUT_ERROR_STYLE);
  errMsgObj.classList.add(INPUT_ERROR_MSG_STYLE);
  errMsgObj.classList.remove("hide");
  errMsgObj.textContent = errMsgText;
}

// 스타일 바꾸는 클래스 제거하는 함수
export function deleteStyles(signInput, errMsgObj) {
  signInput.classList.remove("sign-input-error");
  errMsgObj.classList.remove("sign-input-errMsg");
  errMsgObj.classList.add("hide");
}
