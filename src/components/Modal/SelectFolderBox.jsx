import { useState } from "react";

import SelectFolderItem from "./SelectFolderItem";
import styles from "./SelectFolderBox.module.css";

function SelectFolderBox({ folderData }) {
  const [selectedItem, setSelectedItem] = useState(false);

  return (
    <div className={styles.folderContainer}>
      {folderData &&
        folderData.map((item) => (
          <SelectFolderItem
            key={item.id}
            name={item.name}
            count={item?.link?.count}
            onClick={() => setSelectedItem(item.id)}
            isSelected={item.id === selectedItem}
          />
        ))}
    </div>
  );
}

export default SelectFolderBox;
