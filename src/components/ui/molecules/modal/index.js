import ModalProvider from './context/ModalProvider';
import { StModalBackground } from './StModalBackground';
import { StModalInput } from './StModalInput';
import { StModalSubText } from './StModalSubText';
import { StModalWrapper } from './StModalWrapper';
import ModalCloseBtn from '../../atoms/button/ModalCloseBtn';
import { StModalActionBtn } from '../../atoms/button/StModalActionBtn';
import { StModalLabel } from '../../atoms/label/StModalLabel';

const Modal = Object.assign(ModalProvider, {
  StModalBackground,
  StModalWrapper,
  StModalLabel,
  StModalSubText,
  ModalCloseBtn,
  StModalActionBtn,
  StModalInput,
});

export default Modal;
