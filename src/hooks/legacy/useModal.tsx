/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ComponentProps, useState } from 'react';

import { useCloseModal } from '@hooks/useCloseModal';

export interface CloseModal {
  closeModal: () => void;
}
type ModalComponent = React.FunctionComponent<CloseModal & { [key: string]: any }>;
type GenerateModalComponentProps<T> = T extends ModalComponent
  ? ComponentProps<T> & { closeModalCallback?: () => void }
  : never;
type ModalComponentPropsWithoutCloseModal<T extends ModalComponent> = Omit<
  GenerateModalComponentProps<T>,
  'closeModal' | 'modalRef'
>;
type DirectModalComponentProps<T extends ModalComponent> = ModalComponentPropsWithoutCloseModal<T>;

const useModal = <MC extends ModalComponent, MCP extends GenerateModalComponentProps<MC>>() => {
  const [Modal, setModal] = useState<MC>();

  const [ModalInfo, setModalInfo] = useState<MCP>();
  const { isModalOpen, toggleModal, modalRef } = useCloseModal();

  const closeModal = (closeModalCallback?: () => void) => {
    if (isModalOpen) {
      toggleModal();

      if (typeof closeModalCallback === 'function' && isModalOpen) closeModalCallback();
    }
  };

  const toggleAndSetModal = <VMC extends MC>({
    ModalComponent,
    ...rest
  }: { ModalComponent: VMC } & ModalComponentPropsWithoutCloseModal<VMC>) => {
    toggleModal(); // 여는 순간 실행

    setModalInfo(() => {
      if (!isModalOpen) {
        return rest as unknown as MCP;
      }

      return undefined;
    });
    setModal(() => {
      if (!isModalOpen) return ModalComponent as unknown as MC;

      return undefined;
    });
  };

  const ModalComponent = (directProps?: DirectModalComponentProps<MC>) => {
    const validProps: { [key: string]: any } = {};

    if (ModalInfo) {
      const keysA = Object.keys(ModalInfo);

      for (let i = 0; i < keysA.length; i++) {
        if (ModalInfo[keysA[i]]) validProps[keysA[i]] = ModalInfo[keysA[i]];
      }
    }

    if (!Modal) throw new Error('ModalComponent property should be passed to toggleAndSetModal function');

    return (
      // @ts-ignore
      <Modal
        modalRef={modalRef}
        closeModal={() => closeModal(ModalInfo?.closeModalCallback)}
        {...validProps}
        {...directProps}
      />
    );
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
