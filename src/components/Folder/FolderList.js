import { useState } from "react";
import Folder from "module";
import styled from "styled-components";
const FolderListBar = styled.div``;
function FolderList() {
  const [folder, setFolder] = useState(null);

  return (
    <>
      {folder.map((item) => {
        <Folder />;
      })}
    </>
  );
}

export default FolderList;
