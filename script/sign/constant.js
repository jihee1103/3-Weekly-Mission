const EMPTY_EMAIL = '이메일을 입력해주세요';
const INVALID_EMAIL = '올바른 이메일 주소가 아닙니다';
const REQUIRE_CONFIRM_EMAIL = '이메일을 확인해주세요';
const REQUIRE_CONFIRM_PASSWORD = '비밀번호를 확인해주세요';
const EMPTY_PASSWORD = '비밀번호를 입력해주세요';
const NOT_MATCH_PASSWORD = '비밀번호가 일치하지 않아요';
const CHECK_PASSWORD_FORMAT = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
const DUPLICATED_EMAIL = '이미 사용중인 이메일입니다.';
const CONFIRM_EMAIL = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
const CONFIRM_PASSWORD_ALPHABET = "[A-Za-z]";
const CONFIRM_PASSWORD_NUMBER = "[0-9]";


export { REQUIRE_CONFIRM_PASSWORD, REQUIRE_CONFIRM_EMAIL, EMPTY_EMAIL, INVALID_EMAIL, EMPTY_PASSWORD, NOT_MATCH_PASSWORD, CHECK_PASSWORD_FORMAT, DUPLICATED_EMAIL, CONFIRM_EMAIL, CONFIRM_PASSWORD_ALPHABET, CONFIRM_PASSWORD_NUMBER };