const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserData() {
  const response = await fetch(`${BASE_URL}/users/1`);
  const body = await response.json();
  // console.log(body);
  return body;
}

export async function getFolderData() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  // console.log(body);
  return body;
}

export async function getLinkData() {
  const response = await fetch(`${BASE_URL}/users/1/links`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getLinkDataByFolderId(folderId) {
  const response = await fetch(
    `${BASE_URL}/users/1/links?folderId=${folderId}`
  );
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
