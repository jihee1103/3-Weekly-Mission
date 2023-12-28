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
  },
});

const base = "https://bootcamp-api.codeit.kr/api/";
export const END_POINTS = Object.freeze({
  BASE_URL: base,
  CHECK_EMAIL: base + "check-email",  //POST
  SIGN_IN: base + "sign-in",  //POST
  SIGN_UP: base + "sign-up"  //POST
});

export const ERRORS = deepFreeze({
  MAPPER: {
    EMAIL_VOID: "이메일을 입력해주세요.",
    EMAIL_INVALID: "올바른 이메일 주소가 아닙니다.",
    PASSWORD_VOID: "비밀번호를 입력해주세요.",
    EMAIL_WRONG: "이메일을 확인해주세요.",
    PASSWORD_WRONG: "비밀번호를 확인해주세요.",
    PASSWORD_NOT_MATCH: "비밀번호가 일치하지 않습니다.",
    PASSWORD_LENGTH: "비밀번호는 8자 이상 20자 이하여야 합니다.",
    SIGN_IN_FAILED: "로그인에 실패했습니다. ID와 비밀번호를 확인해주세요.",
    SIGN_UP_FAILED: "회원가입에 실패했습니다. ID와 비밀번호를 확인해주세요.",
    EMAIL_DUPLICATED: "중복된 이메일이 존재합니다."
  }
});

export const REGEX = Object.freeze({
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
});



