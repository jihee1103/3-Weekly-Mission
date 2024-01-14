import { useState } from 'react';

import { useToggle } from './useToggle';

const useModal = () => {
  const [Modal, setModal] = useState(null);

  const [ModalInfo, setModalInfo] = useState({
    modalName: '',
    folderName: '',
    subTextName: '',
    linkUrl: '',
  });
  const [isModalOpen, isModalOpenToggler] = useToggle();

  const toggleAndSetModal = ({ modalName = '', folderName = '', subTextName = '', linkUrl = '', ModalComponent }) => {
    isModalOpenToggler();
    setModalInfo(() => {
      if (!isModalOpen) {
        return {
          modalName,
          folderName,
          subTextName,
          linkUrl,
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

  // const toggleAndSetModal = useCallback(
  //   (ModalComponent, modalName, subTextName) => {
  //     isModalOpenToggler();
  //     setModalInfo(() => {
  //       if (!isModalOpen) {
  //         return {
  //           modalName,
  //           subTextName,
  //           ModalComponent,
  //         };
  //       }

  //       return {
  //         modalName: '',
  //         subTextName: '',
  //         ModalComponent: <></>,
  //       };
  //     });
  //   },
  //   [isModalOpen],
  // );

  // // todo: folder name, urlName 넣어줘야 함.
  const ModalComponent = () => {
    const validProps = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key in ModalInfo) {
      if (ModalInfo[key]) {
        validProps[key] = ModalInfo[key];
      }
    }

    return <Modal closeModal={isModalOpenToggler} {...validProps} />;
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
