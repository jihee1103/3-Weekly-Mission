import { FolderIdApiResponse } from "../utils/types";

const getFolderIdData = async (
  folderId: string
): Promise<FolderIdApiResponse> => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const body: FolderIdApiResponse = await response.json();
  return body;
};

export default getFolderIdData;
