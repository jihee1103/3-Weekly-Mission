const controller = new AbortController();
const signal = controller.signal;
const $form = document.signForm;
const mockUserList = [
  {
    id: 'test@codeit.com',
    ps: 'codeit101',
  },
];

function formRegexTest(inputId) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  switch (inputId) {
    case 'email':
      return emailRegex.test($form.userId.value);
    case 'password':
      return passwordRegex.test($form.userPassword.value);
    case 'password-check':
      return $form.userPassword.value === $form.userPasswordCheck.value;
    default:
      return false;
  }
}

function getErrorMessage(event, eventTarget) {
  let et = event.target;
  if (eventTarget) et = eventTarget;
  let errmsg = '';
  if (event.type === 'focusout' || event.type === 'input' || event.type === 'submit') {
    if (!et.value) {
      switch (et.id) {
        case 'email':
          return '이메일을 입력해주세요.';
        case 'password':
          return '비밀번호를 입력해주세요.';
        case 'password-check':
          return '비밀번호를 입력해주세요.';
        default:
          break;
      }
    }

    // case1: signup 모드에서 이메일이 이미 존재하는 경우
    // case2: siginin 모드에서 이메일과 비밀번호 형식만 맞고 존재하지 않는 경우
    // case3: signin 모드에서 이메일이 맞는데 비밀번호가 틀린 경우
    // todo: 나중에 event.type === 'submit' 일 때만 적용되도록 수정 아마도?
    switch (et.id) {
      case 'email':
        if (et.dataset.signMode === 'signup' && mockUserList.some(user => user.id === et.value)) {
          errmsg = '이미 사용 중인 이메일입니다.';
        }
        if (et.dataset.signMode === 'signin' && !mockUserList.some(user => user.id === et.value)) {
          errmsg = '존재하지 않는 이메일입니다.';
        }
        if (!formRegexTest('email')) {
          errmsg = '올바른 이메일 주소가 아닙니다.';
        }
        return errmsg;
      case 'password':
        if (
          et.dataset.signMode === 'signin' &&
          mockUserList.some(user => user.id === $form.userId.value && user.ps !== et.value)
        ) {
          errmsg = '비밀번호가 일치하지 않아요.';
        }
        if (!formRegexTest('password')) {
          errmsg = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        }
        return errmsg;
      case 'password-check':
        if (!formRegexTest('password-check')) {
          return (errmsg = '비밀번호가 일치하지 않아요.');
        }
        break;
      default:
        break;
    }
  }
}

function formValidation(event, eventTarget) {
  let et = event.target;
  if (eventTarget) {
    et = eventTarget;
  }

  // ! 그냥 쿼리 셀렉터 하면 안 됨. 에러가 여러 개 떠 있을 수 있으니까.
  let $error = et.parentElement.parentElement.querySelector('.form-validation-message');
  if (getErrorMessage(event, eventTarget)) {
    if (!$error) {
      $error = document.createElement('span');
      $error.className = 'form-validation-message';
      et.parentElement.after($error);
    }
    et.classList.add('error-box');
    $error.textContent = getErrorMessage(event, eventTarget);
    return false;
  } else {
    et.classList.remove('error-box');
    $error?.remove();
    return true;
  }
}

function submitHandler(event) {
  event.preventDefault();
  let isValid = true;
  const $inputs = event.target.querySelectorAll('input');
  $inputs.forEach($input => {
    if (!formValidation(event, $input)) isValid = false;
  });
  if (!isValid) return;
  controller.abort();
  window.history.pushState(null, null, '/src/pages/folder');
}

function passwordShowHandler() {
  let isShow = false;
  return function (e) {
    // console.log(e.target); // img
    const $password = e.target.parentElement.parentElement.querySelector('input');
    $password.setAttribute('type', isShow ? 'password' : 'text');
    e.target.setAttribute(
      'src',
      isShow ? '/public/images/icons/password-eye-off.svg' : '/public/images/icons/password-eye-on.svg',
    );
    isShow = !isShow;
  };
}

$form.addEventListener('focusout', formValidation, { signal });
$form.addEventListener('input', formValidation, { signal });
$form.addEventListener('submit', submitHandler, { signal });

const $sumbitBtns = $form.querySelectorAll('button[type="button"]');
$sumbitBtns.forEach($btn => {
  $btn.addEventListener('click', passwordShowHandler());
});
