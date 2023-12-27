import { signIn, signUp } from '../api/sign-api.js';
import {
  EMAIL_ERROR_MSG_CLASSNAME,
  PASSWORD_CHECK_ERROR_MSG_CLASSNAME,
  PASSWORD_ERROR_MSG_CLASSNAME,
  setInputError,
} from './utils.js';
import { validateEmailInput, validatePasswordCheckInput, validatePasswordInput } from './validation.js';

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
const $emailBox = document.querySelector('.input-box-wrapper:has(#email)');
const $password = document.querySelector('#password');
const $passwordBox = document.querySelector('.input-box-wrapper:has(#password)');
const $passwordCheck = document.querySelector('#password-check');
const $passwordCheckBox = document.querySelector('.input-box-wrapper:has(#password-check)');
const $passwordShowBtn = document.querySelector('.password-input-box .password-eye-controller');
const $passwordCheckShowBtn = document.querySelector('.passwordcheck-input-box .password-eye-controller');

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

$password.addEventListener(
  'input',
  () => validatePasswordInput($password, $passwordBox, PASSWORD_ERROR_MSG_CLASSNAME),
  {
    signal,
  },
);
$password.addEventListener(
  'focusout',
  () => validatePasswordInput($password, $passwordBox, PASSWORD_ERROR_MSG_CLASSNAME),
  {
    signal,
  },
);

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
 */
const getValidationResultsOnSubmit = async e => {
  const pwValResult = !validatePasswordInput($password, $passwordBox, PASSWORD_ERROR_MSG_CLASSNAME);
  const pwcheckValResult =
    formSignMode === 'signup' &&
    !validatePasswordCheckInput($passwordCheck, $password, $passwordCheckBox, PASSWORD_CHECK_ERROR_MSG_CLASSNAME);
  const emailValResult = !(await validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, e, formSignMode));
  return [emailValResult, pwValResult, pwcheckValResult];
};

/**
 *
 * @param {typeof formSignMode} formSignMode
 * @param {HTMLInputElement} $email
 * @param {HTMLInputElement} $password
 */
const getResponseOnSubmit = async (formSignMode, $email, $password) => {
  let res;
  switch (formSignMode) {
    case 'signup':
      res = await signUp({ email: $email.value, password: $password.value });
      break;
    case 'signin':
      res = await signIn({ email: $email.value, password: $password.value });
      break;
    default:
      break;
  }
  return res;
};

/**
 *
 * @param {HTMLFormElement} $form
 */
const resetInputs = $form => {
  $form.querySelectorAll('input').forEach($input => {
    $input.value = '';
  });
};

/**
 *
 * @param {SubmitEvent} e
 * @returns
 */
const onSubmitHandler = async e => {
  e.preventDefault();
  const [isInvalidEmail, isInvalidPassword, isInvalidPasswordCheck] = await getValidationResultsOnSubmit(e);
  if (isInvalidEmail || isInvalidPassword || isInvalidPasswordCheck) {
    return;
  }
  const res = await getResponseOnSubmit(formSignMode, $email, $password);
  if (res.ok) {
    const data = await res.json();
    const accessToken = await data.data.accessToken;
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    resetInputs($form);
    location.href = '/src/pages/folder';
    controller.abort();
  } else {
    // 이메일 일치할 때 비밀번호 일치 여부 확인하려면 직접 signIn api 사용해봐야 알 수 있음.
    // 어떤 이유로 실패했는지는 response에 담겨있지 않음.
    if (res.status === 400 && formSignMode === 'signin') {
      setInputError($password, '비밀번호가 일치하지 않아요.', PASSWORD_ERROR_MSG_CLASSNAME, $passwordBox);
    }
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
