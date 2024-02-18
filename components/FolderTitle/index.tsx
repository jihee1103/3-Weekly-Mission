"use client";

import { useContext } from "react";
import { FolderPageStateContext } from "../../app/folder/page";

const FolderTitle = () => {
  const context = useContext(FolderPageStateContext);
  if (!context) {
    return null;
  }
  const { selectedFolderName } = context;

  return <h1>{selectedFolderName}</h1>;
};

export default FolderTitle;
