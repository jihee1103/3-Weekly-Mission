function emailErrorMessage() {
  const inputEmail = emailInput.value;

  if(inputEmail === '') {
    showEmailError('이메일을 입력해주세요.');
  } else {
    hideEmailError();
  }
}

function pwErrorMessage() {
  const inputPW = pwInput.value;

  if(inputPW === '') {
    showPasswordError('비밀번호를 입력해주세요.');
  } else {
    hidePasswordError();
  }
}

emailInput.addEventListener('focusout', emailErrorMessage);
pwInput.addEventListener('focusout', pwErrorMessage);