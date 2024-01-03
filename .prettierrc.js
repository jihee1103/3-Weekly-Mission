/**
 * Prettier 옵션
 * - https://prettier.io/docs/en/options.html
 */
module.exports = {
  printWidth: 120, // 한 줄 최대 문자 수
  tabWidth: 2, // 들여쓰기 시, 탭 너비
  useTabs: false, // 스페이스 대신 탭 사용
  semi: true, // 문장 끝 세미콜론 사용
  singleQuote: true, // 작은 따옴표 사용
  trailingComma: 'es5', // 꼬리 콤마 사용
  bracketSpacing: true, // 중괄호 내에 공백 사용
  bracketSameLine: false, // 마지막 '>'를 다음줄로 내릴지 여부
  embeddedLanguageFormatting: 'auto', // 파일 안에 또다른 형식의 코드에도 Prettier를 적용할지 여부
  htmlWhitespaceSensitivity: 'css', // html의 공백을 처리하는 방법
  arrowParens: 'always', // 화살표 함수 단일 인자 시, 괄호 생략
  proseWrap: 'never', // 마크다운 포매팅 제외
  endOfLine: 'auto', // 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
};
