export async function fetchUserData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const result = await response.json();
  // console.log(result);
  return result;
}

export async function fetchFolderData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const result = await response.json();
  // console.log(result);
  console.log(result.folder.owner.profileImageSource);
  return result;
}
