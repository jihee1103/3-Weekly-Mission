import { TModalComponent, TModalComponentProps, useModalDispatch } from '@components/provider/modal';

export const useModal = <MC extends TModalComponent>() => {
  const { close, open } = useModalDispatch();

  // VMC는 MC 타입을 충족시키는 컴포넌트 (생각해보면 openModal이라는 메서드를 노출시켜서 중복해서 사용하는 곳이 있을 수 있음.)
  const openModal = <VMC extends MC>({
    Component,
    props,
  }: {
    Component: VMC;
    props?: Omit<TModalComponentProps<VMC>, 'modalRef'>;
  }) => {
    open({ ModalComponent: Component, props });
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
};
