const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const getUser = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getFolder = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getSampleFolder = async () => {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getTotalFolderLinks = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1/links`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};

export const getFolderLinks = async (folderId) => {
  const response = await fetch(`${API_BASE_URL}/users/1/links?folderId=${folderId}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  return await response.json();
};
