import { useState } from "react";
import * as S from "./ModalStyle";
import Image from "next/image";

type onCloseFunction = () => void;

export function AddModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  const [select, Setselect] = useState<string | null>(null);
  const handelSelect = (link: string) => {
    Setselect(link);
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <Image
            src={"/assets/Icons/close.png"}
            width={24}
            height={24}
            alt="모달 닫기 이미지"
          />
        </S.ModalClose>
        <S.FeatureWrapper>
          <h1>폴더에 추가</h1>
          <span>링크 주소</span>
        </S.FeatureWrapper>
        <S.FolderListBox>
          {["코딩 팁", "채용 사이트", "유용한 글", "나만의 장소"].map(
            (link, index) => (
              <S.FolderList key={index} onClick={() => handelSelect(link)}>
                <span>{link}</span> <S.LinkCount>7개 링크</S.LinkCount>
              </S.FolderList>
            )
          )}
        </S.FolderListBox>
        <S.ModalButton>
          <span>추가하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function SortAddModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <Image
            src={"/assets/Icons/close.png"}
            width={24}
            height={24}
            alt="모달 닫기 이미지"
          />
        </S.ModalClose>
        <S.Feature>폴더 추가</S.Feature>
        <S.ContentInput />
        <S.ModalButton>
          <span>추가하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}

export function DeleteLinkModal({ onClose }: { onClose: onCloseFunction }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalClose onClick={handleClose}>
          <Image
            src={"/assets/Icons/close.png"}
            width={24}
            height={24}
            alt="모달 닫기 이미지"
          />
        </S.ModalClose>
        <S.FeatureWrapper>
          <h1>링크 삭제</h1>
          <span>https://www.hello.com</span>
        </S.FeatureWrapper>
        <S.ModalButton $ColorRed>
          <span>삭제하기</span>
        </S.ModalButton>
      </S.ModalContainer>
    </S.Modal>
  );
}
