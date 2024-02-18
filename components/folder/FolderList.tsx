import { useEffect, useState } from "react";
import { UserFolder, getUserFolders } from "../../api/api";
import { FolderListProps } from "../../types/types";
import { AddFolderModal } from "./Modal";
import styles from "./FolderList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FolderList({
  onSelectFolder,
  selectedFolder,
}: FolderListProps) {
  const allSee: Pick<UserFolder, "id" | "name"> = {
    id: undefined,
    name: "전체",
  };
  const [folderNames, setFolderNames] = useState<UserFolder[]>();
  const handleFolderClick = (
    folder: UserFolder | Pick<UserFolder, "id" | "name">
  ) => {
    onSelectFolder(folder);
  };
  const [isModal, setIsModal] = useState(false);
  const handleOpenMoldalAddFolder = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  useEffect(() => {
    async function handleload() {
      setFolderNames(await getUserFolders(4));
    }
    handleload();
  }, []);
  return (
    <>
      <div className={cx("folder-list-box")}>
        <ul className={cx("folder-list")}>
          <li
            onClick={() => handleFolderClick(allSee)}
            className={cx("folder", {
              folderSelected: selectedFolder.name === "전체",
            })}
          >
            <div>전체</div>
          </li>
          {folderNames?.map((folder) => {
            return (
              <li
                className={cx("folder", {
                  folderSelected: selectedFolder.id === folder.id,
                })}
                key={folder.id}
                onClick={() => handleFolderClick(folder)}
              >
                <div>{folder.name}</div>
              </li>
            );
          })}
        </ul>
        <div className={cx("folder-add-box")}>
          <input className={cx("folder-add-input")}></input>
          <img
            onClick={handleOpenMoldalAddFolder}
            src="/images/add.png"
            alt="폴더추가하기"
          />
        </div>
      </div>
      {isModal && <AddFolderModal closeModal={closeModal} />}
    </>
  );
}
