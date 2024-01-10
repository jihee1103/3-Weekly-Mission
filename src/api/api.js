const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export const getUserData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/sample/user`);
  const result = await res.json();
  return result;
};

export const getFolderData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/sample/folder`);
  const result = await res.json();
  return result;
};

export const getFolderList = async () => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/folders`);
  const result = await res.json();
  return result;
};

export const getAllCardData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/links`);
  const result = await res.json();
  return result;
};

export const getCardDataById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/links?folderId=${id}`);
  const result = await res.json();
  return result;
};
