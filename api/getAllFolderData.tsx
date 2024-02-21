import { FolderDataApiResponse } from "../utils/types";

const getAllFolderData = async (): Promise<FolderDataApiResponse> => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/links"
  );
  const body: FolderDataApiResponse = await response.json();
  return body;
};

export default getAllFolderData;
