const SIGN_INPUT_ERROR_CLASSNAME = 'error-box';
export const EMAIL_ERROR_MSG_CLASSNAME = 'email-validation-message';
export const PASSWORD_ERROR_MSG_CLASSNAME = 'password-validation-message';
export const PASSWORD_CHECK_ERROR_MSG_CLASSNAME = 'passwordcheck-validation-message';

export const isValidEmail = fn => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return fn(EMAIL_REGEX);
};
export const isValidPassword = fn => {
  const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  return fn(PASSWORD_REGEX);
};

/**
 * @param {string} errorMsgClassName
 * @param {HTMLDivElement} container
 */
const createErrorMsgTagNode = (errorMsgClassName, container) => {
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
  const $errorMsg = createErrorMsgTagNode(errClassName, container);
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
