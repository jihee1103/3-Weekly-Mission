import {testEmail, emailInput, pwInput, isValidEmail, isValidPw} from './validation.js'; 
import {errManager} from './validation.js';

function emailErrorMessage() {
const inputValue = emailInput.value;

  if (inputValue === '') {
    errManager.showEmail('이메일을 입력해주세요.');
  } else if (!isValidEmail(inputValue)) {
    errManager.showEmail('올바른 이메일 주소가 아닙니다.');
  } else {
    errManager.hideEmail();  
  }
}

emailInput.addEventListener('focusout', emailErrorMessage);

/*비밀번호 오류*/

const pw2Input = document.querySelector('#password2');
const pw2Error = document.querySelector('#pw2-error')

function pwErrorMessage() {
  const inputValue = pwInput.value;
  const targetValue = pw2Input.value;

  errManager.hidePassword();
  hidePassword2Error();

  if (inputValue === '') {
    errManager.showPassword('비밀번호를 입력해주세요.');
  } else if (!isValidPw(inputValue)) {
    errManager.showPassword('비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.');
  } else if (inputValue !== targetValue) {
    showNotMatchError('비밀번호가 일치하지 않아요.');
  }
}

function showNotMatchError(message) {
  pw2Error.textContent = message;
  pw2Error.classList.add('show-error', 'error-message');
  pw2Input.classList.add('error');
}

function hidePassword2Error() {
  pw2Error.textContent = '';
  pw2Error.classList.remove('show-error');
  pw2Input.classList.remove('error');
}

pwInput.addEventListener('focusout', pwErrorMessage);
pw2Input.addEventListener('focusout', pwErrorMessage);

const signupForm = document.querySelector('#signupForm');

async function checkEmailDuplicate(email) {
  const emailCheckUrl = 'https://bootcamp-api.codeit.kr/api/check-email';
  const data = {
    email,
  };

  try {
    const response = await fetch(emailCheckUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 409) {
      alert("이메일 중복");
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('에러 발생:', err);
    return false;
  }
}

async function signup(email, password) {
  const signupUrl = 'https://bootcamp-api.codeit.kr/api/sign-up';
  const signupData = {
    email,
    password,
  };

  try {
    const signupResponse = await fetch(signupUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });

    if (signupResponse.status === 200) {
      alert("회원가입 완료");
      location.href = "folder.html";
    } else {
      alert("회원가입 실패");
    }
  } catch (err) {
    console.error('회원가입 에러 발생:', err);
  }
}

async function signupCheck(e) {
  const inputEmail = emailInput.value;
  const inputPw = pwInput.value;
  const input2Pw = pw2Input.value;

  if(
    isValidEmail(inputEmail) &&
    isValidPw(inputPw) &&
    inputPw === input2Pw
  ) {
    e.preventDefault();
    const isEmailDuplicate = await checkEmailDuplicate(inputEmail);

    if(!isEmailDuplicate) {
      await signup(inputEmail, inputPw);
    }
  }

  e.preventDefault();
}

signupForm.addEventListener('submit', signupCheck);