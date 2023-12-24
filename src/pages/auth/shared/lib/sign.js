import { checkEmailDuplication, siginIn, signUp } from '../api/sign-api.js';
import {
  EMAIL_ERROR_MSG_CLASSNAME,
  PASSWORD_CHECK_ERROR_MSG_CLASSNAME,
  PASSWORD_ERROR_MSG_CLASSNAME,
  removeInputError,
  setInputError,
  isValidEmail,
  isValidPassword,
} from './utils.js';

if (localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== 'undefined') {
  location.href = '/src/pages/folder';
}

const controller = new AbortController();
const signal = controller.signal;
const $form = document.querySelector('form');
/**
 * @type {'signin' | 'signup'}
 */
const formSignMode = $form.dataset.signMode;
const $email = document.querySelector('#email');
const $password = document.querySelector('#password');
const $passwordCheck = document.querySelector('#password-check');
const $emailBox = document.querySelector('.input-box-wrapper:has(#email)');
const $passwordBox = document.querySelector('.input-box-wrapper:has(#password)');
const $passwordCheckBox = document.querySelector('.input-box-wrapper:has(#password-check)');
const $passwordShowBtn = document.querySelector('.password-input-box .password-eye-controller');
const $passwordCheckShowBtn = document.querySelector('.passwordcheck-input-box .password-eye-controller');

const mockUserList = [
  {
    id: 'test@codeit.com',
    // ps: 'codeit101',
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

$email.addEventListener(
  'input',
  e => validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, e, formSignMode),
  {
    signal,
  },
);
$email.addEventListener(
  'focusout',
  e => validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, e, formSignMode),
  {
    signal,
  },
);

/**
 *
 * @param {HTMLInputElement} $password
 * @param {HTMLDivElement} $passwordBox
 * @param {typeof PASSWORD_ERROR_MSG_CLASSNAME} passwordErrorClassName
 * @param {typeof formSignMode} formSignMode
 * @param {HTMLInputElement} $email
 * @returns
 */
const validatePasswordInput = ($password, $passwordBox, passwordErrorClassName, formSignMode, $email) => {
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
  if (formSignMode === 'signin' && mockUserList.some(user => user.id === $email.value && user.ps !== $password.value)) {
    setInputError($password, '비밀번호가 일치하지 않아요.', passwordErrorClassName, $passwordBox);
    return false;
  }
  removeInputError({ $inputelem: $password, $errorMsgBox: document.querySelector(`.${passwordErrorClassName}`) });
  return true;
};

$password.addEventListener(
  'input',
  () => validatePasswordInput($password, $passwordBox, PASSWORD_ERROR_MSG_CLASSNAME, formSignMode, $email),
  {
    signal,
  },
);
$password.addEventListener(
  'focusout',
  () => validatePasswordInput($password, $passwordBox, PASSWORD_ERROR_MSG_CLASSNAME, formSignMode, $email),
  {
    signal,
  },
);

/**
 *
 * @param {HTMLInputElement} $passwordCheck
 * @param {HTMLInputElement} $password
 * @param {HTMLDivElement} $passwordCheckBox
 * @param {typeof PASSWORD_CHECK_ERROR_MSG_CLASSNAME} passwordCheckErrorClassName
 * @returns
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

if (formSignMode === 'signup') {
  $passwordCheck.addEventListener(
    'input',
    () => validatePasswordCheckInput($passwordCheck, $password, $passwordCheckBox, PASSWORD_CHECK_ERROR_MSG_CLASSNAME),
    { signal },
  );

  $passwordCheck.addEventListener(
    'focusout',
    () => validatePasswordCheckInput($passwordCheck, $password, $passwordCheckBox, PASSWORD_CHECK_ERROR_MSG_CLASSNAME),
    { signal },
  );
}

/**
 *
 * @param {SubmitEvent} e
 * @returns
 */
const onSubmitHandler = async e => {
  e.preventDefault();
  const emailValResult = !(await validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, e, formSignMode));
  const pwValResult = !validatePasswordInput(
    $password,
    $passwordBox,
    PASSWORD_ERROR_MSG_CLASSNAME,
    formSignMode,
    $email,
  );
  const pwcheckValResult =
    formSignMode === 'signup' &&
    !validatePasswordCheckInput($passwordCheck, $password, $passwordCheckBox, PASSWORD_CHECK_ERROR_MSG_CLASSNAME);
  if (emailValResult || pwValResult || pwcheckValResult) {
    return;
  }
  let res;
  switch (formSignMode) {
    case 'signup':
      res = await signUp({ email: $email.value, password: $password.value });
      break;
    case 'signin':
      res = await siginIn({ email: $email.value, password: $password.value });
      break;
    default:
      break;
  }
  if (res.ok) {
    const data = await res.json();
    const accessToken = await data.data.accessToken;
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    location.href = '/src/pages/folder';
    controller.abort();
  }
};
$form.addEventListener('submit', e => onSubmitHandler(e), { signal });

/**
 *
 * @param {HTMLInputElement} $passwordInput
 * @returns
 */
function togglePasswordShow($passwordInput) {
  let isShow = false;
  return function (e) {
    // console.log(e.target); // img
    $passwordInput.setAttribute('type', isShow ? 'password' : 'text');
    e.target.setAttribute(
      'src',
      isShow ? '/public/images/icons/password-eye-off.svg' : '/public/images/icons/password-eye-on.svg',
    );
    isShow = !isShow;
  };
}

$passwordShowBtn.addEventListener('click', togglePasswordShow($password), { signal });
if (formSignMode === 'signup') {
  $passwordCheckShowBtn.addEventListener('click', togglePasswordShow($passwordCheck), { signal });
}
