import { ALL_LINKS_ID } from "../../link/data-access-link/constant";
import { IconAndTextButton } from "../IconAndTextButton/IconAndTextButton";
import { AddFolderButton } from "../add-folder-button/AddFolderButton";
import { FolderButton } from "../folder-button/FolderButton";
import { ALL_LINKS_TEXT, BUTTONS } from "./constant";
import "./FolderToolBar.css";

export const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;

  return (
    <div className="FolderToolBar">
      <div className="Folders">
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className="Add-button">
        <AddFolderButton />
      </div>
      <h2 className="Folder-name">{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className="Buttons">
          {BUTTONS.map((buttonData) => (
            <IconAndTextButton key={buttonData.text} {...buttonData} />
          ))}
        </div>
      )}
    </div>
  );
};
