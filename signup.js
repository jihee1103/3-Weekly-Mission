if (localStorage.getItem("accessToken")) {
    location.replace("/folder");
}

const eInput = document.getElementById('email');
const pInput = document.getElementById('password');
const pDupInput = document.getElementById('password-dup');

const emailErrMsg = document.getElementById('email-err-msg');
const pwErrMsg = document.getElementById('password-err-msg');
const pwDupMsg = document.getElementById('password-dup-msg');
const signupbtn = document.querySelector('#signupbtn');

const eChecker = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/; 
    //@을 기준으로 앞 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크, 뒷 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크, 뒷 구간에서 . 뒷 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크
const pChecker = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



function emailCheck(email) {
    if(eChecker.test(email) === false) {
        return false; 
    } else { 
        return true; 
    }
}

function printEmailMsg(e){
    emailErrMsg.textContent = '';
    if(eInput.value == ''){
        emailErrMsg.textContent = '이메일을 입력해주세요';
        return false;
    } else {
        if(emailCheck(eInput.value) == false) {
            emailErrMsg.textContent = '올바른 이메일이 아닙니다.';
            return false;
        }
    }
    return true;
}


function passwordCheck(password){
    if(pChecker.test(password) === false){
        return false;
    }
    return true;
}

function printPasswordMsg(e){
    pwErrMsg.textContent = '';
    if(passwordCheck(pInput.value) == false ) {
        pwErrMsg.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        return false;
    }
    return true;
}

function pwDup() {
    const pwValue = pInput.value;
    const pwDup = pDupInput.value;


    pwDupMsg.textContent = '';
    if (pwValue !== pwDup) {
        pwErrMsg.style.display = 'block';
        pDupInput.classList.add('focus-border-red');
        pwDupMsg.textContent = '비밀번호가 다릅니다';
        return false;
    } else {
        pwErrMsg.style.display = 'none';
        pDupInput.classList.remove('focus-border-red');
        return true;
    }
}

signupbtn.addEventListener('click', vaildSubmit);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        vaildSubmit(e);
    }
});
function vaildSubmit(e) {
    e.preventDefault();

    const isEmailValid = printEmailMsg();
    const isPasswordValid = printPasswordMsg();
    const isPasswordDupValid = pwDup();

    if (isEmailValid && isPasswordValid && isPasswordDupValid) {
        signup(eInput.value);
    }
}

function signup(email) {
    axios
        .post("https://bootcamp-api.codeit.kr/api/check-email", { email })
        .then((response) => {
            if(response.status === 200){
                location.href = "/folder";
            }
        })
        .catch((err) => {
            if(err.response.status === 409){
                emailErrMsg.textContent = '이미 사용 중인 이메일입니다.';
            }
        });
}

eInput.addEventListener('focusout', printEmailMsg);
pInput.addEventListener('focusout', printPasswordMsg);
pDupInput.addEventListener('focusout', pwDup);