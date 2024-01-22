import { useState } from "react";
import IMAGE_URL from "../../constant/imageUrl";
import ModalAddLink from "../Modal/ModalAddLink";
import "./AddLinkInput.css";

const AddLinkInput = () => {
  const [showModalAddLink, setShowModalAddLink] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModalAddLink = () => {
    setShowModalAddLink(!showModalAddLink);
  };

  return (
    <div className="addLink">
      <input
        className="addLinkInput"
        placeholder="링크를 검색해 보세요."
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <img
        className="LinkIcon"
        src={`${IMAGE_URL}/assets/link.png`}
        alt="링크 아이콘"
      />
      <button className="addButton" onClick={handleModalAddLink}>
        추가하기
      </button>
      {showModalAddLink && (
        <ModalAddLink handleClose={handleModalAddLink} link={inputText} />
      )}
    </div>
  );
};
export default AddLinkInput;
