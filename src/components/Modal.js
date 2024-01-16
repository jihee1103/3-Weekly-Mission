import useGetFolderListAsync from "../hooks/useGetFolderListAsync";
import modalCloseIcon from "../assets/modal_close_icon.svg";
import kakao from "../assets/kakao_share.svg";
import facebook from "../assets/facebook_share.svg";
import linkIcon from "../assets/link.svg";

import "./Modal.css";

export default function Modal({ state, onClick, link }) {
  const cancelModal = (e) => {
    e.stopPropagation();
    onClick();
  };

  const folderList = useGetFolderListAsync();

  return (
    <>
      {state["state"] && (
        <>
          <div className="modal-background" />
          <div className="modal-container">
            <button className="modal-close-btn" onClick={cancelModal}>
              <img
                className="modal-close-icon"
                src={modalCloseIcon}
                alt="modal-close-img"
              />
            </button>
            {(state["target"] === "공유" && (
              <>
                <h2 className="modal-title">폴더 공유</h2>
                <h3 className="folder-name">{state["folderName"]}</h3>
                <div className="share-icon-wrapper">
                  <button className="share-icon-bg kakao"><img  src={kakao}/><span>카카오톡</span></button>
                  <button className="share-icon-bg facebook"><img src={facebook}/></button>
                  <button className="share-icon-bg link-icon"><img src={linkIcon}/></button>
                </div>
              </>
            )) ||
              (state["target"] === "이름 변경" && (
                <>
                  <h2 className="modal-title">폴더 이름 변경</h2>
                  <input
                    className="modal-input"
                    placeholder={state["folderName"]}
                  />
                  <button className="modal-submit-btn">변경하기</button>
                </>
              )) ||
              (state["target"] === "삭제" && (
                <>
                  <h2 className="modal-title">폴더 삭제</h2>
                  <h3>{state["folderName"]}</h3>
                  <button className="modal-submit-btn modal-delete-btn">
                    삭제하기
                  </button>
                </>
              )) ||
              (state["target"] === "폴더추가" && (
                <>
                  <h2 className="modal-title">폴더 추가</h2>
                  <input className="modal-input" />
                  <button className="modal-submit-btn">추가하기</button>
                </>
              )) ||
              (state["target"] === "삭제하기" && (
                <>
                  <h2 className="modal-title">링크 삭제</h2>
                  <h3>{state["url"]}</h3>
                  <button className="modal-submit-btn modal-delete-btn">
                    삭제하기
                  </button>
                </>
              )) ||
              ((state["target"] === "폴더에 추가" || "추가하기") && (
                <>
                  <h2 className="modal-title">폴더에 추가</h2>
                  <h3>{state["url"] ?? link}</h3>
                  <div className="folder-item-wrapper">
                    {folderList.map((folder) => (
                      <div key={folder.id} className="folder-item">
                        {folder?.name}
                      </div>
                    ))}
                  </div>
                  <button className="modal-submit-btn">추가하기</button>
                </>
              ))}
          </div>
        </>
      )}
    </>
  );
}
