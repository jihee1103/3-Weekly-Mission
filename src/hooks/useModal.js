import { useState } from 'react';

import { useToggle } from './useToggle';

const useModal = () => {
  const [Modal, setModal] = useState(null);

  const [ModalInfo, setModalInfo] = useState({
    modalName: '',
    folderName: '',
    subTextName: '',
    linkUrl: '',
    closeModalCallback: null,
  });
  const [isModalOpen, toggleModal] = useToggle();

  const closeModal = (closeModalCallback) => {
    toggleModal();

    if (typeof closeModalCallback === 'function' && isModalOpen) closeModalCallback();
  };

  // todo: 문제점: 모달 전부를 커버하려다 보니 받는 property가 많아질 듯. 열고 닫는 역할만 하고 프로퍼티는 Modal에 직접 넣는 방향으로 개선할 것 -> modalName, folderName, subTextName, linkUrl은 고정으로 받고 나머지는 ModalComponent로 일단 직접 넣기.
  // ? 애초에 모달 컴포넌트를 프롭으로 받아야 하는 이유가 있나?
  const toggleAndSetModal = ({
    modalName = '',
    folderName = '',
    subTextName = '',
    linkUrl = '',
    closeModalCallback,
    ModalComponent,
  }) => {
    toggleModal(); // 여는 순간 실행
    setModalInfo(() => {
      if (!isModalOpen) {
        return {
          modalName,
          folderName,
          subTextName,
          linkUrl,
          closeModalCallback,
        };
      }

      return {
        modalName: '',
        folderName: '',
        linkUrl: '',
        subTextName: '',
      };
    });
    setModal(() => {
      if (!isModalOpen) return ModalComponent;

      return null;
    });
  };

  const ModalComponent = (props) => {
    const validProps = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key in ModalInfo) {
      if (ModalInfo[key]) {
        validProps[key] = ModalInfo[key];
      }
    }

    return <Modal {...props} closeModal={() => closeModal(ModalInfo.closeModalCallback)} {...validProps} />;
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
