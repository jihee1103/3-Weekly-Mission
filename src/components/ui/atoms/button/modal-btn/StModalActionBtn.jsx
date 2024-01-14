import styled from 'styled-components';

const StModalActionBtn = styled.button`
  width: 100%;
  height: 5.1rem;

  color: var(--Grey-Light, #f5f5f5);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;

  border-radius: 0.8rem;
  border-width: 0;

  /* <StModalButton $buttonColor='primary'>버튼</StModalButton> */
  /* background-color: ${({ $buttonColor }) => `var(--Linkbrary-${$buttonColor}-color, #6D6AFE)`}; */

  // ✅ gradient 는 bacground-color가 아니라 background-image에요. 왜요? 저도 모름 ㅋ
  /* 🤔 방법 1 */
  background-image: ${({ theme, $gradientColor = 'purpleblue-to-skyblue', $originalColor }) =>
    !$originalColor &&
    theme[$gradientColor]}; // ✅'red' -> false, undefined, null, ''은 아예 그 css 속성을 없애나 봐요.

  /* 🤔 방법 2 */
  /* background-image: ${({ $buttonColor }) =>
    `var(--gra-${$buttonColor}, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))`}; */

  background-color: ${({ theme, $originalColor }) => theme[$originalColor]};
`;

export { StModalActionBtn };
