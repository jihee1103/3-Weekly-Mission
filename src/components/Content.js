import penIcon from "../assets/pen.svg";
import shareIcon from "../assets/share.svg";
import deleteIcon from "../assets/delete.svg";
import plusImg from "../assets/puls_img.svg";
import useGetUserFolderAsync from "../hooks/useGetUserFolderAsync";
import useGetFolderListAsync from "../hooks/useGetFolderListAsync";
import Card from "./Card";
import { useState } from "react";
import "./Content.css";

export default function Content() {
  const [targetFolder, setTargetFolder] = useState({
    title: "전체",
    id: 0,
  });

  const datas = useGetUserFolderAsync();
  const folderList = useGetFolderListAsync();
  let isEmpty = false;

  const handleClick = (title, id) => {
    setTargetFolder({
      title: title,
      id: id,
    });
  };

  isEmpty = !(
    datas?.some((data) => data.folder_id === targetFolder["id"]) ||
    targetFolder["id"] === 0
  );

  return (
    <section className="content">
      <div className="folder-title-container">
        <div className="folder-title-wrapper">
          <button
            className={
              targetFolder["title"] === "전체"
                ? "folder-title selected"
                : "folder-title"
            }
            onClick={() => handleClick("전체", 0)}
          >
            전체
          </button>
          {folderList?.map((folder) => (
            <button
              className={
                targetFolder["title"] === folder.name
                  ? "folder-title selected"
                  : "folder-title"
              }
              key={folder.id}
              onClick={() => {
                handleClick(folder.name, folder.id);
              }}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className="plus-btn add-folder-btn-wrapper">
          <span>폴더추가</span>
          <img className="plus-svg" src={plusImg} alt="plus-img" />
        </button>
      </div>

      <div className="selected-category">
        <h2>{targetFolder["title"]}</h2>
        {targetFolder["title"] === "전체" || (
          <div className="folder-edits">
            <span className="edit-function">
              <img src={shareIcon} alt="shareIcon" />
              공유
            </span>
            <span className="edit-function">
              <img src={penIcon} alt="penIcon" />
              이름변경
            </span>
            <span className="edit-function">
              <img src={deleteIcon} alt="deleteIcon" />
              삭제
            </span>
          </div>
        )}
      </div>
      {isEmpty ? (
        <div className="no-link">저장된 링크가 없습니다</div>
      ) : (
        <div className="card-container">
          {datas
            ?.filter(
              (data) =>
                data.folder_id === targetFolder["id"] ||
                targetFolder["id"] === 0
            )
            .map((data) => (
              <Card key={data.id} data={data} />
            ))}
        </div>
      )}
    </section>
  );
}
