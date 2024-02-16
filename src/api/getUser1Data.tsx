import { User1DataApiResponse } from "../utils/types";

const getUser1Data = async (): Promise<User1DataApiResponse> => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const usersData: User1DataApiResponse = await response.json();
  return usersData;
};

export default getUser1Data;
