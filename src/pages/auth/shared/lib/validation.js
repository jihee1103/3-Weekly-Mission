import { checkEmailDuplication } from '../api/sign-api.js';
import { isValidEmail, isValidPassword, removeInputError, setInputError } from './utils.js';

const mockUserList = [
  {
    id: 'test@codeit.com',
    ps: 'sprint101',
  },
];

/**
 *
 * @param {HTMLInputElement} $email
 * @param {HTMLDivElement} $emailBox
 * @param {typeof EMAIL_ERROR_MSG_CLASSNAME} emailErrorClassName
 * @param {Event} event
 * @param {typeof formSignMode} formSignMode
 */
const validateEmailInput = async ($email, $emailBox, emailErrorClassName, event, formSignMode) => {
  if ($email.value === '') {
    setInputError($email, '이메일을 입력해주세요.', emailErrorClassName, $emailBox);
    return false;
  }
  if (!isValidEmail(reg => reg.test($email.value))) {
    setInputError($email, '올바른 이메일 주소가 아닙니다.', emailErrorClassName, $emailBox);
    return false;
  }
  if (formSignMode === 'signup' && (event.type === 'focusout' || event.type === 'submit')) {
    const res = await checkEmailDuplication($email.value);
    if (res.status === 409) {
      setInputError($email, '이미 사용 중인 이메일입니다.', emailErrorClassName, $emailBox);
      return false;
    }
  }
  if (formSignMode === 'signin' && event.type === 'submit') {
    const res = await checkEmailDuplication($email.value);
    if (res.status !== 409) {
      setInputError($email, '존재하지 않는 이메일입니다.', emailErrorClassName, $emailBox);
      return false;
    }
  }
  removeInputError({ $inputelem: $email, $errorMsgBox: document.querySelector(`.${emailErrorClassName}`) });
  return true;
};

/**
 *
 * @param {HTMLInputElement} $password
 * @param {HTMLDivElement} $passwordBox
 * @param {typeof PASSWORD_ERROR_MSG_CLASSNAME} passwordErrorClassName
 */
const validatePasswordInput = ($password, $passwordBox, passwordErrorClassName) => {
  if ($password.value === '') {
    setInputError($password, '비밀번호를 입력해주세요.', passwordErrorClassName, $passwordBox);
    return false;
  }
  if (!isValidPassword(reg => reg.test($password.value))) {
    setInputError(
      $password,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
      passwordErrorClassName,
      $passwordBox,
    );
    return false;
  }
  removeInputError({ $inputelem: $password, $errorMsgBox: document.querySelector(`.${passwordErrorClassName}`) });
  return true;
};

/**
 *
 * @param {HTMLInputElement} $passwordCheck
 * @param {HTMLInputElement} $password
 * @param {HTMLDivElement} $passwordCheckBox
 * @param {typeof PASSWORD_CHECK_ERROR_MSG_CLASSNAME} passwordCheckErrorClassName
 */
const validatePasswordCheckInput = ($passwordCheck, $password, $passwordCheckBox, passwordCheckErrorClassName) => {
  if ($passwordCheck.value === '') {
    setInputError($passwordCheck, '비밀번호를 입력해주세요.', passwordCheckErrorClassName, $passwordCheckBox);
    return false;
  }
  if (!isValidPassword(reg => reg.test($passwordCheck.value))) {
    setInputError(
      $passwordCheck,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
      passwordCheckErrorClassName,
      $passwordCheckBox,
    );
    return false;
  }
  if ($passwordCheck.value !== $password.value) {
    setInputError($passwordCheck, '비밀번호가 일치하지 않아요.', passwordCheckErrorClassName, $passwordCheckBox);
    return false;
  }
  removeInputError({
    $inputelem: $passwordCheck,
    $errorMsgBox: document.querySelector(`.${passwordCheckErrorClassName}`),
  });
  return true;
};

export { validateEmailInput, validatePasswordInput, validatePasswordCheckInput };
