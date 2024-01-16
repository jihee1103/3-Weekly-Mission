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
                <h2 className="modal-title having-folder-and-link">
                  폴더 공유
                </h2>
                <h3 className="link-and-folder-name">{state["folderName"]}</h3>
                <div className="share-icon-wrapper">
                  <button className="share-icon-btn">
                    <img className="share-icon kakao" src={kakao} />
                    <span className="share-icon-name">카카오톡</span>
                  </button>
                  <button className="share-icon-btn">
                    <img className="share-icon facebook" src={facebook} />
                    <span className="share-icon-name">페이스북</span>
                  </button>
                  <button className="share-icon-btn">
                    <img className="share-icon link-icon" src={linkIcon} />
                    <span className="share-icon-name">링크 복사</span>
                  </button>
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
                  <h2 className="modal-title having-folder-and-link">
                    폴더 삭제
                  </h2>
                  <h3 className="link-and-folder-name">
                    {state["folderName"]}
                  </h3>
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
                  <h2 className="modal-title having-folder-and-link">
                    링크 삭제
                  </h2>
                  <h3 className="link-and-folder-name">{state["url"]}</h3>
                  <button className="modal-submit-btn modal-delete-btn">
                    삭제하기
                  </button>
                </>
              )) ||
              ((state["target"] === "폴더에 추가" || "추가하기") && (
                <>
                  <h2 className="modal-title having-folder-and-link">
                    폴더에 추가
                  </h2>
                  <h3 className="link-and-folder-name">
                    {state["url"] ?? link}
                  </h3>
                  <div className="folder-item-wrapper">
                    {folderList.map((folder) => (
                      <div key={folder?.id} className="folder-item">
                        <span className="link-name">{folder?.name}</span>
                        <span className="link-length">
                          {folder?.link?.length ?? 0}개 링크
                        </span>
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
