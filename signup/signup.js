import { remove_error, error_event, is_valid_email, is_valid_password, eye_change,
  email_input, email_error, password_input, password_error, password2_input,  password_error2, login_btn_check, performUserSignUp
} from "../module.js";

//회원가입 버튼
const create_btn = document.querySelector('.create_btn');

//패스워든 눈 아이콘
const eye_off = document.querySelector('.eye_off')
const eye_off_2 = document.querySelector('.eye_off_2')

//이메일 확인히는 함수
function email_check(){
  if(email_input.value === 'test@codeit.com'){
    error_event(email_error, email_input, '이미 사용 중인 이메일입니다.')
    return false;
  }
  if(email_input.value === ""){
    error_event(email_error, email_input, '이메일을 입력해주세요')
    return false;
  }
  if(!is_valid_email(email_input.value)){
    error_event(email_error, email_input, '올바른 이메일 주소가 아닙니다');
    return false;
  }
    remove_error(email_input, email_error);
    return true;
}
email_input.addEventListener('focusout', email_check);

// 패스워드 확인하는 함수
function password_check(){
  if(password_input.value === ""){
    error_event(password_error, password_input, '비밀번호를 입력해주세요');
    return false;
  }
  if(! is_valid_password(password_input.value)){
    error_event(password_error, password_input, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
    return false;
  }  
    remove_error(password_input, password_error);
    return true;
};
password_input.addEventListener('focusout', password_check)

//패스워드 확인하는 함수 2
function password_check2(){
  if(password_input.value !== password2_input.value){
    error_event(password_error2, password2, '비밀번호가 일치하지 않아요')
    return false;
  }
    remove_error(password2_input, password_error2);
    return true;
};
password2_input.addEventListener('focusout', password_check2)

//눈모양 바꾸는 함수
eye_off.addEventListener('click', () =>{
  eye_change(password_input, eye_off)
})

eye_off_2.addEventListener('click', () =>{
  eye_change(password2_input, eye_off_2)
})

// 로그인시 folder 페이지로 이동하는 함수
function move_to_folder_page(){
  const checked = login_btn_check();
  if(checked){
    console.log(checked)
    performUserSignUp();
  }
};
create_btn.addEventListener('click', move_to_folder_page);

