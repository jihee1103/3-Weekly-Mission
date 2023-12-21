//e메일 관련
const email = document.querySelector('#email');
const email_error = document.querySelector('.email_error');
//비밀번호
const password = document.querySelector('#password');
const password_error = document.querySelector('.password_error');
//비밀번호 확인
const password2 = document.querySelector('#password2');
const password_error2 = document.querySelector('.password_error2');
//회원가입 버튼
const create_btn = document.querySelector('.create_btn');
//에러시 인풋 박스 라인 빨갛게
// const input_line = document.querySelector('.input_line');
//패스워드 정규식
const reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
//이메일 정규식
const emailreg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//에러 지우는 것
const remove_error = function(remove_line, remove_text){
  remove_line.classList.remove('input_line');
  remove_text.innerText ="";
};

//이메일 에러 발생시키는것
const email_error_event = function(add_line, add_text){
  add_line.classList.add('input_line');
  email_error.innerText = add_text;
}

//패스워드 에러 발생시키는것
const password_error_event = function(add_line, add_text){
  add_line.classList.add('input_line');
  password_error.innerText = add_text;
}

//패스워드 비교해서 확인하는것
const password_error2_event = function(add_line, add_text){
  add_line.classList.add('input_line');
  password_error2.innerText = add_text;
}





//이메일 확인
function email_check(){
  if(email.value === 'test@codeit.com'){
    email_error_event(email, '이미 사용 중인 이메일입니다.')
    return false;
  }
  if(email.value === ""){
    email_error_event(email, '이메일을 입력해주세요')
    return false;
  }
  if(!emailreg.test(email.value)){
    email_error_event(email, '올바른 이메일 주소가 아닙니다');
    return false;
  }
    remove_error(email, email_error);
    return true;
}
email.addEventListener('focusout', email_check);

// 패스워드 확인
function password_check(){
  if(password.value === ""){
    password_error_event(password, '비밀번호를 입력해주세요');
    return false;
  }
  if(!reg.test(password.value)){
    password_error_event(password, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
    return false;
  }  
    remove_error(password, password_error);
    return true;
};
password.addEventListener('focusout', password_check)

//패스워드 확인 2
  function password_check2(){
    if(password.value !== password2.value){
      password_error2_event(password2, '비밀번호가 일치하지 않아요')
      return false;
  }
    remove_error(password2, password_error2);
    return true;
};
password2.addEventListener('focusout', password_check2)

// 유요한 회원가입시 페이지 변경
function move_to_folder_page(){
  if(email_check() && password_check() && password_check2()){
    window.location.href = '../folder/folder.html';
  };
};
create_btn.addEventListener('click', move_to_folder_page)

//이메일 비교해서 중복 경고하는  함수

// function email_compare(){
//   if(email.value === 'test@codeit.com'){
//       email.classList.add('input_line');
//       email_error.innerText ='이미 사용 중인 이메일입니다.';
//   }else{
//       email.classList.remove('input_line');
//       email_error.innerText ='';
//   };console.log(email_compare)
// };
// email.addEventListener('focusout', email_compare);

// // 이메일 입력 안하면 경고뜨는 함수

// function email_check(){
//     if(email.value === ""){
//       email.classList.add('input_line');
//       email_error.innerText='이메일을 입력해주세요'
//   }else{
//       email.classList.remove('input_line');
//       email_error.innerText='';
//   };
//   console.log(email_check)
// };
// email.addEventListener('focusout', email_check);

// //@ 안쓰면 경고뜨는 함수

// function email_contains(){
//     if(email.value!==""){
//     if(!email.value.includes('@')){
//     email.classList.add('input_line');
//       email_error.innerText='올바른 이메일 주소가 아닙니다';
//     }else{
//       email.classList.remove('input_line');
//       email_error.innerText='';
//     }; console.log(email_contains)
//   };
// };
// email.addEventListener('focusout', email_contains);

// 비밀번호 없으면 경고해주는 함수

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

// // //비밀번호랑 비밀번호 확인이랑 비교해서 경고하는 함수

// function password_compare(){
//   if(password.value !== password2.value){
//     password_error2.innerText = '비밀번호가 일치하지 않아요';
//     password2.classList.add('input_line');
//   }else{
//     password_error2.innerText = '';
//     password2.classList.remove('input_line');
//   };
// };
// password2.addEventListener('focusout', password_compare);

// // //비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요 경고문 함수

// function password_length(){
//     if(password.value!==""){
//     if(!reg.test(password.value)){
//       password_error.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
//     }else{
//       password_error.innerText = '';
//     };
//   };
// };
// password.addEventListener('focusout', password_length);

// @@@@@@@@@ 회원가입 페이지 1차@@@@@@@@@@@@@@@@

// //이메일 확인
// function email_check(){
//   if(email.value === 'test@codeit.com'){
//     email.classList.add('input_line');
//     email_error.innerText ='이미 사용 중인 이메일입니다.';
//     return false;
//   }else if(email.value === ""){
//     email.classList.add('input_line');
//     email_error.innerText='이메일을 입력해주세요';
//     return false;
//   }else if(!emailreg.test(email.value)){
//     email.classList.add('input_line');
//     email_error.innerText='올바른 이메일 주소가 아닙니다';
//     return false;
//   }else{
//     email.classList.remove('input_line');
//     email_error.innerText='';
//     return true;
//   }
// }
// email.addEventListener('focusout', email_check);

// // 패스워드 확인
// function password_check(){
//   if(password.value === ""){
//     password.classList.add('input_line');
//     password_error.innerText = '비밀번호를 입력해주세요';
//     return false;
//   }else if(password.value!==""){
//     if(!reg.test(password.value)){
//       password.classList.add('input_line')
//       password_error.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
//       return false;
//     }
//   else{ 
//     password.classList.remove('input_line');
//     password_error.innerText = '';
//     return true;
//   }
//   }else{
//     password.classList.remove('input_line');
//     password_error.innerText = '';
//     return true;
//   }
// };
// password.addEventListener('focusout', password_check)

// //패스워드 확인 2
//   function password_check2(){
//     if(password.value !== password2.value){
//       password_error2.innerText = '비밀번호가 일치하지 않아요';
//       password2.classList.add('input_line');
//       return false;
//   }else{
//     password_error2.innerText = '';
//     password2.classList.remove('input_line');
//     return true;
//   };
// };
// password2.addEventListener('focusout', password_check2)

// // 유요한 회원가입시 페이지 변경
// function move_to_folder_page(){
//   if(email_check() && password_check() && password_check2()){
//     window.location.href = '../html/folder.html';
//   };
// };
// createbtn.addEventListener('click', move_to_folder_page)
