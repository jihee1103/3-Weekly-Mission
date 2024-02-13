import { useContext } from "react";
import { FolderStateContext } from "../../page/FolderPage";

const FolderTitle = () => {
  const { selectedFolderName } = useContext(FolderStateContext);

  return <h1>{selectedFolderName}</h1>;
};

export default FolderTitle;
