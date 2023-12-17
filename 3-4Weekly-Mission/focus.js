let em = document.getElementById("em");
const emu = document.querySelector(".sign-input-box");
const pw = document.getElementById("pw");
const pwu = document.querySelector(".sign-password");

let warning = document.createElement("div");
warning.textContent = "이메일을 입력해주세요";
warning.classList.add("redline");

let warningpw = document.createElement("div");
warningpw.textContent = "비밀번호를 입력해주세요";
warningpw.classList.add("redline");

let checkem = document.createElement("div");
checkem.textContent = "이메일을 확인해주세요";
checkem.classList.add("redline");

let checkpw = document.createElement("div");
checkpw.textContent = "비밀번호를 확인해주세요";
checkpw.classList.add("redline");

let truthy = document.createElement("div");
truthy.textContent = "올바른 이메일주소가 아닙니다";
truthy.classList.add("redline");

// function createElement(text) {
//   let warning = document.createElement("div");
//   warning.textContent = text;
//   warning.classList.add("redline");
//   return warning;
// }  축약하는함수, 일단보류

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fco() {
  if (em.value == "") {
    emu.append(warning);
    em.classList.add("redlineb");
    emu.removeChild(truthy);
  } else if (!emailPattern.test(em.value)) {
    emu.append(truthy);
    emu.removeChild(warning);
  } else {
    emu.removeChild(truthy);
    em.classList.remove("redlineb");
    emu.removeChild(warning);
  }
}

function fcopw() {
  if (pw.value == "") {
    pwu.append(warningpw);
    pw.classList.add("redlineb");
  } else {
    pw.classList.remove("redlineb");
    pwu.removeChild(warningpw);
  }
}

em.addEventListener("focusout", fco);
pw.addEventListener("focusout", fcopw);

document
  .querySelector(".sign-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

    const email = document.getElementById("em").value;
    const password = document.getElementById("pw").value;

    if (email === "test@codeit.com" && password === "codeit101") {
      window.location.href = "/3-4Weekly-Mission/folder.html"; //상위폴더를 입력하지않고 index를 기준으로 잡을방법이 있을까요
    } else {
      emu.append(checkem);
      pwu.append(checkpw);
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
