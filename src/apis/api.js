const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}

export async function getUser() {
  const url = `${BASE_URL}sample/user`;
  const response = await fetchJson(url);
  return response;
}

export async function getShredCardList() {
  const url = `${BASE_URL}sample/folder`;
  const response = await fetchJson(url);
  return response;
}

export async function getOwner(userId = 1) {
  const url = `${BASE_URL}users/${userId}`;
  const response = await fetchJson(url);
  return response;
}

export async function getFolderList(userId = 1) {
  const url = `${BASE_URL}users/${userId}/folders`;
  const response = await fetchJson(url);
  return response;
}
export async function getLinkList(userId = 1) {
  const url = `${BASE_URL}users/${userId}/links`;
  const response = await fetchJson(url);
  return response;
}

export async function getFolderData(id, userId = 1) {
  const url = `${BASE_URL}users/${userId}/links?folderId=${id}`;
  const response = await fetchJson(url);
  return response;
}
