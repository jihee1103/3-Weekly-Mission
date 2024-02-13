const getFoldersNameData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const body = await response.json();
  return body;
};

export default getFoldersNameData;
