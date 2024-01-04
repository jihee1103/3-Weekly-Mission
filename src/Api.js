const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export async function UserFolderData() {
  const response = await fetch(`${API_BASE_URL}/api/sample/folder` );
  const data = await response.json();
  return data;
}

export async function UserIdData() {
  const response = await fetch(`${API_BASE_URL}/api/sample/user`);
  const data = await response.json();
  return data;
}