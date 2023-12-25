
const emailInput = document.querySelectorAll('.email')[0];
const TEST_CORRECT_EMAIL = 'test@codeit.com';
const TEST_CORRENT_PASSWORD = 'codeit101';
const passInput = document.querySelectorAll('.password')[0];
const passConfirmInput = document.querySelectorAll('.password-confirm')[0];
const errorMail = document.querySelectorAll('.error-mail')[0];
const errorPass = document.querySelectorAll('.error-pass')[0];
const errorPassConfirm = document.querySelectorAll('.error-passconfirm')[0];
const eyeImagePass = document.querySelector('#eyeImagePass'); 
const eyeImageConfirm = document.querySelector('#eyeImageConfirm'); 
const pattern = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
const VALID_LINK = '/folder';

function checkEmail() {
  const emailInputValue = emailInput.value
  
  if (emailInput.value === '') {
    errorMail.textContent = '이메일을 입력해주세요.';
    emailInput.classList.add('error'); // 에러 클래스 추가
    return;
  } 
  
  if (!pattern.test(emailInputValue)) {
    errorMail.textContent = '올바른 이메일 주소가 아닙니다.';
    emailInput.classList.add('error'); // 에러 클래스 추가
    return;
  } 

  if (emailInput.value === TEST_CORRECT_EMAIL) {
    errorMail.textContent = '이미 사용 중인 이메일입니다.';
    emailInput.classList.add('error'); // 에러 클래스 추가
    return;
  }
  
  if (emailInput.value !== '') {
    errorMail.textContent = '이메일을 확인해주세요.';
    emailInput.classList.add('error'); // 에러 클래스 추가
    return;
  } 
  
  if (emailInput.value === TEST_CORRECT_EMAIL && passInput.value === TEST_CORRENT_PASSWORD ) {
    location.href = VALID_LINK;
    return;
  }

  // errorMail.textContent = '';
  // emailInput.classList.remove('error'); // 에러 클래스 제거
}

function checkPass() {
  const passwordValue = passInput.value;
  const hasMinLength = passwordValue.length >= 8;
  const hasLetterAndNumber = /[a-zA-Z]/.test(passwordValue) && /\d/.test(passwordValue);

  if (passInput.value === '') {
    errorPass.textContent = '비밀번호를 입력해주세요.';
    passInput.classList.add('error'); // 에러 클래스 추가
    return;
  }

  if (!hasMinLength || !hasLetterAndNumber) {
    errorPass.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    return;
  }

  if (passInput.value !== '') {
    errorPass.textContent = '비밀번호를 확인해주세요.';
    passInput.classList.add('error'); // 에러 클래스 추가
    return;
  }
}

function checkPassConfirm() {
  if (passConfirmInput.value === '') {
    errorPassConfirm.textContent = '비밀번호를 다시 입력해주세요.';
    passConfirmInput.classList.add('error'); // 에러 클래스 추가
  } else if (passConfirmInput.value !== passInput.value) {
    errorPassConfirm.textContent = '비밀번호가 일치하지 않습니다.';
    passConfirmInput.classList.add('error'); // 에러 클래스 추가
  } else {
    errorPassConfirm.textContent = '';
    passConfirmInput.classList.remove('error'); // 에러 클래스 제거
  }
}


function togglePasswordVisibility() {
  const currentType = passInput.type;
  passInput.type = (currentType === 'password') ? 'text' : 'password';
  eyeImagePass.src = (currentType === 'password') ? 'img/eye-cross.png' : 'img/eye.png';
}

function togglePasswordVisibilityConfirm() {
  const currentType = passConfirmInput.type;
  passConfirmInput.type = (currentType === 'password') ? 'text' : 'password';
  eyeImageConfirm.src = (currentType === 'password') ? 'img/eye-cross.png' : 'img/eye.png';
}


emailInput.addEventListener('focusout', checkEmail);
passInput.addEventListener('focusout', checkPass);
passConfirmInput.addEventListener('focusout', checkPassConfirm);
eyeImagePass.addEventListener('click', togglePasswordVisibility);
eyeImageConfirm.addEventListener('click', togglePasswordVisibilityConfirm);

