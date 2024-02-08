import { useState } from "react";
import FolderButton from "./FolderButton";
import CardList from "../CardList/CardList";
import { ALL_LINKS_ID, ALL_LINKS_NAME } from "./constants";

import styles from "./FolderList.module.css";
import FloatingButton from "../FloatingButton/FloatingButton";

interface Props {
  folderData: any[];
  folderInfo: any[];
}

function FolderList({ folderData, folderInfo }: Props) {
  const [selectedFolderInfo, setSelectedFolderInfo] = useState([...folderInfo]);

  const handleFolderClick = (folderInfo: any) => {
    setSelectedFolderInfo([...folderInfo]);
  };

  return (
    <>
      <div className={styles.folderListBar}>
        <div className={styles.folderButtons}>
          <FolderButton
            key={ALL_LINKS_ID}
            name={ALL_LINKS_NAME}
            onClick={() => handleFolderClick([ALL_LINKS_ID, ALL_LINKS_NAME])}
            isSelected={ALL_LINKS_ID === selectedFolderInfo[0]}
          >
            전체
          </FolderButton>
          {folderData &&
            folderData.map((item) => (
              <FolderButton
                key={item.id}
                name={item.name}
                onClick={() => handleFolderClick([item.id, item.name])}
                isSelected={item.id === selectedFolderInfo[0]}
              />
            ))}
        </div>
        <FloatingButton />
      </div>
      <CardList
        folderData={folderData}
        selectedFolderId={selectedFolderInfo[0]}
        selectedFolderName={selectedFolderInfo[1]}
      ></CardList>
    </>
  );
}

export default FolderList;
