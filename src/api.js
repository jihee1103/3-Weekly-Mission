const api = "https://bootcamp-api.codeit.kr/api";

export const getSampleUser = async () => {
  const response = await fetch(`${api}/sample/user`);
  const body = await response.json();
  return body;
};
