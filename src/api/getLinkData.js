export const getLinkData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/links"
  );
  const body = await response.json();
  return body;
};
