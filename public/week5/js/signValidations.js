
export function signValidator(spanEl, regex, inputEl) {
  let errorType;
  if (regex.test(inputEl.value)){
    spanEl.textContent = '';
    inputEl.classList.remove('error-input');
    return;
  } 

  if (inputEl.value === '') {
    errorType = 0;
  }
  else if (inputEl.id === 'email' ) {
    errorType = 1;
  } else {
    errorType = 2;
  }

  setErrorMessage(spanEl, inputEl, errorType);
  return;
}

export function checkPassword(spanEl, PWValue, inputEl) {
  let errorType;
  if(inputEl.value === ''){
    errorType = 0;
  }
  else if(PWValue === inputEl.value){
    spanEl.textContent = '';
    inputEl.classList.remove('error-input');
    return;
  }
  else {
    errorType = 3;
  }
  
  setErrorMessage(spanEl, inputEl, errorType);
  return;
}

export function setErrorMessage(spanEl, inputEl ,errorType) {
  let message='' ;
  switch (errorType) {
    case 0:
      if(inputEl.id == 'email'){
        message = '이메일을 입력해주세요.';
      }else {
        message = '비밀번호를 입력해주세요.';
      }
      break;
    case 1:
      message = '올바른 이메일 주소가 아닙니다.';
      break;
    case 2:
      message = '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요. ';
      break;
    case 3:
      message = '비밀번호가 다릅니다. ';
      break;
    case 4 : 
      message = '이미 사용중인 아이디입니다. ';
      break;
    case 5 :
      message = inputEl.id === 'email'? '이메일을 확인해주세요.': '비밀번호를 확인해주세요';
  }
  spanEl.textContent = message;
  inputEl.classList.add('error-input');
}