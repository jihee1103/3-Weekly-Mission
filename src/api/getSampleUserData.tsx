import { SampleUserDataApiResponse } from "../utils/types";

const getSampleUserData = async (): Promise<SampleUserDataApiResponse> => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const body: SampleUserDataApiResponse = await response.json();
  return body;
};

export default getSampleUserData;
