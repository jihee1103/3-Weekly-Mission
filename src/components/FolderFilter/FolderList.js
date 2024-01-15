import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getFoldersById } from "../../api";
import ListButton from "../ListButton/ListButton";
import "./FolderList.css";

function FolderList({ onClickList, id, listName }) {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    async function getFolders() {
      const { data } = await getFoldersById(id);
      if (!data) return;
      setFolders(data);
    }

    getFolders();
  }, [id]);

  const Img = styled.img`
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;

    @media (max-width: 767px) {
      content: url("./images/addwhite.png");
    }
  `;

  return (
    <div className="folder-list">
      <div className="buttons">
        <ListButton listName={listName} onClickList={onClickList}>
          전체
        </ListButton>
        {folders.map((element) => {
          return (
            <ListButton
              key={element.id}
              id={element.id}
              onClickList={onClickList}
              listName={listName}
            >
              {element.name}
            </ListButton>
          );
        })}
      </div>
      <div className="add-list">
        <input className="add-list-input" />
        <Img
          className="add-list-button"
          src="./images/addpurple.png"
          alt="+ 아이콘"
        />
      </div>
    </div>
  );
}

export default FolderList;
