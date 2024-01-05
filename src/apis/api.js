const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserData() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const body = await response.json();
  // console.log(body);
  return body;
}

export async function getFolderData() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  // console.log(body);
  return body;
}
