
const email = document.querySelector('#email');
const email_error = document.querySelector('.email_error');
const password = document.querySelector('#password');
const password_error = document.querySelector('.password_error');
const input_line = document.querySelector('.input_line');
const logbtn = document.querySelector('.logbtn');


// 이메일 입력안하면 경고뜨는 함수

// function email_check(){
//     if(email.value === ""){
//   email.classList.add('input_line');
//     email_error.innerText='이메일을 입력해주세요';
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText='';
//   };
// };
// email.addEventListener('focusout', email_check);

//@ 안쓰면 경고뜨는 함수

// function email_contains(){
//   if(!email.value.includes('@')){
//   email.classList.add('input_line');
//     email_error.innerText='올바른 이메일 주소가 아닙니다';
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText='';
//   };
// };
// email.addEventListener('focusout', email_contains);

//이메일 비교해서 틀린거 알려주는 함수

// function email_compare(){
//   if(email.value === 'test@codeit.com'){
//     email.classList.add('input_line');
//     email_error.innerText ='이미 사용 중인 이메일입니다.';
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText ='';
//   };
// };
// email.addEventListener('focusout', email_compare);

//비밀번호 없으면 경고하는 함수

// function password_check(){
//   if(password.value === ""){
//     password.classList.add('input_line');
//     password_error.innerText = '비밀번호를 입력해주세요';
//   }else{
//     password.classList.remove('input_line');
//     password_error.innerText = '';
//   };
// };
// password.addEventListener('focusout', password_check);

//이메일이랑 비밀번호 없으면 로그인 안되고 경고하는 함수

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

//로그인시 folder 페이지로 이동하는 함수

function folder_page (){
  if(email.value === 'test@codeit.com' && password.value === 'codeit101'){
    window.location.href = '../html/folder.html'
  };
};
logbtn.addEventListener('click', folder_page);



//onchange