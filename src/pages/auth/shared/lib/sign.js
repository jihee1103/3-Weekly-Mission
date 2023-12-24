import {
  EMAIL_ERROR_MSG_CLASSNAME,
  PASSWORD_CHECK_ERROR_MSG_CLASSNAME,
  PASSWORD_ERROR_MSG_CLASSNAME,
  removeInputError,
  setInputError,
  isVaildEmail,
  isValidPassword,
} from './utils.js';

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
    ps: 'codeit101',
  },
];

/**
 *
 * @param {HTMLInputElement} $email
 * @param {HTMLDivElement} $emailBox
 * @param {typeof EMAIL_ERROR_MSG_CLASSNAME} emailErrorClassName
 * @param {typeof mockUserList} mockUserList
 * @param {typeof formSignMode} formSignMode
 * @returns { boolean }
 */
const validateEmailInput = ($email, $emailBox, emailErrorClassName, mockUserList, formSignMode) => {
  if ($email.value === '') {
    setInputError($email, '이메일을 입력해주세요.', emailErrorClassName, $emailBox);
    return false;
  }
  if (!isVaildEmail($email.value)) {
    setInputError($email, '올바른 이메일 주소가 아닙니다.', emailErrorClassName, $emailBox);
    return false;
  }
  if (formSignMode === 'signin' && mockUserList.some(user => user.id !== $email.value)) {
    setInputError($email, '존재하지 않는 이메일입니다.', emailErrorClassName, $emailBox);
    return false;
  }
  if (formSignMode === 'signup' && mockUserList.some(user => user.id === $email.value)) {
    setInputError($email, '이미 사용 중인 이메일입니다.', emailErrorClassName, $emailBox);
    return false;
  }
  removeInputError({ $inputelem: $email, $errorMsgBox: document.querySelector(`.${emailErrorClassName}`) });
  return true;
};

$email.addEventListener(
  'input',
  () => validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, mockUserList, formSignMode),
  {
    signal,
  },
);
$email.addEventListener(
  'focusout',
  () => validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, mockUserList, formSignMode),
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
  if (!isValidPassword($password.value)) {
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
  if (!isValidPassword($passwordCheck.value)) {
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

const onSubmitHandler = e => {
  e.preventDefault();
  if (
    !validateEmailInput($email, $emailBox, EMAIL_ERROR_MSG_CLASSNAME, mockUserList, formSignMode) ||
    !validatePasswordInput($password, $passwordBox, PASSWORD_ERROR_MSG_CLASSNAME, formSignMode, $email) ||
    (formSignMode === 'signup' &&
      !validatePasswordCheckInput($passwordCheck, $password, $passwordCheckBox, PASSWORD_CHECK_ERROR_MSG_CLASSNAME))
  ) {
    return;
  }
  location.href = '/src/pages/folder';
  controller.abort();
};
$form.addEventListener('submit', onSubmitHandler, { signal });

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
