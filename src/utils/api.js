const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

async function getUserInfo() {
  const response = await fetch(`${API_BASE_URL}/sample/user`);
  const result = await response.json();
  return result;
}

async function getFolderInfo() {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  const result = await response.json();
  return result;
}

export { getUserInfo, getFolderInfo };
