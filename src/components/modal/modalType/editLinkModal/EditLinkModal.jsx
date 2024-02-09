import Button from "../../../button/Button";
import CloseButton from "../../../button/CloseButton";
import stylesAddLink from "./AddLinkModal.module.css";
import stylesDeleteLink from "./DeleteLinkModal.module.css";

function EditLinkModal() {
  return;
}

EditLinkModal.AddLink = AddLinkModal;
EditLinkModal.DeleteLink = DeleteLinkModal;

function AddLinkModal({ onModalCloseClick }) {
  return (
    <div className={stylesAddLink.modal}>
      <CloseButton
        className={stylesAddLink.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesAddLink.title}>폴더에 추가</h2>
      <h3 className={stylesAddLink.linkUrl}>링크 주소</h3>
      <div className={stylesAddLink.folderList}>
        <div>코딩팁</div>
        <div>채용 사이트</div>
        <div>유용한 글</div>
      </div>
      <Button className={stylesAddLink.addButton}>추가하기</Button>
    </div>
  );
}

function DeleteLinkModal({ onModalCloseClick }) {
  return (
    <div className={stylesDeleteLink.modal}>
      <CloseButton
        className={stylesDeleteLink.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesDeleteLink.title}>링크 삭제</h2>
      <h3 className={stylesDeleteLink.linkUrl}>링크 주소</h3>
      <Button className={stylesDeleteLink.deleteButton}>삭제하기</Button>
    </div>
  );
}

export default EditLinkModal;
