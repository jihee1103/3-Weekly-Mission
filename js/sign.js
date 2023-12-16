// 이벤트 제거용
const controller = new AbortController();
const signal = controller.signal;

// input 태그들 
const inputs = document.querySelectorAll('input');
const inputId = document.getElementById('email');
const inputPw = document.getElementById('password');
const inputPwRepeat = document.getElementById('password-repeat');

// 에러 메세지 span 태그들
const spanId = inputId.nextElementSibling;
const spanPw= inputPw.nextElementSibling;  

// 정규 표현식
const regexId = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const regexPw =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

// 눈 아이콘
const eyes = document.querySelectorAll('.eye');

// 로그인, 회원가입 버튼
const signBtn = document.querySelector('.sign-submit-btn');

// 임시 테스트 유저 데이터 
const user = {
  email : 'test@codeit.com',
  password : 'codeit101'
}

// focusout 되었을 때 사용 될 에러메세지 
function inputFocusOut({target}) {
  const span = target.nextElementSibling;
  span.textContent ='';
  if(target.type=='email'){
    if(target.value===''){
      span.textContent = '이메일을 입력해주세요.';
    }else if(!regexId.test(target.value)){
      span.textContent = '올바른 이메일 주소가 아닙니다.';
    }
  }else if(target.id==='password'){
    if(target.value===''){
      span.textContent='비밀번호를 입력해주세요.';
    }else if(!regexPw.test(target.value)){
      span.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요. ';
    }
  }else if(target.id == 'password-repeat'){
    if(target.value===''){
      span.textContent='비밀번호를 입력해주세요.';
    }else if(target.value !== inputPw.value){
      span.textContent = '비밀번호가 다릅니다.';
    }
  }
  span.textContent!==''
  ? target.classList.add('error-input')
  : target.classList.remove('error-input');
}

// 눈 모양 아이콘 띄우고 제거하기 및 버튼 초기화
function eyeShow({target}){
  //버튼 초기화
  signBtn.disabled = false;
  // 아이콘 띄우고 제거하기
  if(target.type === 'password'){
    const targetEye = target.nextElementSibling.nextElementSibling;
    target.value==''?targetEye.classList.add('none'):targetEye.classList.remove('none'); 
  }
  
}

// 로그인, 회원가입 체크 
function signCheck() {
  // 로그인, 회원가입 구분하기
  if(inputPwRepeat===null){
    if(inputId.value===user.email&&inputPw.value===user.password){
      //로그인 성공
      controller.abort();
    }else {
      //로그인 실패
      signBtn.disabled = true;
      spanId.textContent = '이메일을 확인해 주세요.';
      spanPw.textContent = '비밀번호를 확인해 주세요.';
    }
  }else if(regexId.test(inputId.value) && inputId.value !== user.email && inputPwRepeat.value !==''&& inputPwRepeat.value === inputPw.value ) {
    //회원가입 성공
    controller.abort();
  }else {
    // 회원가입 실패
    signBtn.disabled = true;
    const spanPwRepeat =  inputPwRepeat.nextElementSibling;
    spanPw.textContent = inputPw.value ===''?'비밀번호를 입력해주세요.':'';
    spanId.textContent = inputId.value ==='' ? '이메일을 입력해주세요.': '';
    if(inputPwRepeat.value !== inputPw.value){
      spanPwRepeat.textContent = '비밀번호가 다릅니다.';
    }else if(inputId.value === user.email) {
      spanId.textContent = '이미 사용 중인 이메일입니다.';
    }
  }
}

function enterSignCheck(e){
  if(e.key ==='Enter'){
    signCheck();
  }
}

// 아이콘 변경
function eyeOnClick({target}) {
  const targetPw = target.previousElementSibling.previousElementSibling;
  if(target.classList.contains('off')){
    target.src = '../images/eye-on.svg';
    target.classList.toggle('off');
    targetPw.type = 'text';
  }else {
    target.src = '../images/eye-off.svg';
    target.classList.toggle('off');
    targetPw.type = 'password';
  }
}

for(let eye of eyes ){
  eye.addEventListener('click', eyeOnClick, {signal});
}

// 모든 input태그에 이벤트 추가하기
for(let input of inputs){
  input.addEventListener('focusout', inputFocusOut, {signal});
  input.addEventListener('change', enterSignCheck, {signal});  
  input.addEventListener('keyup', eyeShow, {signal});
}

//버튼에 이벤트 추가하기
signBtn.addEventListener('click', signCheck, {signal});
