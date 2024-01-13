import { useState } from "react";
import ModalDeleteLink from "../Modal/ModalDeleteLink";
import "./Dropdown.css";

const Dropdown = ({ link }) => {
  const [showModalDeleteLink, setShowModalDeleteLink] = useState(false);
  const modalLink = link.link;

  const handleModalDeleteLink = () => {
    setShowModalDeleteLink(!showModalDeleteLink);
  };
  return (
    <div className="dropdown">
      <p
        className="dropdownMenu"
        onClick={(e) => {
          e.stopPropagation();
          handleModalDeleteLink();
        }}
      >
        삭제하기
      </p>

      <p className="dropdownMenu">폴더에 추가</p>
      {showModalDeleteLink && (
        <ModalDeleteLink handleClose={handleModalDeleteLink} link={modalLink} />
      )}
    </div>
  );
};
export default Dropdown;
