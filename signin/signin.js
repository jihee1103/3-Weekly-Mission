import { remove_error, error_event, email_valid, password_valid, eye_change
  } from "../module.js";

//e메일 관련
const email = document.querySelector('#email');
const email_error = document.querySelector('.email_error');

//비밀번호
const password = document.querySelector('#password');
const password_error = document.querySelector('.password_error');

//로그인 버튼
const login_btn = document.querySelector('.login_btn');

//패스워든 눈 아이콘
const eye_off = document.querySelector('.eye_off')

//이메일 체크해주는 함수
function email_check(){
  if(email.value === ""){
    error_event(email_error, email, '이메일을 입력해주세요')
    return false;
  }
  if(!email_valid(email)){
    error_event(email_error,email, '올바른 이메일 주소가 아닙니다.')
    return false;
  }
    remove_error(email, email_error);
    return true;
};
email.addEventListener('focusout', email_check);

// 비밀번호 없으면 경고하는 함수
function password_check(){
  if(password.value === ""){
    error_event(password_error, password, '비밀번호를 입력해주세요')
    return false;
  }
  if(!password_valid(password)){
    error_event(password_error, password, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
    return false;
  }  
    remove_error(password, password_error);
    return true;
};
password.addEventListener('focusout', password_check);

// 이메일이랑 비밀번호 없으면 로그인 안되고 경고하는 함수
function login_btn_check(){
  if(email.value === "" && password.value === ""){
    email_error.innerText = '이메일을 확인해주세요';
    password_error.innerText = '비밀번호를 확인해주세요';
    return false;
  }
   remove_error(email_error, password_error);
   return true;
};
login_btn.addEventListener('click', login_btn_check);

// 로그인시 folder 페이지로 이동하는 함수
function move_to_folder_page(){
  if(email_check() && password_check()){
    window.location.href = '../folder/folder.html';
  };
};
login_btn.addEventListener('click', move_to_folder_page);

//눈모양 바꾸기
eye_off.addEventListener('click', () =>{
  eye_change(password, eye_off)
})

// function eye_change(input, image_btn){
//   if(input.type === 'password'){
//     input.type = 'text'
//     image_btn.getElementsByTagName('img')[0].setAttribute("src", "./images/eye-on.svg");
//     return;
//   }
//   input.type = 'password';
//   image_btn.getElementsByTagName('img')[0].setAttribute("src", "./images/eye-off.svg");
// }

// @@@@@@ 로그인 페이지 1차 @@@@@@

// function email_check(){
//   if(email.value===""){
//     email.classList.add('input_line');
//     email_error.innerText='이메일을 입력해주세요';
//     return false;
//   }else if(!emailreg.test(email.value)){
//     email.classList.add('input_line')
//     email_error.innerText='올바른 이메일 주소가 아닙니다.'
//     return false;
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText='';
//     return true;
//   };
// };
// email.addEventListener('focusout', email_check);

// // 비밀번호 없으면 경고하는 함수

// function password_check(){
//   if(password.value === ""){
//     password.classList.add('input_line');
//     password_error.innerText = '비밀번호를 입력해주세요';
//     return false;
//   }else{
//     password.classList.remove('input_line');
//     password_error.innerText = '';
//     return true;
//   };
// };
// password.addEventListener('focusout', password_check);

// // 이메일이랑 비밀번호 없으면 로그인 안되고 경고하는 함수

// function logbtn_check(){
//   if(email.value === "" && password.value === ""){
//     email_error.innerText = '이메일을 확인해주세요';
//     password_error.innerText = '비밀번호를 확인해주세요';
//   }else{
//     email_error.innerText = '';
//     password_error.innerText = '';
//   };
// };
// logbtn.addEventListener('click', logbtn_check);

// // 로그인시 folder 페이지로 이동하는 함수

// function move_to_folder_page(){
//   if(email_check() && password_check()){
//     window.location.href = '../html/folder.html';
//   };
// };
// logbtn.addEventListener('click', move_to_folder_page);


// //이메일 에러 발생시키는것
// const email_error_event = function(input_border, error_text){
//   input_border.classList.add('input_line');
//   email_error.innerText = error_text;
// }

// //패스워드 에러 발생시키는것
// const password_error_event = function(input_border, error_text){
//   input_border.classList.add('input_line');
//   password_error.innerText = error_text;
// }