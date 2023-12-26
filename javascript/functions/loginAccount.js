export { performLogin };
import { $emailInput, $passwordInput } from "../tags.js";
import { makeWarningSpanTag } from "./handleSpanTag.js";

async function performLogin() {
  const email = $emailInput.value;
  const password = $passwordInput.value;
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      // 비정상적인 응답을 처리할 부분 (예: 오류 메시지 표시)
      makeWarningSpanTag("이메일을 확인해주세요", $emailInput, "emailSpan");
      makeWarningSpanTag(
        "비밀번호를 확인해주세요",
        $passwordInput,
        "passwordSpan"
      );
      console.error("로그인 실패:", response.status, response.statusText);
      return;
    }

    // 서버가 JSON 데이터로 응답하는 것으로 가정하고, 이를 파싱할 수 있습니다.
    const data = await response.json();
    localStorage.setItem("accessToken", data.data.accessToken);
    window.location.href = "/folder";
  } catch (error) {
    // 네트워크 또는 기타 오류 처리
    console.error("로그인 중 오류 발생:", error);
  }
}
