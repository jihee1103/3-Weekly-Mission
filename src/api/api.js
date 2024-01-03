const getUserData = async () => {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const result = await res.json();
  return result;
};

const getFolderData = async () => {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const result = await res.json();
  return result;
};

export { getUserData, getFolderData };
