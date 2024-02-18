import { SampleFolderDataApiResponse } from "../utils/types";

const getSampleFolderData = async (): Promise<SampleFolderDataApiResponse> => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const body: SampleFolderDataApiResponse = await response.json();
  return body;
};

export default getSampleFolderData;
