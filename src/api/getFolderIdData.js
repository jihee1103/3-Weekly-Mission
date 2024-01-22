export const getFolderIdData = async (folderId) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const body = await response.json();
  return body;
};
