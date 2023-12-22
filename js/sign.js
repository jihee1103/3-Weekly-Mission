import { signValidator, checkPassword, setErrorMessage } from './signValidations.js'

// 이벤트 제거용
const controller = new AbortController();
const signal = controller.signal;

//form
const form = document.querySelector('form');

// input 태그들 
const inputs = [...document.querySelectorAll('input')];
const inputId = document.getElementById('email');
const inputPw = document.getElementById('password');
const inputPwRepeat = document.getElementById('password-repeat');

// 에러 메세지 span 태그들
const spanId = document.getElementById('spanId');
const spanPw = document.getElementById('spanPw');
const spanPwRe = document.getElementById('spanPwRe');

// 정규 표현식
const regexId = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const regexPw = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

// 눈 아이콘
const eyes = document.querySelectorAll('.eye');

// 로그인, 회원가입 버튼
const signBtn = document.querySelector('.sign-submit-btn');

// api url
const apiUrl = 'https://bootcamp-api.codeit.kr/'

const token = localStorage.getItem('accessToken');

if (token != null) {
  location.href = '../pages/forder.html';
}

// focusout 되었을 때 
function handleInputFocusOut({ target }) {
  switch (target.id) {
    case 'email':
      signValidator(spanId, regexId, target);
      break;
    case 'password':
      signValidator(spanPw, regexPw, target);
      break;
    case 'password-repeat':
      checkPassword(spanPwRe, inputPw.value, target);
      break;
  }
}

// 로그인, 회원가입 체크 
function signCheck() {
  if (inputPwRepeat === null) {
    const url = apiUrl + 'api/sign-in';
    signTry(url, { email: inputId.value, password: inputPw.value })
  } else {
    const values = inputs.map(input => input.value);
    const checked = values.every(value => value !== '');
    if (regexId.test(values[0]) && values[1] === values[2] && checked) {
      const url = apiUrl + 'api/check-email'
      singupCheck(url, { email: inputId.value, password: inputPw.value });
    } else {
      signValidator(spanId, regexId, inputId);
      signValidator(spanPw, regexPw, inputPw);
      checkPassword(spanPwRe, inputPw.value, inputPwRepeat);
    }
  }
}

// 회원가입 이메일 중복 체크
async function singupCheck(url, userValue) {
  try {
    const postResult = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userValue.email,
        password: userValue.password
      })
    })
    if (postResult.ok) {
      signTry(apiUrl + 'api/sign-up', userValue);
    } else {
      setErrorMessage(spanId, inputId, 4);
    }
  } catch (e) {
    console.log(e);
  }
}

// 로그인 회원가입 시도
async function signTry(url, userValue) {
  try {
    const postResult = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // usecredential : true,
      },
      body: JSON.stringify({
        email: userValue.email,
        password: userValue.password
      }),
    });
    if (postResult.ok) {
      const response = await postResult.json();
      const accessToken = response.data.accessToken;
      successSignin(accessToken);
    } else {
      failSignin();
    }
  } catch (e) {
    console.log(e);
  }
}

//sign 성공
function successSignin(accessToken) {
  localStorage.setItem('accessToken', accessToken);
  controller.abort();
  location.href = '../pages/forder.html';
}

//로그인 실패
function failSignin() {
  setErrorMessage(spanId, inputId, 5);
  setErrorMessage(spanPw, inputPw, 5);
}

// 눈 모양 아이콘 띄우고 제거하기
function eyeToggle({ target }) {
  // 아이콘 띄우고 제거하기
  if (target.type === 'password') {
    const targetEye = target.id === 'password' ? eyes[0] : eyes[1];
    target.value == ''
      ? targetEye.classList.add('none')
      : targetEye.classList.remove('none');
  }
}

// 아이콘 변경
function eyeOnClick({ target }) {
  const targetPw = target.id === 'password-eye-img' ? inputPw : inputPwRepeat;
  target.classList.toggle('off');
  if (!target.classList.contains('off')) {
    target.src = '../images/eye-on.svg';
    targetPw.type = 'text';
  } else {
    target.src = '../images/eye-off.svg';
    targetPw.type = 'password';
  }
}

//events
eyes.forEach(eye => {
  eye.addEventListener('click', eyeOnClick, { signal });
})

// 모든 input태그에 이벤트 추가하기
inputs.forEach(input => {
  input.addEventListener('focusout', handleInputFocusOut, { signal });
  input.addEventListener('keyup', eyeToggle, { signal });
})

//버튼에 이벤트 추가하기
signBtn.addEventListener('click', signCheck, { signal });
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
}, { signal })