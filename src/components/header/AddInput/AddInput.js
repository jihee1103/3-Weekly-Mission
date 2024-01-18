import LINKIMAGE from '../../../assets/link.svg';
import { useState } from 'react';
import React from 'react';
import PopupMessage from '../../modal/modal';
import AddFolderModal from '../../modal/addFolderModal'

export default function AddInput() {
  const [modalOpen, setModalOpen] = useState(false);
  const handlePopupMessage = () => {
    setModalOpen(!modalOpen);
  }
  const isClose = (value) => {
    setModalOpen(value);
  }

  return (
    <div className="AddInput">
      <div className="AddInput-input">
        <div className="AddInput-fnc">
          <img src={LINKIMAGE} alt="" />
          <input type="text" placeholder="링크를 추가해 보세요"/> 
          <button onClick={handlePopupMessage}><span className="text">추가하기</span></button>
          <PopupMessage modalOpen={modalOpen} onClick={isClose} component={<AddFolderModal/>}/>
        </div>
      </div>
    </div>
  );
}
