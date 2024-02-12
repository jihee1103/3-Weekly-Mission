const getUser1Data = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const usersData = await response.json();
  return usersData;
};

export default getUser1Data;
