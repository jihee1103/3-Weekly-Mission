import { useEffect, useState } from "react";
import { UserFolder, getUserFolders } from "../../api";
import useModals from "../../hooks/useModals";
import Modals from "./Modals";
import styled from "styled-components";
import { AllSee, FolderListProps } from "../../types";
export default function FolderList({
  onSelectFolder,
  selectedFolder,
}: FolderListProps) {
  const allSee: AllSee = {
    id: undefined,
    name: "전체",
  };
  const [folderNames, setFolderNames] = useState<UserFolder[]>();
  const handleFolderClick = (folder: UserFolder | AllSee) => {
    onSelectFolder(folder);
  };
  const { openModal, closeModal, modal } = useModals();
  const handleModalAddFolder = () => {
    openModal({ type: "addFolder", props: null });
  };
  useEffect(() => {
    async function handleload() {
      setFolderNames(await getUserFolders(4));
    }
    handleload();
  }, []);
  return (
    <>
      <FolderListBox>
        <ul className="folder-list">
          <li
            onClick={() => handleFolderClick(allSee)}
            className={`folder ${
              selectedFolder.name === "전체" ? "folderSelected" : ""
            }`}
          >
            <div>전체</div>
          </li>
          {folderNames?.map((folder) => {
            return (
              <li
                className={`folder ${
                  selectedFolder?.id === folder.id ? "folderSelected" : ""
                }`}
                key={folder.id}
                onClick={() => handleFolderClick(folder)}
              >
                <div>{folder.name}</div>
              </li>
            );
          })}
        </ul>
        <div className="folder-add-box">
          <input className="folder-add-input"></input>
          <img
            onClick={handleModalAddFolder}
            src="/imgs/add.png"
            alt="폴더추가하기"
          />
        </div>
      </FolderListBox>
      <Modals modal={modal} closeModal={closeModal} />
    </>
  );
}

const FolderListBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;

  .folder-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .folder {
    padding: 8px 12px;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: #fff;
  }

  .folderSelected {
    color: #fff;
    background: var(--Linkbrary-primary-color, #6d6afe);
  }

  .folder-add-box {
    cursor: pointer;
    display: flex;

    @media screen and (max-width: 767px) {
      padding: 8px 24px;
      position: fixed;
      z-index: 1;
      bottom: 101px;
      left: 50%;
      transform: translate(-50%);
      border-radius: 20px;
      border: 1px solid var(--Linkbrary-white, #fff);
      background: var(--Linkbrary-primary-color, #6d6afe);
    }
  }

  .folder-add-box input {
    border: none;

    @media screen and (max-width: 767px) {
      background: var(--Linkbrary-primary-color, #6d6afe);
    }
  }

  .folder-add-box img {
    @media screen and (max-width: 767px) {
      filter: brightness(0%);
    }
  }
`;
