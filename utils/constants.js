function deepFreeze(object) {
  // 객체에 정의된 속성명을 추출
  const propNames = Object.getOwnPropertyNames(object);

  // 스스로를 동결하기 전에 속성을 동결

  for (let name of propNames) {
    let value = object[name];

    object[name] =
        value && typeof value === "object" ? deepFreeze(value) : value;
  }
  return Object.freeze(object);
}

export const CONSTANTS = deepFreeze({
  DEV: {
    TEST_EMAIL: "test@codeit.com",
    TEST_PASSWORD: "codeit101",
  }
});

export const ERRORS = deepFreeze({
  MAPPER: {
    emailVoidError: "이메일을 입력해주세요.",
    emailInvalidError: "올바른 이메일 주소가 아닙니다.",
    passwordVoidError: "비밀번호를 입력해주세요.",
    emailWrongError: "이메일을 확인해주세요.",
    passwordWrongError: "비밀번호를 확인해주세요.",
    passwordNotMatchError: "비밀번호가 일치하지 않습니다.",
    passwordLengthError: "비밀번호는 8자 이상 20자 이하여야 합니다."
  }
});



