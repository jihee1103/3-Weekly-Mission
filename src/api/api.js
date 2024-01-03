const API_BASE_URL = "https://bootcamp-api.codeit.kr";

const getUserData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/sample/user`);
  const result = await res.json();
  return result;
};

const getFolderData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/sample/folder`);
  const result = await res.json();
  return result;
};

export { getUserData, getFolderData };
