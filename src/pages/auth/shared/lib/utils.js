const SIGN_INPUT_ERROR_CLASSNAME = 'error-box';
export const EMAIL_ERROR_MSG_CLASSNAME = 'email-validation-message';
export const PASSWORD_ERROR_MSG_CLASSNAME = 'password-validation-message';
export const PASSWORD_CHECK_ERROR_MSG_CLASSNAME = 'passwordcheck-validation-message';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
export const isVaildEmail = email => EMAIL_REGEX.test(email);
export const isValidPassword = password => PASSWORD_REGEX.test(password);

/**
 * @param {string} errorMsgClassName
 * @param {HTMLDivElement} container
 */
const createErrorMsgElem = (errorMsgClassName, container) => {
  let $errorMsg = document.querySelector(`.${errorMsgClassName}`);
  if (!$errorMsg) {
    $errorMsg = document.createElement('p');
    container.appendChild($errorMsg);
  }
  return $errorMsg;
};

/**
 *
 * @param {HTMLInputElement} $input
 * @param {string} errMsg
 * @param {string} errClassName
 * @param {HTMLDivElement} container
 */
export const setInputError = ($input, errMsg, errClassName, container) => {
  $input.classList.add(SIGN_INPUT_ERROR_CLASSNAME);
  const $errorMsg = createErrorMsgElem(errClassName, container);
  $errorMsg.classList.add(errClassName);
  $errorMsg.textContent = errMsg;
};

/**
 *
 * @param {{$inputelem: HTMLInputElement, $errorMsgBox: HTMLParagraphElement | null}} elements
 */
export const removeInputError = elements => {
  elements.$inputelem.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.$errorMsgBox?.remove();
};
