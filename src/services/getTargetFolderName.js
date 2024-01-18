const getTargetFolderName = (folderListData, sharedFolderId) => {
  const foundFolder = folderListData?.find((folder) => {
    return folder?.id === Number(sharedFolderId);
  });
  return foundFolder;
};

export default getTargetFolderName;
