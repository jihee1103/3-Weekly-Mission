export async function fetchUserData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const result = await response.json();
  // console.log(result);
  return result;
}
