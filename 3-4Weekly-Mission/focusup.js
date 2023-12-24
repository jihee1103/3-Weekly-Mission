let em = document.getElementById("em");
const emu = document.querySelector(".sign-input-box");
const pw = document.getElementById("pw");
const pw2 = document.getElementById("pw2");
const pwu = document.querySelector(".sign-password");
const pwu2 = document.querySelector(".sign-password:nth-child(3)");
const firstInput = document.querySelector(".sign-password:nth-child(2) input");
const secondInput = document.querySelector(".sign-password:nth-child(3) input");

function createElement(text) {
  let ce = document.createElement("div");
  ce.textContent = text;
  ce.classList.add("redline");
  return ce;
}

let warning = createElement("이메일을 입력해주세요");

let warningpw = createElement("비밀번호를 입력해주세요");

let checkem = createElement("이메일을 확인해주세요");

let checkpw = createElement("비밀번호를 확인해주세요");

let truthy = createElement("올바른 이메일주소가 아닙니다");

let already = createElement("이미 사용중인 이메일입니다");

let pwcheck = createElement(
  "비밀번호는 영문,숫자 조합 8자리 이상 입력해 주세요"
);

let pwdiff = createElement("비밀번호가 일치하지 않아요");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/; // Updated password pattern

// function fco() {
//   if (em.value == "") {
//     emu.append(warning);
//     em.classList.add("redlineb");
//     emu.removeChild(truthy);
//   } else if (!emailPattern.test(em.value)) {
//     emu.append(truthy);
//     emu.removeChild(warning);
//   } else {
//     emu.removeChild(truthy);
//     em.classList.remove("redlineb");
//     emu.removeChild(warning);
//   }
// }

function fco() {
  switch (true) {
    case em.value === "":
      emu.append(warning);
      em.classList.add("redlineb");
      emu.removeChild(truthy);
      break;
    case !emailPattern.test(em.value):
      emu.append(truthy);
      emu.removeChild(warning);
      break;
    default:
      if (emu.contains(truthy)) {
        emu.removeChild(truthy);
      }
      if (emu.contains(warning)) {
        emu.removeChild(warning);
      }
      em.classList.remove("redlineb");
      break;
  }
}

function fcopw() {
  if (pw.value == "") {
    pwu.append(warningpw);
    pw.classList.add("redlineb");
  } else if (!passwordPattern.test(pw.value)) {
    pwu.append(pwcheck);
    pw.classList.add("redlineb");
    pwu.removeChild(warningpw);
  } else {
    if (pwu.contains(pwcheck)) {
      pwu.removeChild(pwcheck);
      pw.classList.remove("redlineb");
    }
    pwu.removeChild(warningpw);
    pw.classList.remove("redlineb");
  }
}

function fcopw2() {
  if (firstInput.value !== secondInput.value && secondInput.value !== "") {
    pwu2.append(pwdiff);
    pw2.classList.add("redlineb");
  } else {
    pwu2.removeChild(pwdiff);
    pw2.classList.remove("redlineb");
  }
}

em.addEventListener("focusout", fco);
pw.addEventListener("focusout", fcopw);
pw2.addEventListener("focusout", fcopw2);

document
  .querySelector(".sign-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

    const email = document.getElementById("em").value;
    const password = document.getElementById("pw").value;

    if (email === "test@codeit.com") {
      emu.append(already);
    } else {
      window.location.href = "./folder.html";
    }
  });

let eye = document.querySelector(".eye-button");
let imgi = document.getElementById("eye");

eye.addEventListener("click", function () {
  if (pw.type === "password") {
    pw.type = "text";
    imgi.src = "./images/eye-solid.svg";
  } else {
    pw.type = "password";
    imgi.src = "./images/eye-off.svg";
  }
});

let eye2 = document.querySelector(".sign-password:nth-child(3) .eye-button");
let imgi2 = document.getElementById("eye2");

eye2.addEventListener("click", function () {
  if (pw2.type === "password") {
    pw2.type = "text";
    imgi2.src = "./images/eye-solid.svg";
  } else {
    pw2.type = "password";
    imgi2.src = "./images/eye-off.svg";
  }
});
