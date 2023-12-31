const getUserData = async () => {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const result = await res.json();
  return result;
};

const getFolderData = async () => {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const result = await res.json();
  return result;
};

// const getUserData = async () => {
//   try {
//     const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
//     const result = await res.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error; // Re-throw the error to propagate it to the calling code
//   }
// };

// const getFolderData = async () => {
//   try {
//     const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
//     const result = await res.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching folder data:", error);
//     throw error; // Re-throw the error to propagate it to the calling code
//   }
// };

export { getUserData, getFolderData };
