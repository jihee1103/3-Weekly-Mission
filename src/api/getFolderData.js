export const getFolderData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const body = await response.json();
  return body;
};
