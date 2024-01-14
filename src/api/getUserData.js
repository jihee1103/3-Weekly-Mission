export const getUserData = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const body = await response.json();
  return body;
};
