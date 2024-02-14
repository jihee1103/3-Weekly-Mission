import { ComponentProps, MutableRefObject } from 'react';

export type TModalComponent = React.ComponentType<any>;

export type TModalComponentProps<T> = T extends TModalComponent ? ComponentProps<T> & TModalHandler : never;

export type TModalComponentPropsWithoutModalRef<T extends TModalComponent> = T extends TModalComponent
  ? Omit<ComponentProps<T> & TModalHandler, 'modalRef'>
  : never;

export type TModalHandler = {
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit?: () => void;
  modalRef: MutableRefObject<HTMLElement | null> | null;
};

export type TModalStateContext = {
  ModalComponent: TModalComponent | null;
  props: TModalHandler;
  isModalOpen: boolean;
};

export type TModalDispatchContext = {
  open: <T extends TModalComponent>({
    ModalComponent,
    props,
  }: {
    ModalComponent: T;
    props?: TModalComponentPropsWithoutModalRef<T>;
  }) => void;
  close: () => void;
};
