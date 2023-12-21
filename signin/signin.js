//이메일 관련
const email = document.querySelector('#email');
const email_error = document.querySelector('.email_error');
//패스워드 관련
const password = document.querySelector('#password');
const password_error = document.querySelector('.password_error');
//인풋박스 라인
const input_line = document.querySelector('.input_line');
//로그인 버튼
const logbtn = document.querySelector('.logbtn');
//패스워든 눈 아이콘
const password_icon1 = document.querySelector('.password_icon1')
//이메일 정규식
const emailreg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//이메일
email.addEventListener('focusout', email_check)
function email_check(){
  if(email.value===""){
    email.classList.add('input_line');
    email_error.innerText='이메일을 입력해주세요';
    return false;
  }else if(!emailreg.test(email.value)){
    email.classList.add('input_line')
    email_error.innerText='올바른 이메일 주소가 아닙니다.'
    return false;
  }else{
    email.classList.remove('input_line');
    email_error.innerText='';
    return true;
  };
};
email.addEventListener('focusout', email_check);

// 비밀번호 없으면 경고하는 함수

function password_check(){
  if(password.value === ""){
    password.classList.add('input_line');
    password_error.innerText = '비밀번호를 입력해주세요';
    return false;
  }else{
    password.classList.remove('input_line');
    password_error.innerText = '';
    return true;
  };
};
password.addEventListener('focusout', password_check);

// 이메일이랑 비밀번호 없으면 로그인 안되고 경고하는 함수

function logbtn_check(){
  if(email.value === "" && password.value === ""){
    email_error.innerText = '이메일을 확인해주세요';
    password_error.innerText = '비밀번호를 확인해주세요';
  }else{
    email_error.innerText = '';
    password_error.innerText = '';
  };
};
logbtn.addEventListener('click', logbtn_check);

// 로그인시 folder 페이지로 이동하는 함수

function folder_page(){
  if(email_check() && password_check()){
    window.location.href = '../html/folder.html';
  };
};
logbtn.addEventListener('click', folder_page);


//눈모양 클릭시 문자열 보이기 가리기
// function eye_Off(){
//   password_icon1.classList.add('eyeswitch');
// }
// password_icon1.addEventListener('toggle',eye_Off)

// 이메일 입력안하면 경고뜨는 함수

// function email_check(){
//     if(email.value === ""){
//     email.classList.add('input_line');
//     email_error.innerText='이메일을 입력해주세요';
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText='';
//   };
// };
// email.addEventListener('focusout', email_check);

// // @ 안쓰면 경고뜨는 함수

// function email_contains(){
//   if(email.value !== ""){
//   if(!email.value.includes('@')){
//   email.classList.add('input_line');
//     email_error.innerText='올바른 이메일 주소가 아닙니다';
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText='';
//   };
// }
// };
// email.addEventListener('focusout', email_contains);



//이벤트 위임으로 처리해보기

//display none