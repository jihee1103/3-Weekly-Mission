const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export const getUserData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/sample/user`);
  return res.json();
};

export const getFolderData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/sample/folder`);
  return res.json();
};

export const getFolderList = async () => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/folders`);
  return res.json();
};

export const getAllCardData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/links`);
  return res.json();
};

export const getCardDataById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/links?folderId=${id}`);
  return res.json();
};

export const getFolderUserData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/users/1`);
  return res.json();
};
