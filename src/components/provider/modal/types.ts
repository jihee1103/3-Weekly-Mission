import { ComponentProps, MutableRefObject } from 'react';

export type TModalComponent = React.FunctionComponent<{ [key: string]: any }>;

export type TModalComponentProps<T> = T extends TModalComponent ? ComponentProps<T> & TModalHandler : never;

export type TModalComponentPropsWithoutModalRef<T extends TModalComponent> = T extends TModalComponent
  ? Omit<ComponentProps<T>, 'modalRef'>
  : never;

export type TModalHandler = {
  // [key: string]: any; // 👈 이걸 주석 처리 하니까 openModal에서 props 타입 추론 제대로 뜸
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
  open: <T extends TModalComponent>({ ModalComponent, props }: { ModalComponent: T; props?: any }) => void;
  close: () => void;
};
