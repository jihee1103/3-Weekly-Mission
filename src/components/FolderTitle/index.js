import { useContext } from "react";
import { FolderPageStateContext } from "../../page/FolderPage";

const FolderTitle = () => {
  const { selectedFolderName } = useContext(FolderPageStateContext);

  return <h1>{selectedFolderName}</h1>;
};

export default FolderTitle;
