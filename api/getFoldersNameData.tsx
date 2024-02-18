import { FolderNameApiResponse } from "../utils/types";

const getFoldersNameData = async (): Promise<FolderNameApiResponse> => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const body: FolderNameApiResponse = await response.json();
  return body;
};

export default getFoldersNameData;
