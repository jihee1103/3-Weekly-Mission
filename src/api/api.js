const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getFolders() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터 로딩에 실패했습니다.");
  }
  return await response.json();
}

export async function getUserProfile() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("데이터 로딩에 실패했습니다.");
  }
  return await response.json();
}
