import { FolderNameProps } from "../../types/types";
import { DeleteFolderModal, RenameModal, ShareModal } from "./Modal";
import { useState } from "react";
import styles from "./FolderName.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FolderName({ selectedFolder }: FolderNameProps) {
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const handleOpenModalShare = () => {
    setSelectedModal("share");
  };
  const handleOpenModalRename = () => {
    setSelectedModal("rename");
  };
  const handleOpenModalDeleteFolder = () => {
    setSelectedModal("delete");
  };
  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <>
      <div className={cx("folderName-box")}>
        <div className={cx("folder-name")}>{selectedFolder.name}</div>
        {selectedFolder.id && (
          <div className={cx("folder-edit-box")}>
            <div onClick={handleOpenModalShare}>
              <img src="/images/share.png" alt="공유하기" />
              <span>공유</span>
            </div>
            <div onClick={handleOpenModalRename}>
              <img src="/images/pen.png" alt="이름변경하기" />
              <span>이름변경</span>
            </div>
            <div onClick={handleOpenModalDeleteFolder}>
              <img src="/images/delete.png" alt="삭제하기" />
              <span>삭제</span>
            </div>
          </div>
        )}
      </div>
      {selectedModal === "share" && (
        <ShareModal
          closeModal={closeModal}
          selectedModalName={selectedFolder.name}
        />
      )}
      {selectedModal === "rename" && (
        <RenameModal
          closeModal={closeModal}
          selectedModalName={selectedFolder.name}
        />
      )}
      {selectedModal === "delete" && (
        <DeleteFolderModal
          closeModal={closeModal}
          selectedModalName={selectedFolder.name}
        />
      )}
    </>
  );
}
