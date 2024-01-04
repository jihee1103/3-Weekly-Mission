export async function UserFolderData() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder" );
  const data = await response.json();
  return data;
}

export async function UserIdData() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const data = await response.json();
  return data;
}



//api 분리해서 해보기(해야될것)